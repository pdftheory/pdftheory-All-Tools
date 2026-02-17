/**
 * PDF Text Color Processor
 * Requirements: 5.1
 * 
 * Renders pages to canvas and replaces pixels within a specified
 * brightness range with the target color. Works for both dark text
 * on light backgrounds and light text on dark backgrounds.
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib, loadPdfjs } from '../loader';
import { hexToRgb, getPageIndices } from '../utils';

export interface TextColorOptions {
  color: { r: number; g: number; b: number } | string;
  pages?: number[] | 'all' | 'odd' | 'even';
  // Mode: 'dark' = change dark pixels (text on light bg), 'light' = change light pixels (text on dark bg)
  mode?: 'dark' | 'light';
  threshold?: number; // Brightness threshold (0-255, default 128)
  scope?: 'all' | 'word' | 'line';
  searchValue?: string;
  scale?: number; // Render scale for quality (default 3)
}

export class TextColorProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const inputOptions = options as Partial<TextColorOptions>;
    const textOptions: TextColorOptions = {
      color: inputOptions.color ?? { r: 0, g: 0, b: 0 },
      pages: inputOptions.pages ?? 'all',
      mode: inputOptions.mode ?? 'dark',
      threshold: inputOptions.threshold ?? 128,
      scope: inputOptions.scope ?? 'all',
      searchValue: inputOptions.searchValue ?? '',
      scale: inputOptions.scale ?? 3,
    };

    if (files.length !== 1) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Exactly 1 PDF file is required.');
    }

    try {
      this.updateProgress(5, 'Loading PDF libraries...');
      const [pdfLib, pdfJs] = await Promise.all([loadPdfLib(), loadPdfjs()]);

      this.updateProgress(10, 'Loading PDF...');
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();

      // Load with pdf.js for rendering
      const pdfjsDoc = await pdfJs.getDocument({ data: arrayBuffer }).promise;
      const totalPages = pdfjsDoc.numPages;

      const pagesToProcess = getPageIndices(textOptions.pages, totalPages);

      // Create new PDF document
      const newPdf = await pdfLib.PDFDocument.create();

      this.updateProgress(15, 'Changing text color...');

      // Convert color to 0-1 range
      const colorObj = typeof textOptions.color === 'string'
        ? hexToRgb(textOptions.color)
        : textOptions.color;

      const { r, g, b } = colorObj;
      const threshold = textOptions.threshold!;
      const isDarkMode = textOptions.mode === 'dark';

      for (let i = 0; i < totalPages; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        const pageNum = i + 1;
        const progressPercent = 15 + (75 * (i / totalPages));
        this.updateProgress(progressPercent, `Processing page ${pageNum} of ${totalPages}...`);

        // Get page and its original dimensions
        const page = await pdfjsDoc.getPage(pageNum);
        const originalViewport = page.getViewport({ scale: 1 });
        const originalWidth = originalViewport.width;
        const originalHeight = originalViewport.height;

        // Add page with ORIGINAL dimensions
        const newPage = newPdf.addPage([originalWidth, originalHeight]);

        if (pagesToProcess.includes(i)) {
          // Render at higher scale for better quality
          const renderScale = textOptions.scale || 3;
          const renderViewport = page.getViewport({ scale: renderScale });

          const canvas = document.createElement('canvas');
          const width = renderViewport.width;
          const height = renderViewport.height;
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d')!;

          await page.render({
            canvasContext: ctx,
            viewport: renderViewport,
          }).promise;

          // Prepare masking buffer (fast O(1) lookup per pixel)
          const mask = new Uint8Array(width * height);

          const textContent = await page.getTextContent();
          const items = textContent.items as any[];
          const searchLower = textOptions.searchValue?.toLowerCase() || '';

          // Padding (2px) to catch anti-aliased edges and descenders
          const p = 2 * renderScale;

          const addRectToMask = (r: { x: number, y: number, w: number, h: number }) => {
            const startX = Math.max(0, Math.floor(r.x - p));
            const endX = Math.min(width, Math.ceil(r.x + r.w + p));
            const startY = Math.max(0, Math.floor(r.y - p));
            const endY = Math.min(height, Math.ceil(r.y + r.h + p));

            for (let my = startY; my < endY; my++) {
              for (let mx = startX; mx < endX; mx++) {
                mask[my * width + mx] = 1;
              }
            }
          };

          if (textOptions.scope === 'all') {
            items.forEach(item => {
              const tx = pdfJs.Util.transform(renderViewport.transform, item.transform);
              addRectToMask({
                x: tx[4],
                y: tx[5] - (item.height * renderScale),
                w: item.width * renderScale,
                h: item.height * renderScale
              });
            });
          } else {
            // Group items by Y coordinate with small tolerance (3 units)
            const tolerance = 3 * renderScale;
            const lineGroups: Array<{ y: number, items: any[] }> = [];

            items.forEach(item => {
              const tx = pdfJs.Util.transform(renderViewport.transform, item.transform);
              const y = tx[5];
              let group = lineGroups.find(g => Math.abs(g.y - y) <= tolerance);
              if (!group) {
                group = { y, items: [] };
                lineGroups.push(group);
              }
              group.items.push({ ...item, tx });
            });

            // Sort lines top to bottom (Natural reading order: 1 = top)
            // In viewport coordinates, Y usually increases downwards, but let's confirm the sort
            lineGroups.sort((a, b) => a.y - b.y);

            if (textOptions.scope === 'line') {
              const targetLines = searchLower.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
              targetLines.forEach(lineIdx => {
                const group = lineGroups[lineIdx - 1];
                if (group) {
                  group.items.forEach(item => {
                    addRectToMask({
                      x: item.tx[4],
                      y: item.tx[5] - (item.height * renderScale),
                      w: item.width * renderScale,
                      h: item.height * renderScale
                    });
                  });
                }
              });
            } else if (textOptions.scope === 'word') {
              lineGroups.forEach(group => {
                // Sort items in line by X (left to right)
                group.items.sort((a, b) => a.tx[4] - b.tx[4]);

                // Reconstruct full string and track item boundaries
                let lineStr = '';
                const boundaries: Array<{ start: number, end: number, item: any }> = [];

                group.items.forEach(item => {
                  const start = lineStr.length;
                  lineStr += item.str;
                  const end = lineStr.length;
                  boundaries.push({ start, end, item });
                });

                // Find all matches
                let matchIdx = lineStr.toLowerCase().indexOf(searchLower);
                while (matchIdx !== -1) {
                  const matchEnd = matchIdx + searchLower.length;

                  // For each item overlapping the match, calculate EXACT sub-rect
                  boundaries.forEach(b => {
                    if (matchIdx < b.end && matchEnd > b.start) {
                      // Calculate overlap range relative to item's own string
                      const itemMatchStart = Math.max(0, matchIdx - b.start);
                      const itemMatchEnd = Math.min(b.item.str.length, matchEnd - b.start);

                      // Calculate sub-rect width and offset 
                      // Improved: Use proportional width estimation for common characters
                      // This helps align the mask better than a simple average width
                      const getStrWidthWeight = (s: string) => {
                        let w = 0;
                        for (let i = 0; i < s.length; i++) {
                          const c = s[i].toLowerCase();
                          if ('ilj|.,!'.includes(c)) w += 0.3;
                          else if ('mw@'.includes(c)) w += 1.2;
                          else if ('abcdeghknopqrstuvxyz0123456789'.includes(c)) w += 0.6;
                          else w += 0.5; // default
                        }
                        return w;
                      };

                      const totalWeight = getStrWidthWeight(b.item.str);
                      const startWeight = getStrWidthWeight(b.item.str.substring(0, itemMatchStart));
                      const matchWeight = getStrWidthWeight(b.item.str.substring(itemMatchStart, itemMatchEnd));

                      if (totalWeight > 0) {
                        const ratioOffset = startWeight / totalWeight;
                        const ratioWidth = matchWeight / totalWeight;

                        const subX = b.item.tx[4] + (ratioOffset * b.item.width * renderScale);
                        const subW = ratioWidth * b.item.width * renderScale;

                        addRectToMask({
                          x: subX,
                          y: b.item.tx[5] - (b.item.height * renderScale),
                          w: subW,
                          h: b.item.height * renderScale
                        });
                      }
                    }
                  });

                  matchIdx = lineStr.toLowerCase().indexOf(searchLower, matchIdx + 1);
                }
              });
            }
          }

          // Get image data
          const imageData = ctx.getImageData(0, 0, width, height);
          const data = imageData.data;

          // Adaptive Background Detection: Sample corners to find "Paper Color"
          const sampleCorners = () => {
            const corners = [
              { x: 0, y: 0 },
              { x: width - 1, y: 0 },
              { x: 0, y: height - 1 },
              { x: width - 1, y: height - 1 }
            ];
            let r_sum = 0, g_sum = 0, b_sum = 0;
            corners.forEach(c => {
              const i = (c.y * width + c.x) * 4;
              r_sum += data[i];
              g_sum += data[i + 1];
              b_sum += data[i + 2];
            });
            return { r: r_sum / 4, g: g_sum / 4, b: b_sum / 4 };
          };

          const paperColor = sampleCorners();
          const paperLuminance = (0.299 * paperColor.r + 0.587 * paperColor.g + 0.114 * paperColor.b);

          const targetR = r * 255;
          const targetG = g * 255;
          const targetB = b * 255;

          // Smoothing range (feathering) for anti-aliased transitions
          const feather = 20;

          for (let py = 0; py < height; py++) {
            for (let px = 0; px < width; px++) {
              const j = (py * width + px) * 4;
              if (mask[py * width + px] === 0) continue;

              const pixelR = data[j];
              const pixelG = data[j + 1];
              const pixelB = data[j + 2];

              const luminance = (0.299 * pixelR + 0.587 * pixelG + 0.114 * pixelB);

              // Delta-Based Masking: How different is this pixel from the paper?
              // Standard Euclidean distance in RGB space to detect contrast
              const delta = Math.sqrt(
                Math.pow(pixelR - paperColor.r, 2) +
                Math.pow(pixelG - paperColor.g, 2) +
                Math.pow(pixelB - paperColor.b, 2)
              );

              // Ignore pixels that are too similar to the background "paper" color (threshold 30)
              if (delta < 30) continue;

              // Calculate blending weight based on luminance contrast vs paper
              let weight = 0;
              if (isDarkMode) {
                // Targeting pixels DARKER than the threshold
                if (luminance < threshold - feather) weight = 1;
                else if (luminance > threshold + feather) weight = 0;
                else weight = (threshold + feather - luminance) / (feather * 2);
              } else {
                // Targeting pixels LIGHTER than the threshold
                if (luminance > threshold + feather) weight = 1;
                else if (luminance < threshold - feather) weight = 0;
                else weight = (luminance - (threshold - feather)) / (feather * 2);
              }

              if (weight > 0) {
                data[j] = Math.round(pixelR * (1 - weight) + targetR * weight);
                data[j + 1] = Math.round(pixelG * (1 - weight) + targetG * weight);
                data[j + 2] = Math.round(pixelB * (1 - weight) + targetB * weight);
              }
            }
          }

          ctx.putImageData(imageData, 0, 0);

          // Convert canvas to PNG and embed in new PDF
          const pngImageBytes = await this.canvasToPngBytes(canvas);
          const image = await newPdf.embedPng(pngImageBytes);

          newPage.drawImage(image, {
            x: 0,
            y: 0,
            width: originalWidth,
            height: originalHeight,
          });
        } else {
          // Copy page without modification if not in page range
          // Embedding via pdf-lib is safer for copying full pages within the same document loop here
          const pdfLibDoc = await pdfLib.PDFDocument.load(arrayBuffer);
          const [copiedPage] = await newPdf.copyPages(pdfLibDoc, [i]);
          newPdf.removePage(newPdf.getPageCount() - 1); // Remove the blank page we just added
          newPdf.addPage(copiedPage);
        }
      }

      this.updateProgress(95, 'Saving PDF...');
      const pdfBytes = await newPdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace('.pdf', '_textcolor.pdf'), { pageCount: pagesToProcess.length });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to change text color.', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  private canvasToPngBytes(canvas: HTMLCanvasElement): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Failed to convert canvas to blob'));
          return;
        }
        const reader = new FileReader();
        reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
        reader.onerror = () => reject(new Error('Failed to read blob'));
        reader.readAsArrayBuffer(blob);
      }, 'image/png');
    });
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createTextColorProcessor(): TextColorProcessor {
  return new TextColorProcessor();
}

export async function changeTextColor(file: File, options: TextColorOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createTextColorProcessor();
  return processor.process({ files: [file], options: options as unknown as Record<string, unknown> }, onProgress);
}
