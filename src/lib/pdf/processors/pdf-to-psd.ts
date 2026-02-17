/**
 * PDF to PSD Processor
 * Requirements: 5.1
 * 
 * Converts PDF pages to Adobe Photoshop (PSD) files.
 * Uses pdfjs-dist for rendering and ag-psd for PSD generation.
 */

import type {
    ProcessInput,
    ProcessOutput,
    ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfjs } from '../loader';
import { writePsd, Psd } from 'ag-psd';

/**
 * PDF to PSD options
 */
export interface PDFToPSDOptions {
    /** Scale factor for rendering (1 = 72 DPI, 2 = 144 DPI, etc.) */
    scale: number;
    /** Specific pages to convert (empty = all pages) */
    pages: number[];
    /** Whether to attempt layer preservation (simulated for now) */
    preserveLayers: boolean;
    /** Resolution in DPI */
    dpi: number;
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: PDFToPSDOptions = {
    scale: 2, // 144 DPI
    pages: [], // All pages
    preserveLayers: true,
    dpi: 144,
};

/**
 * PDF to PSD Processor
 */
export class PDFToPSDProcessor extends BasePDFProcessor {
    /**
     * Process PDF and convert to PSD
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;
        const psdOptions: PDFToPSDOptions = {
            ...DEFAULT_OPTIONS,
            ...(options as Partial<PDFToPSDOptions>),
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

            const pagesToConvert = psdOptions.pages.length > 0
                ? psdOptions.pages.filter(p => p >= 1 && p <= totalPages)
                : Array.from({ length: totalPages }, (_, i) => i + 1);

            if (pagesToConvert.length === 0) {
                return this.createErrorOutput(
                    PDFErrorCode.INVALID_PAGE_RANGE,
                    'No valid pages to convert.'
                );
            }

            const progressPerPage = 80 / pagesToConvert.length;
            const layers: any[] = [];

            // Get document dimensions from the first page
            const firstPage = await pdf.getPage(pagesToConvert[0]);
            const firstViewport = firstPage.getViewport({ scale: psdOptions.scale });
            const width = firstViewport.width;
            const height = firstViewport.height;

            for (let i = 0; i < pagesToConvert.length; i++) {
                if (this.checkCancelled()) {
                    return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Cancelled');
                }

                const pageNum = pagesToConvert[i];
                this.updateProgress(10 + (i * progressPerPage), `Rendering page ${pageNum}...`);

                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale: psdOptions.scale });

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

                // Add page as a layer in the PSD
                layers.push({
                    name: `Page ${pageNum}`,
                    canvas: canvas,
                });
            }

            this.updateProgress(90, 'Generating PSD file...');

            const psd: Psd = {
                width,
                height,
                children: layers,
            };

            const psdBuffer = writePsd(psd);
            const blob = new Blob([psdBuffer], { type: 'image/vnd.adobe.photoshop' });

            this.updateProgress(100, 'Complete!');
            const baseName = file.name.replace(/\.pdf$/i, '');
            return this.createSuccessOutput(
                blob,
                `${baseName}.psd`,
                { pageCount: pagesToConvert.length }
            );

        } catch (error) {
            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                'Failed to convert PDF to PSD.',
                error instanceof Error ? error.message : 'Unknown error'
            );
        }
    }
}

export function createPDFToPSDProcessor(): PDFToPSDProcessor {
    return new PDFToPSDProcessor();
}
