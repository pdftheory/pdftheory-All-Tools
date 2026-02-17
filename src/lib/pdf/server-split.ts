
import { PDFDocument } from 'pdf-lib';
import JSZip from 'jszip';

/**
 * Split a PDF into individual pages (or by range) on the server side.
 * Returns a ZIP file containing the split PDFs.
 * Currently splits every page into a separate PDF.
 * @param fileBuffer The buffer of the PDF to split
 * @returns Buffer of the ZIP file containing split PDFs
 */
export async function serverSplitPdf(fileBuffer: Buffer): Promise<Buffer> {
    try {
        // Load the source PDF
        const sourcePdf = await PDFDocument.load(fileBuffer);
        const zip = new JSZip();

        const numPages = sourcePdf.getPageCount();

        // Iterate through each page
        for (let i = 0; i < numPages; i++) {
            // Create a new PDF for each page
            const newPdf = await PDFDocument.create();

            // Copy the page from the source PDF
            const [page] = await newPdf.copyPages(sourcePdf, [i]);

            // Add the copied page to the new PDF
            newPdf.addPage(page);

            // Save the new PDF
            const pdfBytes = await newPdf.save();

            // Add to ZIP
            const pageNum = String(i + 1).padStart(3, '0'); // 001, 002, etc.
            zip.file(`Page_${pageNum}.pdf`, pdfBytes);
        }

        // Generate ZIP file
        const zipContent = await zip.generateAsync({ type: 'nodebuffer' });
        return zipContent;
    } catch (error) {
        console.error('Server side split failed:', error);
        throw new Error('Failed to split PDF');
    }
}
