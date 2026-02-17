/**
 * PDF to XPS Processor
 * Requirements: 5.1
 * 
 * Converts PDF to XML Paper Specification (XPS) format.
 * Renders pages and packages them into the XPS fixed-layout structure.
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
 * PDF to XPS options
 */
export interface PDFToXPSOptions {
    /** Scale factor for rendering (1 = 72 DPI, 2 = 144 DPI, etc.) */
    scale: number;
    /** Specific pages to convert */
    pages: number[];
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: PDFToXPSOptions = {
    scale: 2,
    pages: [],
};

/**
 * PDF to XPS Processor
 */
export class PDFToXPSProcessor extends BasePDFProcessor {
    /**
     * Process PDF and convert to XPS
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;
        const xpsOptions: PDFToXPSOptions = {
            ...DEFAULT_OPTIONS,
            ...(options as Partial<PDFToXPSOptions>),
        };

        if (files.length !== 1) {
            return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Provide one PDF file.');
        }

        const file = files[0];

        try {
            this.updateProgress(5, 'Loading libraries...');
            const pdfjs = await loadPdfjs();

            this.updateProgress(10, 'Loading PDF document...');
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
            const totalPages = pdf.numPages;

            const pagesToConvert = xpsOptions.pages.length > 0
                ? xpsOptions.pages.filter(p => p >= 1 && p <= totalPages)
                : Array.from({ length: totalPages }, (_, i) => i + 1);

            const zip = new JSZip();

            // XPS Structure (simulated simplified)
            zip.file('_rels/.rels', `<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.microsoft.com/xps/2005/06/fixedrepresentation" Target="/FixedDocSeq.fdseq"/></Relationships>`);
            zip.file('FixedDocSeq.fdseq', `<FixedDocumentSequence xmlns="http://schemas.microsoft.com/xps/2005/06"><DocumentReference Source="Documents/1/FixedDoc.fdoc"/></FixedDocumentSequence>`);
            zip.file('Documents/1/FixedDoc.fdoc', `<FixedDocument xmlns="http://schemas.microsoft.com/xps/2005/06"><PageContent Source="Pages/1.fpage"/></FixedDocument>`);

            const progressPerPage = 80 / pagesToConvert.length;

            for (let i = 0; i < pagesToConvert.length; i++) {
                if (this.checkCancelled()) return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Cancelled');

                const pageNum = pagesToConvert[i];
                this.updateProgress(10 + (i * progressPerPage), `Rendering page ${pageNum}...`);

                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale: xpsOptions.scale });

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

                const imgBlob = await new Promise<Blob>((resolve, reject) => {
                    canvas.toBlob((b) => b ? resolve(b) : reject(new Error('Canvas bit blit failed')), 'image/png');
                });

                zip.file(`Documents/1/Resources/Images/${i + 1}.png`, imgBlob);
                zip.file(`Documents/1/Pages/${i + 1}.fpage`, `<FixedPage xmlns="http://schemas.microsoft.com/xps/2005/06" Width="${viewport.width}" Height="${viewport.height}"><Path Data="M0,0 L${viewport.width},0 L${viewport.width},${viewport.height} L0,${viewport.height} Z"><Path.Fill><ImageBrush ImageSource="../Resources/Images/${i + 1}.png" Viewbox="0,0,${viewport.width},${viewport.height}" ViewboxUnits="Absolute" Viewport="0,0,${viewport.width},${viewport.height}" ViewportUnits="Absolute"/></Path.Fill></Path></FixedPage>`);
            }

            this.updateProgress(95, 'Generating XPS file...');
            const xpsBlob = await zip.generateAsync({ type: 'blob' });

            this.updateProgress(100, 'Complete!');
            const baseName = file.name.replace(/\.pdf$/i, '');
            return this.createSuccessOutput(xpsBlob, `${baseName}.xps`, { pageCount: pagesToConvert.length });

        } catch (error) {
            return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to convert PDF to XPS.', error instanceof Error ? error.message : 'Unknown error');
        }
    }
}

export function createPDFToXPSProcessor(): PDFToXPSProcessor {
    return new PDFToXPSProcessor();
}
