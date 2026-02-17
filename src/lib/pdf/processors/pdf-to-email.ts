/**
 * PDF to Email (EML) Processor
 * Requirements: 5.1
 * 
 * Extracts text from PDF and packages it into a draft email file (.eml).
 * Uses pdfjs-dist for text extraction.
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
 * PDF to Email options
 */
export interface PDFToEmailOptions {
    /** Specific pages to convert (empty = all pages) */
    pages: number[];
    /** Default subject */
    subject?: string;
    /** Default sender */
    from?: string;
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: PDFToEmailOptions = {
    pages: [],
    subject: 'Converted Document',
};

/**
 * PDF to Email Processor
 */
export class PDFToEmailProcessor extends BasePDFProcessor {
    /**
     * Process PDF and convert to EML
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;
        const emailOptions: PDFToEmailOptions = {
            ...DEFAULT_OPTIONS,
            ...(options as Partial<PDFToEmailOptions>),
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

            const pagesToConvert = emailOptions.pages.length > 0
                ? emailOptions.pages.filter(p => p >= 1 && p <= totalPages)
                : Array.from({ length: totalPages }, (_, i) => i + 1);

            if (pagesToConvert.length === 0) {
                return this.createErrorOutput(
                    PDFErrorCode.INVALID_PAGE_RANGE,
                    'No valid pages to convert.'
                );
            }

            let bodyText = '';
            const progressPerPage = 80 / pagesToConvert.length;

            for (let i = 0; i < pagesToConvert.length; i++) {
                if (this.checkCancelled()) {
                    return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Cancelled');
                }

                const pageNum = pagesToConvert[i];
                this.updateProgress(10 + (i * progressPerPage), `Extracting text from page ${pageNum}...`);

                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();

                for (const item of textContent.items) {
                    if ('str' in item) {
                        bodyText += item.str + ' ';
                    }
                }
                bodyText += '\n\n';
            }

            const boundary = '----=_NextPart_' + Date.now();
            let emlContent = `From: ${emailOptions.from || 'sender@example.com'}\n`;
            emlContent += `Subject: ${emailOptions.subject}\n`;
            emlContent += `MIME-Version: 1.0\n`;
            emlContent += `Content-Type: multipart/mixed; boundary="${boundary}"\n\n`;

            emlContent += `--${boundary}\n`;
            emlContent += `Content-Type: text/plain; charset="utf-8"\n`;
            emlContent += `Content-Transfer-Encoding: 7bit\n\n`;
            emlContent += bodyText + '\n\n';

            emlContent += `--${boundary}\n`;
            emlContent += `Content-Type: application/pdf; name="${file.name}"\n`;
            emlContent += `Content-Transfer-Encoding: base64\n`;
            emlContent += `Content-Disposition: attachment; filename="${file.name}"\n\n`;

            // Convert ArrayBuffer to Base64 efficiently
            const base64 = await new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const result = reader.result as string;
                    // Remove the "data:application/pdf;base64," prefix
                    resolve(result.split(',')[1]);
                };
                reader.onerror = () => reject(new Error('Failed to encode PDF to base64'));
                reader.readAsDataURL(new Blob([arrayBuffer], { type: 'application/pdf' }));
            });

            // Chunk base64 to 76 characters per line for MIME compliance
            const chunkedBase64 = base64.match(/.{1,76}/g)?.join('\n') || '';
            emlContent += chunkedBase64 + '\n\n';

            emlContent += `--${boundary}--`;

            const blob = new Blob([emlContent], { type: 'message/rfc822' });

            this.updateProgress(100, 'Complete!');
            const baseName = file.name.replace(/\.pdf$/i, '');
            return this.createSuccessOutput(
                blob,
                `${baseName}.eml`,
                { pageCount: pagesToConvert.length }
            );

        } catch (error) {
            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                'Failed to convert PDF to EML.',
                error instanceof Error ? error.message : 'Unknown error'
            );
        }
    }
}

export function createPDFToEmailProcessor(): PDFToEmailProcessor {
    return new PDFToEmailProcessor();
}
