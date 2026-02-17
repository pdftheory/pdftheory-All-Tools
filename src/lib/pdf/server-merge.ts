
import { PDFDocument } from 'pdf-lib';

/**
 * Merge multiple PDFs into a single PDF on the server side.
 * @param files Array of PDF buffers to merge
 * @returns Buffer of the merged PDF
 */
export async function serverMergePdf(files: Buffer[]): Promise<Buffer> {
    try {
        // Create a new PDF document
        const mergedPdf = await PDFDocument.create();

        for (const fileBuffer of files) {
            // Load the source PDF
            const pdf = await PDFDocument.load(fileBuffer);

            // Copy all pages from source to merged PDF
            const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());

            // Add pages to the merged PDF
            copiedPages.forEach((page) => mergedPdf.addPage(page));
        }

        // Save the merged PDF
        const mergedBytes = await mergedPdf.save();
        return Buffer.from(mergedBytes);
    } catch (error) {
        console.error('Server side merge failed:', error);
        throw new Error('Failed to merge PDFs');
    }
}
