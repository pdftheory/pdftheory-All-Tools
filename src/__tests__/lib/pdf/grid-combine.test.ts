/**
 * Unit Tests for Grid Combine PDF Processor
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { GridCombineProcessor, createGridCombineProcessor } from '@/lib/pdf/processors/grid-combine';
import { PDFErrorCode } from '@/types/pdf';

// Helper to create a real minimal PDF using pdf-lib
async function createRealPDFFile(name: string, pageCount: number = 1): Promise<File> {
    const { PDFDocument } = await import('pdf-lib');
    const pdfDoc = await PDFDocument.create();

    for (let i = 0; i < pageCount; i++) {
        pdfDoc.addPage([612, 792]); // Letter size
    }

    const pdfBytes = await pdfDoc.save();

    const arrayBuffer = pdfBytes.buffer.slice(
        pdfBytes.byteOffset,
        pdfBytes.byteOffset + pdfBytes.byteLength
    ) as ArrayBuffer;

    const file = new File([arrayBuffer], name, { type: 'application/pdf' });

    if (typeof file.arrayBuffer !== 'function') {
        Object.defineProperty(file, 'arrayBuffer', {
            value: async () => arrayBuffer,
            writable: false,
        });
    }

    return file;
}

describe('GridCombineProcessor', () => {
    let processor: GridCombineProcessor;

    beforeEach(() => {
        processor = createGridCombineProcessor();
    });

    describe('process', () => {
        it('should return error when no files are provided', async () => {
            const result = await processor.process({
                files: [],
                options: {},
            });

            expect(result.success).toBe(false);
            expect(result.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);
        });

        it('should successfully combine 2 PDF files into a grid (2x1)', async () => {
            const file1 = await createRealPDFFile('doc1.pdf', 1);
            const file2 = await createRealPDFFile('doc2.pdf', 1);

            const result = await processor.process({
                files: [file1, file2],
                options: {
                    gridLayout: '2x1',
                    pageMode: 'first-page-only'
                },
            });

            if (!result.success) {
                const err = result.error;
                throw new Error(`Processor Failed: ${err?.message}\nDetails: ${err?.details}\nCode: ${err?.code}`);
            }

            expect(result.success).toBe(true);
            expect(result.result).toBeInstanceOf(Blob);
            // 2 files in 2x1 grid should result in 1 output page
            expect(result.metadata?.outputPageCount).toBe(1);
            expect(result.metadata?.originalPageCount).toBe(2);
        });

        it('should successfully combine multiple pages from multiple files (all-pages)', async () => {
            const file1 = await createRealPDFFile('doc1.pdf', 2);
            const file2 = await createRealPDFFile('doc2.pdf', 3);

            const result = await processor.process({
                files: [file1, file2],
                options: {
                    gridLayout: '2x2',
                    pageMode: 'all-pages'
                },
            });

            expect(result.success).toBe(true);
            // 5 total pages into 2x2 grid should result in 2 output pages
            expect(result.metadata?.outputPageCount).toBe(2);
            expect(result.metadata?.originalPageCount).toBe(5);
        });

        it('should respect fillMode setting (repeat)', async () => {
            const file1 = await createRealPDFFile('doc1.pdf', 1);

            const result = await processor.process({
                files: [file1],
                options: {
                    gridLayout: '2x2',
                    fillMode: 'repeat'
                },
            });

            expect(result.success).toBe(true);
            // 1 source page repeated in 2x2 grid should result in 4 cells filled on 1 page
            expect(result.metadata?.originalPageCount).toBe(4); // After fill repeat
        });
    });
});
