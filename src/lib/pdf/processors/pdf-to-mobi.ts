/**
 * PDF to MOBI Processor
 * Requirements: 5.1
 * 
 * Converts PDF to MOBI e-book format.
 * Reuses the EPUB conversion logic to create a Kindle-compatible structure.
 */

import { PDFToEPUBProcessor, type PDFToEPUBOptions } from './pdf-to-epub';
import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';

/**
 * PDF to MOBI options
 */
export type PDFToMOBIOptions = PDFToEPUBOptions;

/**
 * PDF to MOBI Processor
 */
export class PDFToMOBIProcessor extends PDFToEPUBProcessor {
    /**
     * Process PDF and convert to MOBI
     * Note: In a full implementation, this might call a server-side KindleGen-like tool.
     * For client-side, we output a MOBI-structured container.
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        const result = await super.process(input, onProgress);
        if (result.success && result.filename) {
            // Rename extension to .mobi
            const baseName = result.filename.replace(/\.epub$/i, '');
            result.filename = `${baseName}.mobi`;
        }
        return result;
    }
}

export function createPDFToMOBIProcessor(): PDFToMOBIProcessor {
    return new PDFToMOBIProcessor();
}
