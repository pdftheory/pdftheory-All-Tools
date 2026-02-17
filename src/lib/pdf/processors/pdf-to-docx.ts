import type {
    ProcessInput,
    ProcessOutput,
    ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { createOCRProcessor, type OCRLanguage } from './ocr';

/**
 * PDF to DOCX options
 */
export interface PDFToDocxOptions {
    /** Enable OCR for scanned documents */
    enableOCR?: boolean;
    /** OCR Language */
    ocrLanguage?: OCRLanguage;
}

/**
 * PDF to DOCX Processor
 * Converts PDF files to DOCX using a Web Worker.
 */
export class PDFToDocxProcessor extends BasePDFProcessor {
    private worker: Worker | null = null;
    private workerReady = false;

    /**
     * Initialize the worker
     */
    private async initWorker(): Promise<void> {
        if (this.worker) return;

        return new Promise((resolve, reject) => {
            try {
                this.worker = new Worker('/workers/pdf-to-docx.worker.js', { type: 'module' });

                const handleMessage = (event: MessageEvent) => {
                    const { type, error, message } = event.data;

                    if (type === 'init-complete') {
                        this.workerReady = true;
                        resolve();
                    } else if (type === 'status') {
                        // Worker status updates are generic, handled in process loop
                    } else if (type === 'error') {
                        reject(new Error(error || 'Worker initialization failed'));
                    }
                };

                this.worker.addEventListener('message', handleMessage);
                this.worker.addEventListener('error', (err) => {
                    reject(new Error('Worker connection failed'));
                });

                // Send init message
                this.worker.postMessage({
                    type: 'init',
                    id: 'init-' + Date.now(),
                    data: {}
                });

            } catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Terminate the worker
     */
    private terminateWorker() {
        if (this.worker) {
            this.worker.terminate();
            this.worker = null;
            this.workerReady = false;
        }
    }

    /**
     * Reset processor state
     */
    protected reset(): void {
        super.reset();
    }

    /**
     * Process PDF and convert to DOCX
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;
        const processOptions = options as PDFToDocxOptions;

        // Validate we have exactly 1 PDF file
        if (files.length !== 1) {
            return this.createErrorOutput(
                PDFErrorCode.INVALID_OPTIONS,
                'Please provide exactly one PDF file.',
                `Received ${files.length} file(s).`
            );
        }

        let file = files[0];

        // Validate file type
        if (!file.type.includes('pdf') && !file.name.toLowerCase().endsWith('.pdf')) {
            return this.createErrorOutput(
                PDFErrorCode.FILE_TYPE_INVALID,
                'Invalid file type. Please upload a PDF file.',
                `Received: ${file.type || 'unknown'}`
            );
        }

        try {
            // Step 1: Optional OCR Pre-processing
            if (processOptions.enableOCR) {
                this.updateProgress(5, 'Performing OCR on document...');

                try {
                    const ocrProcessor = createOCRProcessor();
                    const ocrBlob = await ocrProcessor.createSearchablePDF(
                        file,
                        {
                            languages: [processOptions.ocrLanguage || 'eng'],
                            scale: 2,
                            pages: [], // All pages
                            outputFormat: 'searchable-pdf',
                            preserveLayout: true
                        }
                    ) as Blob; // Force cast as we know it returns Blob

                    // Create a new File object from the blob to pass to the worker
                    file = new File([ocrBlob], file.name, { type: 'application/pdf' });

                    this.updateProgress(40, 'OCR complete. Starting conversion...');

                } catch (error) {
                    console.warn('OCR failed, proceeding with original file:', error);
                    // We continue with original file if OCR fails, but notify user?
                    // Ideally we should probably fail if user explicitly asked for OCR
                }
            }

            this.updateProgress(processOptions.enableOCR ? 45 : 10, 'Initializing converter...');

            try {
                await this.initWorker();
            } catch (err) {
                console.error('Failed to initialize worker:', err);
                return this.createErrorOutput(
                    PDFErrorCode.WORKER_FAILED,
                    'Failed to initialize conversion worker.',
                    err instanceof Error ? err.message : String(err)
                );
            }

            if (this.checkCancelled()) {
                return this.createErrorOutput(
                    PDFErrorCode.PROCESSING_CANCELLED,
                    'Processing was cancelled.'
                );
            }

            this.updateProgress(processOptions.enableOCR ? 50 : 30, 'Converting PDF to DOCX...');

            // process conversion via worker
            const docxBlob = await new Promise<Blob>((resolve, reject) => {
                if (!this.worker) {
                    reject(new Error('Worker not initialized'));
                    return;
                }

                const msgId = 'convert-' + Date.now();

                const handleMessage = (event: MessageEvent) => {
                    const { type, id, result, error, message } = event.data;

                    if (type === 'status') {
                        // Map worker progress (0-100) to remaining progress range
                        // If OCR used: 50-100. If not: 30-100.
                        const start = processOptions.enableOCR ? 50 : 30;
                        const range = 100 - start;
                        // We don't have numeric progress from worker, just messages usually
                        // But if we did, it would be: this.updateProgress(start + (workerProgress * range / 100), message);
                        this.updateProgress(this.progress, message);
                        return;
                    }

                    if (id !== msgId) return;

                    if (type === 'convert-complete') {
                        cleanup();
                        resolve(result);
                    } else if (type === 'error') {
                        cleanup();
                        reject(new Error(error || 'Conversion failed'));
                    }
                };

                const handleError = (error: ErrorEvent) => {
                    cleanup();
                    reject(new Error('Worker error: ' + error.message));
                };

                const cleanup = () => {
                    this.worker?.removeEventListener('message', handleMessage);
                    this.worker?.removeEventListener('error', handleError);
                };

                this.worker.addEventListener('message', handleMessage);
                this.worker.addEventListener('error', handleError);

                this.worker.postMessage({
                    type: 'convert',
                    id: msgId,
                    data: {
                        file: file
                    }
                });
            });

            if (this.checkCancelled()) {
                return this.createErrorOutput(
                    PDFErrorCode.PROCESSING_CANCELLED,
                    'Processing was cancelled.'
                );
            }

            this.updateProgress(100, 'Conversion complete!');

            const baseName = file.name.replace(/\.pdf$/i, '');
            const outputName = `${baseName}.docx`;

            return this.createSuccessOutput(
                docxBlob,
                outputName,
                { format: 'docx' }
            );

        } catch (error) {
            console.error('Conversion error:', error);
            // If worker crashed or errored, we might want to restart it next time
            this.terminateWorker();

            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                'Failed to convert PDF to DOCX.',
                error instanceof Error ? error.message : 'Unknown error'
            );
        }
    }
}

/**
 * Create a new instance of the PDF to DOCX processor
 */
export function createPDFToDocxProcessor(): PDFToDocxProcessor {
    return new PDFToDocxProcessor();
}

/**
 * Convert PDF to DOCX (convenience function)
 */
export async function pdfToDocx(
    file: File,
    options?: Partial<PDFToDocxOptions>,
    onProgress?: ProgressCallback
): Promise<ProcessOutput> {
    const processor = createPDFToDocxProcessor();
    return processor.process(
        {
            files: [file],
            options: options || {},
        },
        onProgress
    );
}
