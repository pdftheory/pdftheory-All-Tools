'use client';

import React, { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { useHistoryLogger } from '@/hooks/useHistoryLogger';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { FileText, Copy, Check, AlertCircle } from 'lucide-react';
import { createWorker } from 'tesseract.js';
import * as pdfjsLib from 'pdfjs-dist';

// Configure PDF.js worker
if (typeof window !== 'undefined') {
    // Use unpkg with specific version to match package.json (v4.8.69) to ensure worker compatibility
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@4.8.69/build/pdf.worker.min.mjs';
}

export interface PdfToTxtToolProps {
    className?: string;
}

/**
 * PdfToTxtTool Component
 * 
 * Converts PDF documents to plain text.
 * Uses pdf.js for client-side extraction and Tesseract.js for OCR fallback.
 */
export function PdfToTxtTool({ className = '' }: PdfToTxtToolProps) {
    const t = useTranslations('common');
    const { logToolUsage } = useHistoryLogger();

    // State
    const [file, setFile] = useState<File | null>(null);
    const [textOutput, setTextOutput] = useState<string>('');
    const [resultBlob, setResultBlob] = useState<Blob | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    /**
     * Handle file selected from uploader
     */
    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
            setTextOutput('');
            setResultBlob(null);
            setError(null);
        }
    }, []);

    /**
     * Handle file upload error
     */
    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    /**
     * Perform OCR on a PDF page using Tesseract.js
     */
    const performOCR = async (page: any): Promise<string> => {
        const viewport = page.getViewport({ scale: 2.0 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) return '';

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport: viewport }).promise;
        const imageData = canvas.toDataURL('image/png');

        const worker = await createWorker('eng');
        const ret = await worker.recognize(imageData);
        await worker.terminate();

        return ret.data.text;
    };

    /**
     * Convert PDF to Text using pdf.js
     */
    const handleConvert = useCallback(async () => {
        if (!file) {
            setError('Please upload a PDF file first.');
            return;
        }

        setIsProcessing(true);
        setProgress(0);
        setError(null);
        setTextOutput('');
        setResultBlob(null);

        try {
            setProgress(10);
            const arrayBuffer = await file.arrayBuffer();

            setProgress(20);
            const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
            const pdf = await loadingTask.promise;
            const numPages = pdf.numPages;

            setProgress(30);

            let extractedText = '';
            let totalTextLength = 0;

            // Extract content from each page
            for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);

                // Try Text Content Extraction First
                const textContent = await page.getTextContent();
                let pageText = '';

                // --- TEXT EXTRACTION STRATEGY ---
                let lastY = -1;
                let currentLine = '';

                for (const item of textContent.items) {
                    if ('str' in item) {
                        const textItem = item as { str: string; transform?: number[] };
                        const str = textItem.str;

                        // Basic Layout Reconstruction
                        const y = textItem.transform ? textItem.transform[5] : 0;
                        if (lastY !== -1 && textItem.transform && Math.abs(y - lastY) > 5) {
                            if (currentLine.trim()) {
                                pageText += currentLine.trim() + '\n';
                            }
                            currentLine = '';
                        }

                        // Add spacing heuristic
                        if (currentLine && !currentLine.endsWith(' ') && !str.startsWith(' ')) {
                            currentLine += ' ';
                        }

                        currentLine += str;
                        if (textItem.transform) lastY = y;
                    }
                }

                // Flush last line
                if (currentLine.trim()) {
                    pageText += currentLine.trim() + '\n';
                }

                // --- OCR FALLBACK STRATEGY ---
                if (pageText.length < 50) {
                    try {
                        const ocrText = await performOCR(page);
                        if (ocrText.trim().length > pageText.length) {
                            pageText = ocrText; // Use OCR text directly
                        }
                    } catch (ocrErr) {
                        console.warn('OCR failed for page', pageNum, ocrErr);
                    }
                }

                totalTextLength += pageText.length;

                extractedText += `--- Page ${pageNum} ---\n\n`;
                extractedText += pageText + '\n\n';

                setProgress(30 + Math.round((pageNum / numPages) * 50));
            }

            if (totalTextLength === 0) {
                setError('No text could be extracted. The document might be password protected OR purely image-based without OCR data.');
            }

            setProgress(85);

            logToolUsage('pdf_to_text', file.name, {
                page_count: numPages,
                text_length: totalTextLength
            });

            setTextOutput(extractedText);

            // Create downloadable blob
            const blob = new Blob([extractedText], { type: 'text/plain' });
            setResultBlob(blob);

            setProgress(100);
        } catch (err) {
            console.error('PDF to Text conversion error:', err);
            setError(err instanceof Error ? err.message : 'Failed to convert PDF to Text.');
        } finally {
            setIsProcessing(false);
        }
    }, [file]);

    /**
     * Copy text to clipboard
     */
    const handleCopy = useCallback(async () => {
        if (!textOutput) return;

        try {
            await navigator.clipboard.writeText(textOutput);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    }, [textOutput]);

    /**
     * Reset state
     */
    const handleReset = useCallback(() => {
        setFile(null);
        setTextOutput('');
        setResultBlob(null);
        setError(null);
        setProgress(0);
    }, []);

    const canProcess = file !== null && !isProcessing;

    return (
        <div className={`space-y-6 ${className}`.trim()}>
            {/* File Uploader */}
            {!file && (
                <FileUploader
                    accept={['.pdf', 'application/pdf']}
                    multiple={false}
                    maxFiles={1}
                    onFilesSelected={handleFilesSelected}
                    onError={handleUploadError}
                    disabled={isProcessing}
                    label="Upload PDF File"
                    description="Drag and drop a PDF file to extract text."
                />
            )}

            {/* File Info */}
            {file && (
                <Card variant="outlined">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                <FileText className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="font-medium text-[hsl(var(--color-foreground))]">{file.name}</p>
                                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                                    {(file.size / 1024).toFixed(2)} KB
                                </p>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={handleReset} disabled={isProcessing}>
                            {t('buttons.clear') || 'Clear'}
                        </Button>
                    </div>
                </Card>
            )}

            {/* Error Message */}
            {error && (
                <div
                    className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700 flex items-start gap-3"
                    role="alert"
                >
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{error}</p>
                </div>
            )}

            {/* Processing Progress */}
            {isProcessing && (
                <ProcessingProgress
                    progress={progress}
                    status={progress < 100 ? 'processing' : 'complete'}
                    message={progress < 100 ? 'Extracting text...' : 'Extraction complete!'}
                    showPercentage
                />
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleConvert}
                    disabled={!canProcess}
                    loading={isProcessing}
                >
                    <FileText className="w-4 h-4 mr-2" />
                    {isProcessing ? 'Extracting...' : 'Extract Text'}
                </Button>

                {resultBlob && (
                    <>
                        <DownloadButton
                            file={resultBlob}
                            filename={file ? `${file.name.replace('.pdf', '')}.txt` : 'document.txt'}
                            variant="secondary"
                            size="lg"
                        />
                        <Button
                            variant="ghost"
                            size="lg"
                            onClick={handleCopy}
                        >
                            {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                            {copied ? 'Copied!' : 'Copy Text'}
                        </Button>
                    </>
                )}
            </div>

            {/* Output Preview */}
            {textOutput && (
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))]">
                        Extracted Text
                    </h3>

                    <div className="relative">
                        <pre className="p-4 bg-gray-50 border border-[hsl(var(--color-border))] rounded-[var(--radius-md)] overflow-auto max-h-[500px] text-sm font-mono whitespace-pre-wrap text-[hsl(var(--color-foreground))]">
                            {textOutput}
                        </pre>
                        <button
                            onClick={handleCopy}
                            className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white border rounded-md transition-colors shadow-sm"
                            title="Copy to clipboard"
                        >
                            {copied ? (
                                <Check className="w-4 h-4 text-green-600" />
                            ) : (
                                <Copy className="w-4 h-4 text-gray-500" />
                            )}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PdfToTxtTool;
