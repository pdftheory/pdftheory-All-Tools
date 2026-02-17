
import { PDFDocument } from 'pdf-lib';

/**
 * Compress PDF on the server side.
 * Currently uses pdf-lib to optimize the document structure.
 * Note: For better compression (image downsampling), a native library 
 * like 'muhammara' or 'ghostscript' would be required in the future.
 */
export async function serverCompressPdf(fileBuffer: Buffer): Promise<Buffer> {
    try {
        // Load the PDF
        const pdfDoc = await PDFDocument.load(fileBuffer);

        // Save with object streams to reduce size slightly (if not already used)
        // and remove unused objects (garbage collection is automatic on save in pdf-lib to some extent)
        const compressedBytes = await pdfDoc.save({
            useObjectStreams: true,
            addDefaultPage: false,
            objectsPerTick: 50,
        });

        return Buffer.from(compressedBytes);
    } catch (error) {
        console.error('Server side compression failed:', error);
        throw new Error('Failed to compress PDF');
    }
}
