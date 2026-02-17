/**
 * PDF to CBZ Processor
 * Requirements: 5.1
 * 
 * Converts PDF pages to a Comic Book Archive (CBZ) file.
 * Each page is rendered as an image and packaged into a ZIP archive.
 */

import type {
    ProcessInput,
    ProcessOutput,
    ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfjs } from '../loader';
import JSZip from 'jszip';

/**
 * PDF to CBZ options
 */
export interface PDFToCBZOptions {
    /** Scale factor for rendering (1 = 72 DPI, 2 = 144 DPI, etc.) */
    scale: number;
    /** Specific pages to convert (empty = all pages) */
    pages: number[];
    /** Image format ('jpg' or 'png') */
    format: 'jpg' | 'png';
    /** Image quality (0-1) for JPG */
    quality: number;
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: PDFToCBZOptions = {
    scale: 2,
    pages: [],
    format: 'jpg',
    quality: 0.9,
};

/**
 * PDF to CBZ Processor
 */
export class PDFToCBZProcessor extends BasePDFProcessor {
    /**
     * Process PDF and convert to CBZ
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;
        const cbzOptions: PDFToCBZOptions = {
            ...DEFAULT_OPTIONS,
            ...(options as Partial<PDFToCBZOptions>),
        };

        if (files.length !== 1) {
            return this.createErrorOutput(
                PDFErrorCode.INVALID_OPTIONS,
                'Please provide exactly one PDF file.'
            );
        }

        const file = files[0];

        try {
            this.updateProgress(5, 'Loading libraries...');
            const pdfjs = await loadPdfjs();

            this.updateProgress(10, 'Loading PDF document...');
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
            const totalPages = pdf.numPages;

            const pagesToConvert = cbzOptions.pages.length > 0
                ? cbzOptions.pages.filter(p => p >= 1 && p <= totalPages)
                : Array.from({ length: totalPages }, (_, i) => i + 1);

            if (pagesToConvert.length === 0) {
                return this.createErrorOutput(
                    PDFErrorCode.INVALID_PAGE_RANGE,
                    'No valid pages to convert.'
                );
            }

            const zip = new JSZip();
            const progressPerPage = 80 / pagesToConvert.length;
            const ext = cbzOptions.format === 'jpg' ? '.jpg' : '.png';
            const mimeType = cbzOptions.format === 'jpg' ? 'image/jpeg' : 'image/png';

            for (let i = 0; i < pagesToConvert.length; i++) {
                if (this.checkCancelled()) {
                    return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Cancelled');
                }

                const pageNum = pagesToConvert[i];
                this.updateProgress(10 + (i * progressPerPage), `Rendering page ${pageNum}...`);

                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale: cbzOptions.scale });

                const canvas = document.createElement('canvas');
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                const ctx = canvas.getContext('2d');
                if (!ctx) throw new Error('Failed to get canvas context');

                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                await page.render({
                    canvasContext: ctx,
                    viewport: viewport,
                }).promise;

                // Convert canvas to blob/arraybuffer
                const blob = await new Promise<Blob>((resolve, reject) => {
                    canvas.toBlob(
                        (b) => b ? resolve(b) : reject(new Error('Canvas to Blob failed')),
                        mimeType,
                        cbzOptions.quality
                    );
                });

                const fileName = `${String(i + 1).padStart(3, '0')}${ext}`;
                zip.file(fileName, blob);
            }

            this.updateProgress(95, 'Creating CBZ archive...');
            const cbzBlob = await zip.generateAsync({ type: 'blob' });

            this.updateProgress(100, 'Complete!');
            const baseName = file.name.replace(/\.pdf$/i, '');
            return this.createSuccessOutput(
                cbzBlob,
                `${baseName}.cbz`,
                { pageCount: pagesToConvert.length }
            );

        } catch (error) {
            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                'Failed to convert PDF to CBZ.',
                error instanceof Error ? error.message : 'Unknown error'
            );
        }
    }
}

export function createPDFToCBZProcessor(): PDFToCBZProcessor {
    return new PDFToCBZProcessor();
}
