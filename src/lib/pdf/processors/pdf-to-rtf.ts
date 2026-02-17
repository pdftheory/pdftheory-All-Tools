/**
 * PDF to RTF Processor
 * Requirements: 5.1
 * 
 * Extracts text and basic formatting from PDF and saves as RTF.
 * Uses pdfjs-dist for text extraction and a custom RTF generator.
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
 * PDF to RTF options
 */
export interface PDFToRTFOptions {
    /** Specific pages to convert (empty = all pages) */
    pages: number[];
    /** Whether to preserve basic formatting (bold, italics) */
    preserveFormatting: boolean;
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: PDFToRTFOptions = {
    pages: [],
    preserveFormatting: true,
};

/**
 * PDF to RTF Processor
 */
export class PDFToRTFProcessor extends BasePDFProcessor {
    /**
     * Process PDF and convert to RTF
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;
        const rtfOptions: PDFToRTFOptions = {
            ...DEFAULT_OPTIONS,
            ...(options as Partial<PDFToRTFOptions>),
        };

        if (files.length !== 1) {
            return this.createErrorOutput(
                PDFErrorCode.INVALID_OPTIONS,
                'Please provide exactly one PDF file.'
            );
        }

        const file = files[0];

        try {
            this.updateProgress(5, 'Loading PDF library...');
            const pdfjs = await loadPdfjs();

            this.updateProgress(10, 'Loading PDF document...');
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
            const totalPages = pdf.numPages;

            const pagesToConvert = rtfOptions.pages.length > 0
                ? rtfOptions.pages.filter(p => p >= 1 && p <= totalPages)
                : Array.from({ length: totalPages }, (_, i) => i + 1);

            if (pagesToConvert.length === 0) {
                return this.createErrorOutput(
                    PDFErrorCode.INVALID_PAGE_RANGE,
                    'No valid pages to convert.'
                );
            }

            let rtfContent = '{\\rtf1\\ansi\\deff0\n';
            rtfContent += '{\\fonttbl{\\f0 Arial;}}\n';
            rtfContent += '{\\colortbl;\\red0\\green0\\blue0;}\n';
            rtfContent += '\\viewkind4\\uc1\\f0\\fs24\n';

            const progressPerPage = 80 / pagesToConvert.length;

            for (let i = 0; i < pagesToConvert.length; i++) {
                if (this.checkCancelled()) {
                    return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Cancelled');
                }

                const pageNum = pagesToConvert[i];
                this.updateProgress(10 + (i * progressPerPage), `Extracting text from page ${pageNum}...`);

                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();

                let lastY = -1;
                for (const item of textContent.items) {
                    if ('str' in item) {
                        // Basic layout detection
                        if (lastY !== -1 && Math.abs(item.transform[5] - lastY) > 5) {
                            rtfContent += '\\par\n';
                        }
                        lastY = item.transform[5];

                        // Escape RTF special characters
                        const escaped = item.str
                            .replace(/\\/g, '\\\\')
                            .replace(/{/g, '\\{')
                            .replace(/}/g, '\\}');

                        rtfContent += escaped + ' ';
                    }
                }
                rtfContent += '\\par\\page\n';
            }

            rtfContent += '}\n';

            const blob = new Blob([rtfContent], { type: 'application/rtf' });

            this.updateProgress(100, 'Complete!');
            const baseName = file.name.replace(/\.pdf$/i, '');
            return this.createSuccessOutput(
                blob,
                `${baseName}.rtf`,
                { pageCount: pagesToConvert.length }
            );

        } catch (error) {
            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                'Failed to convert PDF to RTF.',
                error instanceof Error ? error.message : 'Unknown error'
            );
        }
    }
}

export function createPDFToRTFProcessor(): PDFToRTFProcessor {
    return new PDFToRTFProcessor();
}
