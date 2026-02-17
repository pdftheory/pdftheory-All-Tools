/**
 * PDF to Text Processor
 * Requirements: 5.1
 * 
 * Extracts plain text from PDF documents.
 */

import type {
    ProcessInput,
    ProcessOutput,
    ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfjs } from '../loader';

/**
 * PDF to Text options
 */
export interface PDFToTextOptions {
    /** Specific pages to convert (empty = all pages) */
    pages: number[];
    /** Whether to include page markers */
    includePageMarkers: boolean;
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: PDFToTextOptions = {
    pages: [],
    includePageMarkers: true,
};

/**
 * PDF to Text Processor
 */
export class PDFToTextProcessor extends BasePDFProcessor {
    /**
     * Process PDF and convert to text
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;
        const txtOptions: PDFToTextOptions = {
            ...DEFAULT_OPTIONS,
            ...(options as Partial<PDFToTextOptions>),
        };

        if (files.length !== 1) {
            return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Provide one PDF file.');
        }

        const file = files[0];

        try {
            this.updateProgress(5, 'Loading PDF library...');
            const pdfjs = await loadPdfjs();

            this.updateProgress(10, 'Loading PDF document...');
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
            const totalPages = pdf.numPages;

            const pagesToConvert = txtOptions.pages.length > 0
                ? txtOptions.pages.filter(p => p >= 1 && p <= totalPages)
                : Array.from({ length: totalPages }, (_, i) => i + 1);

            let fullText = '';
            const progressPerPage = 80 / pagesToConvert.length;

            for (let i = 0; i < pagesToConvert.length; i++) {
                if (this.checkCancelled()) return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Cancelled');

                const pageNum = pagesToConvert[i];
                this.updateProgress(10 + (i * progressPerPage), `Extracting text from page ${pageNum}...`);

                if (txtOptions.includePageMarkers) {
                    fullText += `--- Page ${pageNum} ---\n\n`;
                }

                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();

                let lastY = -1;
                for (const item of textContent.items) {
                    if ('str' in item) {
                        if (lastY !== -1 && Math.abs(item.transform[5] - lastY) > 5) {
                            fullText += '\n';
                        }
                        lastY = item.transform[5];
                        fullText += item.str + ' ';
                    }
                }
                fullText += '\n\n';
            }

            const blob = new Blob([fullText], { type: 'text/plain; charset=utf-8' });

            this.updateProgress(100, 'Complete!');
            const baseName = file.name.replace(/\.pdf$/i, '');
            return this.createSuccessOutput(blob, `${baseName}.txt`, { pageCount: pagesToConvert.length });

        } catch (error) {
            return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to extract text.', error instanceof Error ? error.message : 'Unknown error');
        }
    }
}

export function createPDFToTextProcessor(): PDFToTextProcessor {
    return new PDFToTextProcessor();
}
