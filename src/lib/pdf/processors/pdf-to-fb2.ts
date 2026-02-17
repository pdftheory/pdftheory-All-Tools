/**
 * PDF to FB2 Processor
 * Requirements: 5.1
 * 
 * Converts PDF to FictionBook 2.0 (FB2) format.
 * Extracts text and packages it into a semantic XML structure.
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
 * PDF to FB2 options
 */
export interface PDFToFB2Options {
    /** Book title */
    title?: string;
    /** Author */
    author?: string;
    /** Specific pages to convert */
    pages: number[];
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: PDFToFB2Options = {
    pages: [],
};

/**
 * PDF to FB2 Processor
 */
export class PDFToFB2Processor extends BasePDFProcessor {
    /**
     * Process PDF and convert to FB2
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;
        const fb2Options: PDFToFB2Options = {
            ...DEFAULT_OPTIONS,
            ...(options as Partial<PDFToFB2Options>),
        };

        if (files.length !== 1) {
            return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Provide one PDF file.');
        }

        const file = files[0];
        const bookTitle = fb2Options.title || file.name.replace(/\.pdf$/i, '');
        const author = fb2Options.author || 'PDFCraft';

        try {
            this.updateProgress(5, 'Loading PDF library...');
            const pdfjs = await loadPdfjs();

            this.updateProgress(10, 'Loading PDF document...');
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
            const totalPages = pdf.numPages;

            const pagesToConvert = fb2Options.pages.length > 0
                ? fb2Options.pages.filter(p => p >= 1 && p <= totalPages)
                : Array.from({ length: totalPages }, (_, i) => i + 1);

            let body = '';
            const progressPerPage = 80 / pagesToConvert.length;

            for (let i = 0; i < pagesToConvert.length; i++) {
                if (this.checkCancelled()) return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Cancelled');

                const pageNum = pagesToConvert[i];
                this.updateProgress(10 + (i * progressPerPage), `Processing page ${pageNum}...`);

                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();
                let pageText = '';
                for (const item of textContent.items) {
                    if ('str' in item) pageText += item.str + ' ';
                }

                body += `<section><title><p>Page ${pageNum}</p></title><p>${pageText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p></section>\n`;
            }

            const fb2Content = `<?xml version="1.0" encoding="UTF-8"?>
<FictionBook xmlns="http://www.gribuser.ru/xml/fictionbook/2.0" xmlns:l="http://www.w3.org/1999/xlink">
  <description>
    <title-info>
      <genre>nonfiction</genre>
      <author><first-name>${author}</first-name></author>
      <book-title>${bookTitle}</book-title>
      <lang>en</lang>
    </title-info>
    <document-info>
      <author><first-name>PDFCraft</first-name></author>
      <program-used>PDFCraft</program-used>
      <date value="${new Date().toISOString().split('T')[0]}">${new Date().toDateString()}</date>
      <id>${crypto.randomUUID()}</id>
      <version>1.0</version>
    </document-info>
  </description>
  <body>
    ${body}
  </body>
</FictionBook>`;

            const blob = new Blob([fb2Content], { type: 'application/x-fictionbook+xml' });

            this.updateProgress(100, 'Complete!');
            return this.createSuccessOutput(blob, `${bookTitle}.fb2`, { pageCount: pagesToConvert.length });

        } catch (error) {
            return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to convert PDF to FB2.', error instanceof Error ? error.message : 'Unknown error');
        }
    }
}

export function createPDFToFB2Processor(): PDFToFB2Processor {
    return new PDFToFB2Processor();
}
