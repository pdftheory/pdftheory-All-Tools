/**
 * Ghostscript PDF Compression Processor
 * 
 * Uses Ghostscript WebAssembly for industry-standard PDF compression.
 * Supports quality presets: screen, ebook, printer, prepress, default
 */

import type {
    ProcessInput,
    ProcessOutput,
    ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';

/**
 * Ghostscript PDF quality settings
 */
export type GhostscriptQuality = '/screen' | '/ebook' | '/printer' | '/prepress' | '/default';

/**
 * Quality preset descriptions
 */
export const GHOSTSCRIPT_QUALITY_PRESETS: Record<GhostscriptQuality, string> = {
    '/screen': 'Extreme Compression (Low quality, 72 DPI)',
    '/ebook': 'Recommended Quality (Standard compression, 150 DPI)',
    '/printer': 'High Quality (Professional, 300 DPI)',
    '/prepress': 'Maximum Quality (Original resolution)',
    '/default': 'No Compression (Original quality)'
};

/**
 * Ghostscript compress options
 */
export interface GhostscriptCompressOptions {
    /** PDF quality preset */
    quality: GhostscriptQuality;
    /** PDF compatibility level (1.3-1.7) */
    compatibilityLevel?: string;
    /** Downsample color images */
    downsampleImages?: boolean;
    /** Target image resolution in DPI */
    imageResolution?: number;
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: GhostscriptCompressOptions = {
    quality: '/ebook',
    compatibilityLevel: '1.4',
    downsampleImages: true,
    imageResolution: 150,
};

/**
 * Worker message types
 */
interface WorkerProgressMessage {
    type: 'progress';
    data: string;
}

interface WorkerResultMessage {
    type: 'result';
    data: {
        pdfDataURL?: string;
        error?: string;
    };
}

type WorkerMessage = WorkerProgressMessage | WorkerResultMessage | { pdfDataURL?: string; error?: string };

/**
 * Ghostscript Compress PDF Processor
 */
export class GhostscriptCompressPDFProcessor extends BasePDFProcessor {
    private worker: Worker | null = null;

    /**
     * Process PDF file and compress using Ghostscript
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;
        const compressOptions: GhostscriptCompressOptions = {
            ...DEFAULT_OPTIONS,
            ...(options as Partial<GhostscriptCompressOptions>),
        };

        // Validate single file
        if (files.length !== 1) {
            return this.createErrorOutput(
                PDFErrorCode.INVALID_OPTIONS,
                'Please provide exactly one PDF file to compress.',
                `Received ${files.length} file(s).`
            );
        }

        const file = files[0];
        const originalSize = file.size;

        try {
            this.updateProgress(5, 'Loading Ghostscript engine...');

            // Read file as ArrayBuffer
            const arrayBuffer = await file.arrayBuffer();

            this.updateProgress(15, 'Initializing compression...');

            if (this.checkCancelled()) {
                return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Operation cancelled.');
            }

            // Process using Ghostscript worker
            const result = await this.runGhostscriptWorker(arrayBuffer, compressOptions, (progress) => {
                // Parse progress from Ghostscript output
                const pageMatch = progress.match(/Page (\d+)/);
                if (pageMatch) {
                    const page = parseInt(pageMatch[1]);
                    // Estimate progress based on page number (max 85%)
                    const estimatedProgress = Math.min(20 + page * 5, 85);
                    this.updateProgress(estimatedProgress, `Processing page ${page}...`);
                }
            });

            if (result.error) {
                return this.createErrorOutput(
                    PDFErrorCode.PROCESSING_FAILED,
                    `Ghostscript compression failed: ${result.error}`,
                    result.error
                );
            }

            this.updateProgress(90, 'Finalizing...');

            // Convert blob URL to blob
            const response = await fetch(result.pdfDataURL!);
            const blob = await response.blob();
            URL.revokeObjectURL(result.pdfDataURL!);

            const compressedSize = blob.size;
            const ratio = originalSize > 0
                ? ((originalSize - compressedSize) / originalSize) * 100
                : 0;

            const outputFilename = this.generateFilename(file.name);

            this.updateProgress(100, 'Complete!');

            return this.createSuccessOutput(blob, outputFilename, {
                originalSize,
                compressedSize,
                compressionRatio: ratio.toFixed(1),
                quality: compressOptions.quality,
                engine: 'ghostscript',
            });

        } catch (error) {
            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                'Failed to compress PDF with Ghostscript: ' + (error instanceof Error ? error.message : String(error)),
                error instanceof Error ? error.stack : undefined
            );
        }
    }

    /**
     * Run Ghostscript compression in a web worker
     */
    private runGhostscriptWorker(
        fileData: ArrayBuffer,
        options: GhostscriptCompressOptions,
        onProgress?: (text: string) => void
    ): Promise<{ pdfDataURL?: string; error?: string }> {
        return new Promise((resolve, reject) => {
            // Use the external wrapper script
            this.worker = new Worker('/ghostscript/worker-loader.js');

            const timeout = setTimeout(() => {
                this.worker?.terminate();
                reject(new Error('Processing timeout after 5 minutes'));
            }, 300000); // 5 minute timeout

            this.worker.onmessage = (e: MessageEvent<WorkerMessage>) => {
                const message = e.data;

                // Handle progress updates
                if ('type' in message && message.type === 'progress') {
                    onProgress?.(message.data);
                    return;
                }

                // Handle result
                if ('type' in message && message.type === 'result') {
                    clearTimeout(timeout);
                    this.worker?.terminate();
                    resolve(message.data);
                    return;
                }

                // Legacy format (backwards compatibility)
                if ('pdfDataURL' in message || 'error' in message) {
                    clearTimeout(timeout);
                    this.worker?.terminate();
                    resolve(message);
                }
            };

            this.worker.onerror = (error) => {
                clearTimeout(timeout);
                this.worker?.terminate();
                const msg = error instanceof ErrorEvent ? error.message : 'Unknown Worker Error';
                reject(new Error(msg));
            };

            // Send the file data options to the worker
            this.worker.postMessage({
                pdfData: fileData,
                options
            }, [fileData]);
        });
    }

    /**
     * Generate output filename
     */
    private generateFilename(originalName: string): string {
        const lastDot = originalName.lastIndexOf('.');
        const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
        return `${baseName}_gs_compressed.pdf`;
    }

    /**
     * Get accepted file types
     */
    protected getAcceptedTypes(): string[] {
        return ['application/pdf'];
    }

    /**
     * Cancel processing
     */
    cancel(): void {
        super.cancel();
        this.worker?.terminate();
        this.worker = null;
    }
}

/**
 * Create a new Ghostscript compress processor instance
 */
export function createGhostscriptCompressProcessor(): GhostscriptCompressPDFProcessor {
    return new GhostscriptCompressPDFProcessor();
}

/**
 * Compress a PDF using Ghostscript (convenience function)
 */
export async function ghostscriptCompressPDF(
    file: File,
    options?: Partial<GhostscriptCompressOptions>,
    onProgress?: ProgressCallback
): Promise<ProcessOutput> {
    const processor = createGhostscriptCompressProcessor();
    return processor.process(
        {
            files: [file],
            options: options || {},
        },
        onProgress
    );
}
