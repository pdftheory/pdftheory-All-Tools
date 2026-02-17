/**
 * PDF Watermark Processor
 * Requirements: 5.1
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';
import { hexToRgb, getPageIndices } from '../utils';

export interface WatermarkOptions {
  type: 'text' | 'image';
  text?: string;
  imageData?: ArrayBuffer;
  imageType?: 'png' | 'jpg';
  position?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'diagonal';
  opacity?: number;
  rotation?: number;
  fontSize?: number;
  color?: { r: number; g: number; b: number } | string;
  pages?: number[] | 'all' | 'odd' | 'even';
}

export class WatermarkProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const inputOptions = options as Partial<WatermarkOptions>;
    const wmOptions: WatermarkOptions = {
      type: inputOptions.type ?? 'text',
      text: inputOptions.text,
      imageData: inputOptions.imageData,
      imageType: inputOptions.imageType,
      position: inputOptions.position ?? 'center',
      opacity: inputOptions.opacity ?? 0.3,
      rotation: inputOptions.rotation ?? -45,
      fontSize: inputOptions.fontSize ?? 48,
      color: inputOptions.color ?? { r: 0.5, g: 0.5, b: 0.5 },
      pages: inputOptions.pages ?? 'all',
    };

    if (files.length !== 1) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Exactly 1 PDF file is required.');
    }

    if (wmOptions.type === 'image' && !wmOptions.imageData) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Image data is required for image watermarks. Please upload an image.');
    }

    try {
      this.updateProgress(10, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();

      this.updateProgress(20, 'Loading PDF...');
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

      const font = await pdf.embedFont(pdfLib.StandardFonts.HelveticaBold);
      const totalPages = pdf.getPageCount();

      this.updateProgress(30, 'Adding watermark...');

      const pagesToProcess = getPageIndices(wmOptions.pages, totalPages);

      const colorObj = typeof wmOptions.color === 'string'
        ? hexToRgb(wmOptions.color)
        : wmOptions.color;

      for (let i = 0; i < pagesToProcess.length; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        const pageIndex = pagesToProcess[i];
        const page = pdf.getPage(pageIndex);
        const { width, height } = page.getSize();

        if (wmOptions.type === 'text' && wmOptions.text) {
          const text = wmOptions.text;
          const fontSize = wmOptions.fontSize || 48;
          const textWidth = font.widthOfTextAtSize(text, fontSize);

          let x = 0, y = 0;
          const rotation = wmOptions.position === 'diagonal' ? -45 : (wmOptions.rotation || 0);

          switch (wmOptions.position) {
            case 'top-left':
              x = 50; y = height - 50;
              break;
            case 'top-right':
              x = width - textWidth - 50; y = height - 50;
              break;
            case 'bottom-left':
              x = 50; y = 50;
              break;
            case 'bottom-right':
              x = width - textWidth - 50; y = 50;
              break;
            case 'diagonal':
            case 'center':
            default:
              x = width / 2; y = height / 2;
          }

          page.drawText(text, {
            x,
            y,
            size: fontSize,
            font,
            color: pdfLib.rgb(colorObj?.r || 0.5, colorObj?.g || 0.5, colorObj?.b || 0.5),
            opacity: wmOptions.opacity || 0.3,
            rotate: pdfLib.degrees(rotation),
          });
        } else if (wmOptions.type === 'image' && wmOptions.imageData) {
          let image;
          if (wmOptions.imageType === 'jpg') {
            image = await pdf.embedJpg(wmOptions.imageData);
          } else {
            image = await pdf.embedPng(wmOptions.imageData);
          }
          const scale = 0.5;
          const imgWidth = image.width * scale;
          const imgHeight = image.height * scale;

          const x = (width - imgWidth) / 2;
          const y = (height - imgHeight) / 2;

          page.drawImage(image, {
            x,
            y,
            width: imgWidth,
            height: imgHeight,
            opacity: wmOptions.opacity || 0.3,
            rotate: pdfLib.degrees(wmOptions.rotation || 0),
          });
        }

        this.updateProgress(30 + (60 * (i + 1) / pagesToProcess.length), `Processing page ${pageIndex + 1}...`);
      }

      this.updateProgress(95, 'Saving PDF...');
      const pdfBytes = await pdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace('.pdf', '_watermarked.pdf'), { pageCount: totalPages });

    } catch (error) {
      const details = error instanceof Error ? error.message : 'Unknown error';
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        `Failed to add watermark: ${details}`,
        details
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createWatermarkProcessor(): WatermarkProcessor {
  return new WatermarkProcessor();
}

export async function addWatermark(file: File, options: WatermarkOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createWatermarkProcessor();
  return processor.process({ files: [file], options: options as unknown as Record<string, unknown> }, onProgress);
}
