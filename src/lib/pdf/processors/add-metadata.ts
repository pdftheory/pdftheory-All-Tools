/**
 * PDF Add Metadata Processor
 * 
 * Implements professional PDF metadata addition functionality.
 * Supports batch processing for multiple files.
 */

console.log('DEBUG: add-metadata.ts loading...');

import type {
    ProcessInput,
    ProcessOutput,
    ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode, ErrorCategory } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

/**
 * Metadata fields to add
 */
export interface AddMetadataFields {
    title?: string;
    author?: string;
    subject?: string;
    keywords?: string[];
    creator?: string;
    producer?: string;
    // Professional fields
    copyrightStatus?: boolean; // true = Copyrighted, false = Public Domain
    copyrightNotice?: string;
}

/**
 * Add metadata options
 */
export interface AddMetadataOptions {
    metadata: AddMetadataFields;
    updateModificationDate?: boolean;
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: Partial<AddMetadataOptions> = {
    updateModificationDate: true,
};

/**
 * Add Metadata PDF Processor
 * Adds metadata to one or multiple PDF documents.
 */
export class AddMetadataPDFProcessor extends BasePDFProcessor {
    /**
     * Process PDF files and add metadata
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;
        const inputOptions = options as Partial<AddMetadataOptions>;

        // Ensure metadata is provided
        if (!inputOptions.metadata) {
            return this.createErrorOutput(
                PDFErrorCode.INVALID_OPTIONS,
                'Metadata object is required.',
                'Please provide metadata fields to add.'
            );
        }

        if (files.length === 0) {
            return this.createErrorOutput(
                PDFErrorCode.INVALID_OPTIONS,
                'No files provided.',
                'Please select at least one PDF file.'
            );
        }

        const processOptions: AddMetadataOptions = {
            metadata: inputOptions.metadata,
            updateModificationDate: inputOptions.updateModificationDate ?? DEFAULT_OPTIONS.updateModificationDate ?? true,
        };

        try {
            this.updateProgress(5, 'Loading PDF library...');
            const pdfLib = await loadPdfLib();

            if (this.checkCancelled()) return this.createCancelledOutput();

            // If single file, return blob directly
            // If multiple files, return zip (handled by BasePDFProcessor if we return multiple results? 
            // Actually BasePDFProcessor usually returns a single blob. 
            // For batch processing in this app, typically we might return a ZIP if multiple files are processed
            // OR we reuse the architecture usually seen. 
            // Let's look at split-pdf or similar for batch output patterns.
            // But for now, if the user requested "Add Metadata", they might expect a Zip if they upload multiple.

            // However, looking at the existing tools codebase pattern:
            // Most tools that support maxFiles > 1 return a ZIP if explicit, 
            // OR the frontend handles batching by calling process multiple times?
            // Actually, looking at `merge` it takes multiple files and produces ONE.
            // `compress` takes 1.
            // `pdf-to-zip` takes multiple and produces ZIP.

            // If I want to support batch "Add Metadata" (Apply same metadata to N files), 
            // I should probably return a ZIP containing all processed files.

            const JSZip = (await import('jszip')).default;
            const zip = new JSZip();
            const processedFiles: { name: string, data: Uint8Array }[] = [];

            const totalFiles = files.length;

            for (let i = 0; i < totalFiles; i++) {
                const file = files[i];
                const progressStart = 10 + (i / totalFiles) * 80;
                const progressEnd = 10 + ((i + 1) / totalFiles) * 80;

                this.updateProgress(progressStart, `Processing file ${i + 1} of ${totalFiles}...`);

                const arrayBuffer = await file.arrayBuffer();

                if (this.checkCancelled()) return this.createCancelledOutput();

                const pdfDoc = await pdfLib.PDFDocument.load(arrayBuffer, {
                    ignoreEncryption: false,
                    updateMetadata: true,
                });

                // Apply metadata
                const { metadata } = processOptions;

                if (metadata.title) pdfDoc.setTitle(metadata.title);
                if (metadata.author) pdfDoc.setAuthor(metadata.author);
                if (metadata.subject) pdfDoc.setSubject(metadata.subject);
                if (metadata.keywords) pdfDoc.setKeywords(metadata.keywords);
                if (metadata.creator) pdfDoc.setCreator(metadata.creator);
                if (metadata.producer) pdfDoc.setProducer(metadata.producer);

                // Does pdf-lib support XMP for copyright? 
                // Typically title/author/etc are standard info dict. 
                // Setup simple standard fields first.

                if (processOptions.updateModificationDate) {
                    pdfDoc.setModificationDate(new Date());
                }

                const modifiedPdfBytes = await pdfDoc.save();

                processedFiles.push({
                    name: file.name,
                    data: modifiedPdfBytes
                });
            }

            this.updateProgress(95, 'Finalizing...');

            if (processedFiles.length === 1) {
                // Return single file
                const blob = new Blob([processedFiles[0].data as any], { type: 'application/pdf' });
                return this.createSuccessOutput(
                    blob,
                    `metadata_${processedFiles[0].name}`, // Prefix to indicate change
                    { updated: true }
                );
            } else {
                // Return ZIP
                processedFiles.forEach(f => {
                    zip.file(f.name, f.data);
                });

                const zipContent = await zip.generateAsync({ type: 'blob' });
                return this.createSuccessOutput(
                    zipContent,
                    'metadata_processed_files.zip',
                    { count: processedFiles.length }
                );
            }

        } catch (error) {
            if (error instanceof Error && error.message.includes('encrypt')) {
                return this.createErrorOutput(
                    PDFErrorCode.PDF_ENCRYPTED,
                    'One or more PDFs are encrypted.',
                    'Please decrypt files before adding metadata.'
                );
            }

            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                'Failed to add metadata.',
                error instanceof Error ? error.message : 'Unknown error'
            );
        }
    }

    protected createCancelledOutput(): ProcessOutput {
        return {
            success: false,
            error: {
                code: PDFErrorCode.PROCESSING_TIMEOUT,
                category: ErrorCategory.PROCESSING_ERROR,
                message: 'Processing cancelled',
                recoverable: true,
                suggestedAction: 'Try again.',
            },
        };
    }

    protected getAcceptedTypes(): string[] {
        return ['application/pdf'];
    }
}

/**
 * Factory function
 */
export function createAddMetadataProcessor(): AddMetadataPDFProcessor {
    return new AddMetadataPDFProcessor();
}

/**
 * Convenience function
 */
export async function addPDFMetadata(
    files: File[],
    metadata: AddMetadataFields,
    options?: Partial<Omit<AddMetadataOptions, 'metadata'>>,
    onProgress?: ProgressCallback
): Promise<ProcessOutput> {
    const processor = createAddMetadataProcessor();
    return processor.process(
        {
            files,
            options: { metadata, ...options },
        },
        onProgress
    );
}
