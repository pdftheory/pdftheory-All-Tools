/**
 * PDF Background Color Processor
 * Requirements: 5.1
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';
import { hexToRgb, getPageIndices } from '../utils';

export interface BackgroundColorOptions {
  color: { r: number; g: number; b: number } | string;
  pages?: number[] | 'all' | 'odd' | 'even';
  opacity?: number;
}

export class BackgroundColorProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const inputOptions = options as Partial<BackgroundColorOptions>;
    const bgOptions: BackgroundColorOptions = {
      color: inputOptions.color ?? '#fefce8', // Default to yellowish tint
      pages: inputOptions.pages ?? 'all',
      opacity: inputOptions.opacity ?? 1,
    };

    if (files.length !== 1) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Exactly 1 PDF file is required.');
    }

    try {
      this.updateProgress(10, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();

      this.updateProgress(20, 'Loading PDF...');
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();
      const sourcePdf = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

      const totalPages = sourcePdf.getPageCount();
      const pagesToProcess = getPageIndices(bgOptions.pages, totalPages);

      // Convert color to {r, g, b} if it's a string
      const colorObj = typeof bgOptions.color === 'string'
        ? hexToRgb(bgOptions.color)
        : bgOptions.color;

      // Create new PDF with background
      const newPdf = await pdfLib.PDFDocument.create();

      this.updateProgress(30, 'Embedding pages...');

      // Pre-embed all pages at once to avoid duplicate font embedding
      const sourcePages = sourcePdf.getPages();
      const embeddedPages = await newPdf.embedPages(sourcePages);

      this.updateProgress(40, 'Adding background color...');

      for (let i = 0; i < totalPages; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        const sourcePage = sourcePages[i];
        const { width, height } = sourcePage.getSize();
        const newPage = newPdf.addPage([width, height]);

        // Use pre-embedded page
        const embeddedPage = embeddedPages[i];

        if (pagesToProcess.includes(i)) {
          // 1. DRAW BACKDROP COLOR (Normal mode)
          // This handles transparent background PDFs
          newPage.drawRectangle({
            x: 0,
            y: 0,
            width,
            height,
            color: pdfLib.rgb(colorObj.r, colorObj.g, colorObj.b),
            opacity: bgOptions.opacity,
          });
        }

        // 2. DRAW ORIGINAL CONTENT
        newPage.drawPage(embeddedPage, { x: 0, y: 0, width, height });

        if (pagesToProcess.includes(i)) {
          // 3. DRAW TINT COLOR ON TOP (Multiply mode)
          // This ensures the color is visible even if the PDF has an opaque white background
          // Multiply(White, Color) = Color. Multiply(Black, Color) = Black.
          newPage.drawRectangle({
            x: 0,
            y: 0,
            width,
            height,
            color: pdfLib.rgb(colorObj.r, colorObj.g, colorObj.b),
            opacity: bgOptions.opacity,
            blendMode: pdfLib.BlendMode.Multiply,
          });
        }

        this.updateProgress(40 + (50 * (i + 1) / totalPages), `Processing page ${i + 1}...`);
      }

      this.updateProgress(95, 'Saving PDF...');
      const pdfBytes = await newPdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace('.pdf', '_background.pdf'), { pageCount: totalPages });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to add background color.', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createBackgroundColorProcessor(): BackgroundColorProcessor {
  return new BackgroundColorProcessor();
}

export async function addBackgroundColor(file: File, options: BackgroundColorOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createBackgroundColorProcessor();
  return processor.process({ files: [file], options: options as unknown as Record<string, unknown> }, onProgress);
}
