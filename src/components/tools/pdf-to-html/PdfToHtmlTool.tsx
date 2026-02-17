'use client';

import React, { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { FileCode2, Download, Copy, Check, AlertCircle, Eye, EyeOff, Settings2 } from 'lucide-react';
import { createWorker } from 'tesseract.js';
import * as pdfjsLib from 'pdfjs-dist';
import { StructureAnalyzer, SemanticElement } from '@/lib/pdf/structure-analyzer';
import { useHistoryLogger } from '@/hooks/useHistoryLogger';
// import { StyleManager } from '@/lib/pdf/style-manager'; // Reserved for future use

// Configure PDF.js worker
if (typeof window !== 'undefined') {
    // Use unpkg with specific version to match package.json (v4.8.69) to ensure worker compatibility
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@4.8.69/build/pdf.worker.min.mjs';
}

export interface PdfToHtmlToolProps {
    className?: string;
}

type OutputMode = 'structured' | 'plain' | 'styled';

interface ExtractionOptions {
    imageQuality: 'low' | 'medium' | 'high';
    maxWidth: number;
    showPageGap: boolean;
    wrapInHtmlDoc: boolean;
}

/**
 * PdfToHtmlTool Component
 * 
 * Converts PDF documents to clean, semantic HTML.
 * Uses pdf.js for client-side extraction (privacy-first).
 */
export function PdfToHtmlTool({ className = '' }: PdfToHtmlToolProps) {
    const t = useTranslations('common');
    const { logToolUsage } = useHistoryLogger();

    // State
    const [file, setFile] = useState<File | null>(null);
    const [htmlOutput, setHtmlOutput] = useState<string>('');
    const [resultBlob, setResultBlob] = useState<Blob | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [showPreview, setShowPreview] = useState(true);
    const [copied, setCopied] = useState(false);

    // Options
    const [outputMode, setOutputMode] = useState<OutputMode>('styled');
    const [options, setOptions] = useState<ExtractionOptions>({
        imageQuality: 'medium',
        maxWidth: 1000,
        showPageGap: true,
        wrapInHtmlDoc: true,
    });

    /**
     * Handle file selected from uploader
     */
    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
            setHtmlOutput('');
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
     * Generate CSS styles for the HTML output
     */
    const generateStyles = useCallback(() => {
        if (outputMode === 'plain') return '';

        return `
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background: #ffffff;
            padding: 40px;
            max-width: 900px;
            margin: 0 auto;
        }
        .pdf-page {
            background: #ffffff;
            padding: 40px;
            margin-bottom: 30px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .pdf-page-header {
            font-size: 12px;
            color: #6b7280;
            padding-bottom: 15px;
            margin-bottom: 20px;
            border-bottom: 1px solid #e5e7eb;
        }
        .pdf-text-block {
            margin-bottom: 1em;
        }
        .pdf-text-line {
            display: block;
        }
        h1, h2, h3 {
            color: #111827;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
        }
        h1 { font-size: 1.875rem; font-weight: 700; }
        h2 { font-size: 1.5rem; font-weight: 600; }
        h3 { font-size: 1.25rem; font-weight: 600; }
        p {
            margin-bottom: 1em;
        }
        table.pdf-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5em 0;
            background: #ffffff;
        }
        table.pdf-table th,
        table.pdf-table td {
            border: 1px solid #d1d5db;
            padding: 10px 12px;
            text-align: left;
        }
        table.pdf-table th {
            background: #f3f4f6;
            font-weight: 600;
            color: #374151;
        }
        table.pdf-table tr:nth-child(even) {
            background: #f9fafb;
        }
        ul, ol {
            margin: 1em 0;
            padding-left: 2em;
        }
        li {
            margin-bottom: 0.5em;
        }
        .page-break {
            page-break-after: always;
            border-top: 2px dashed #d1d5db;
            margin: 40px 0;
            padding-top: 40px;
        }
        @media print {
            body { padding: 20px; }
            .pdf-page { border: none; box-shadow: none; }
            .page-break { border: none; }
        }
    </style>`;
    }, [outputMode]);

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
     * Escape HTML special characters
     */
    const escapeHtml = (text: string): string => {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    };

    /** Text item from PDF.js with position info */
    interface TextItem {
        str: string;
        x: number;
        y: number;
        width: number;
        height: number;
        fontSize: number;
    }

    /** Detect tables from text items based on column alignment */
    const detectTables = (items: TextItem[]): { tables: TextItem[][]; nonTableItems: TextItem[] } => {
        if (items.length < 4) return { tables: [], nonTableItems: items };

        const yTolerance = 5;
        const xTolerance = 15;

        // Group by Y position (rows)
        const rowGroups = new Map<number, TextItem[]>();
        for (const item of items) {
            const y = Math.round(item.y / yTolerance) * yTolerance;
            if (!rowGroups.has(y)) rowGroups.set(y, []);
            rowGroups.get(y)!.push(item);
        }

        // Find column positions across multiple rows
        const columnCounts = new Map<number, number>();
        for (const rowItems of rowGroups.values()) {
            for (const item of rowItems) {
                const x = Math.round(item.x / xTolerance) * xTolerance;
                columnCounts.set(x, (columnCounts.get(x) || 0) + 1);
            }
        }

        // Columns that appear in 3+ rows suggest a table
        const tableColumns = Array.from(columnCounts.entries())
            .filter(([_, count]) => count >= 3)
            .map(([x]) => x)
            .sort((a, b) => a - b);

        if (tableColumns.length < 2) return { tables: [], nonTableItems: items };

        // Identify table rows (rows with items in multiple table columns)
        const tableRows: TextItem[][] = [];
        const nonTableItems: TextItem[] = [];

        const sortedYs = Array.from(rowGroups.keys()).sort((a, b) => b - a);
        for (const y of sortedYs) {
            const rowItems = rowGroups.get(y)!;
            let matchingColumns = 0;
            for (const item of rowItems) {
                const x = Math.round(item.x / xTolerance) * xTolerance;
                if (tableColumns.some(col => Math.abs(col - x) < xTolerance)) matchingColumns++;
            }
            if (matchingColumns >= 2) {
                tableRows.push(rowItems);
            } else {
                nonTableItems.push(...rowItems);
            }
        }

        return { tables: tableRows.length >= 2 ? [tableRows.flat()] : [], nonTableItems: tableRows.length >= 2 ? nonTableItems : items };
    };

    /** Convert table rows to HTML table */
    const tableToHtml = (rows: TextItem[][], columns: number[]): string => {
        if (rows.length === 0) return '';
        const xTolerance = 15;
        let html = '<table class="pdf-table">\n';

        rows.forEach((rowItems, rowIdx) => {
            html += rowIdx === 0 ? '  <thead><tr>' : '  <tr>';
            const cells: string[] = new Array(columns.length).fill('');

            for (const item of rowItems) {
                const x = Math.round(item.x / xTolerance) * xTolerance;
                const colIdx = columns.findIndex(col => Math.abs(col - x) < xTolerance);
                if (colIdx >= 0) cells[colIdx] = (cells[colIdx] + ' ' + escapeHtml(item.str)).trim();
            }

            const tag = rowIdx === 0 ? 'th' : 'td';
            html += cells.map(c => `<${tag}>${c || '&nbsp;'}</${tag}>`).join('');
            html += rowIdx === 0 ? '</tr></thead>\n  <tbody>\n' : '</tr>\n';
        });

        html += '  </tbody>\n</table>\n';
        return html;
    };

    /** Detect headings based on font size */
    const getHeadingTag = (fontSize: number, avgFontSize: number): string | null => {
        if (fontSize > avgFontSize * 1.8) return 'h1';
        if (fontSize > avgFontSize * 1.4) return 'h2';
        if (fontSize > avgFontSize * 1.2) return 'h3';
        return null;
    };

    /** Convert text items to semantic HTML */
    const itemsToSemanticHtml = (items: TextItem[]): string => {
        if (items.length === 0) return '';

        const avgFontSize = items.reduce((sum, i) => sum + i.fontSize, 0) / items.length;
        const yTolerance = 5;

        // Group by Y (rows)
        const rowGroups = new Map<number, TextItem[]>();
        for (const item of items) {
            const y = Math.round(item.y / yTolerance) * yTolerance;
            if (!rowGroups.has(y)) rowGroups.set(y, []);
            rowGroups.get(y)!.push(item);
        }

        const sortedYs = Array.from(rowGroups.keys()).sort((a, b) => b - a);
        let html = '';

        for (const y of sortedYs) {
            const rowItems = rowGroups.get(y)!.sort((a, b) => a.x - b.x);
            const lineText = rowItems.map(i => i.str).join(' ').trim();
            if (!lineText) continue;

            const maxFontSize = Math.max(...rowItems.map(i => i.fontSize));
            const headingTag = getHeadingTag(maxFontSize, avgFontSize);

            if (headingTag) {
                html += `<${headingTag}>${escapeHtml(lineText)}</${headingTag}>\n`;
            } else if (lineText.match(/^[\u2022\u2023\u25E6\u2043\u2219•\-\*]\s/)) {
                html += `<li>${escapeHtml(lineText.replace(/^[\u2022\u2023\u25E6\u2043\u2219•\-\*]\s*/, ''))}</li>\n`;
            } else if (lineText.match(/^\d+[\.\)]\s/)) {
                html += `<li>${escapeHtml(lineText.replace(/^\d+[\.\)]\s*/, ''))}</li>\n`;
            } else {
                html += `<p>${escapeHtml(lineText)}</p>\n`;
            }
        }

        // Post-process: wrap consecutive <li> in <ul>
        html = html.replace(/(<li>.*?<\/li>\n)+/g, '<ul>\n$&</ul>\n');

        return html;
    };

    /**
     * Convert PDF to HTML using pdf.js
     */
    const handleConvert = useCallback(async () => {
        if (!file) {
            setError('Please upload a PDF file first.');
            return;
        }

        setIsProcessing(true);
        setProgress(0);
        setError(null);
        setHtmlOutput('');
        setResultBlob(null);

        try {
            setProgress(10);

            // Read file as ArrayBuffer
            const arrayBuffer = await file.arrayBuffer();

            setProgress(20);

            // Load PDF document
            const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
            const pdf = await loadingTask.promise;
            const numPages = pdf.numPages;

            setProgress(30);

            // Initialize output variables
            let htmlContent = '';
            const textBlocks: string[] = [];
            let totalTextLength = 0;

            // Extract content from each page
            for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);

                // --- IMAGE-BASED RENDERING ---
                try {
                    const imageDataUrl = await renderPageAsImage(page, options.imageQuality);

                    const marginBottom = options.showPageGap ? '20px' : '0';
                    const boxShadow = options.showPageGap ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none';
                    const border = options.showPageGap ? '1px solid #e5e7eb' : 'none';

                    htmlContent += `
        <div class="pdf-page" id="page-${pageNum}" style="margin-bottom: ${marginBottom}; box-shadow: ${boxShadow}; width: 100%;">
            <img src="${imageDataUrl}" alt="Page ${pageNum}" style="width: 100%; display: block; border: ${border};" />
        </div>`;
                } catch (err) {
                    console.error('Error rendering page as image:', err);
                    setError(`Failed to render page ${pageNum} as image.`);
                }

                setProgress(30 + Math.round((pageNum / numPages) * 50));
            }

            // Mark as valid if we have content
            if (!htmlContent) {
                setError('No pages could be rendered.');
            } else {
                // Wrap in container with maxWidth
                const maxWidth = options.maxWidth > 0 ? `${options.maxWidth}px` : '1000px';
                const gapStyle = options.showPageGap ? 'padding: 20px;' : 'padding: 0;';

                htmlContent = `<div class="pdf-document" style="max-width: ${maxWidth}; margin: 0 auto; display: flex; flex-direction: column; align-items: center; background-color: ${options.showPageGap ? '#f3f4f6' : '#ffffff'}; ${gapStyle}">${htmlContent}</div>`;
            }

            setProgress(85);

            // Wrap in full HTML document if requested
            let finalHtml: string;
            if (options.wrapInHtmlDoc) {
                finalHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(file.name.replace('.pdf', ''))}</title>
    ${generateStyles()}
</head>
<body>
    <main>
        ${htmlContent}
    </main>
</body>
</html>`;
            } else {
                finalHtml = htmlContent;
            }

            setProgress(95);

            setHtmlOutput(finalHtml);

            // Create downloadable blob
            const blob = new Blob([finalHtml], { type: 'text/html' });
            setResultBlob(blob);

            setProgress(100);

            logToolUsage('pdf_to_html', file.name, {
                fileSize: file.size,
                imageQuality: options.imageQuality,
                maxWidth: options.maxWidth,
                showPageGap: options.showPageGap,
                wrapInHtmlDoc: options.wrapInHtmlDoc
            });
        } catch (err) {
            console.error('PDF to HTML conversion error:', err);
            setError(err instanceof Error ? err.message : 'Failed to convert PDF to HTML.');
        } finally {
            setIsProcessing(false);
        }
    }, [file, options, generateStyles]);

    /**
     * Copy HTML to clipboard
     */
    const handleCopy = useCallback(async () => {
        if (!htmlOutput) return;

        try {
            await navigator.clipboard.writeText(htmlOutput);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }, [htmlOutput]);

    /**
     * Reset state
     */
    const handleReset = useCallback(() => {
        setFile(null);
        setHtmlOutput('');
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
                    description="Drag and drop a PDF file to convert to HTML."
                />
            )}

            {/* File Info */}
            {file && (
                <Card variant="outlined">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                                <FileCode2 className="w-5 h-5 text-red-600" />
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

            {/* Conversion Options */}
            <Card variant="outlined">
                <div className="flex items-center gap-2 mb-4">
                    <Settings2 className="w-5 h-5 text-[hsl(var(--color-muted-foreground))]" />
                    <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))]">
                        Conversion Options
                    </h3>
                </div>

                <div className="space-y-4">
                    {/* Image Quality */}
                    <div>
                        <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                            Image Quality
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            {(['low', 'medium', 'high'] as const).map((q) => (
                                <button
                                    key={q}
                                    type="button"
                                    onClick={() => setOptions({ ...options, imageQuality: q as any })}
                                    disabled={isProcessing}
                                    className={`
                                        px-4 py-2 rounded-[var(--radius-md)] border text-sm font-medium capitalize
                                        transition-colors duration-200
                                        ${options.imageQuality === q
                                            ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary))] text-white'
                                            : 'border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted)/0.5)]'
                                        }
                                    `}
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                        <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-1">
                            Higher quality results in larger file sizes.
                        </p>
                    </div>

                    {/* Max Width Input */}
                    <div>
                        <label htmlFor="maxWidth" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                            Container Width (px)
                        </label>
                        <input
                            id="maxWidth"
                            type="number"
                            value={options.maxWidth}
                            onChange={(e) => setOptions({ ...options, maxWidth: parseInt(e.target.value) || 1000 })}
                            className="w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-sm"
                            disabled={isProcessing}
                        />
                        <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-1">
                            Limit the width of the document for better readability on large screens.
                        </p>
                    </div>

                    {/* Checkboxes */}
                    <div className="grid md:grid-cols-2 gap-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={options.showPageGap}
                                onChange={(e) => setOptions(prev => ({ ...prev, showPageGap: e.target.checked }))}
                                disabled={isProcessing}
                                className="w-4 h-4 rounded border-[hsl(var(--color-border))] text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
                            />
                            <span className="text-sm text-[hsl(var(--color-foreground))]">
                                Show gap between pages
                            </span>
                        </label>
                    </div>
                </div>
            </Card>
            {/* <label> for wrapInHtmlDoc is below, keeping it but removing the one above it */}
            <label className="flex items-center gap-3 cursor-pointer">
                <input
                    type="checkbox"
                    checked={options.wrapInHtmlDoc}
                    onChange={(e) => setOptions(prev => ({ ...prev, wrapInHtmlDoc: e.target.checked }))}
                    disabled={isProcessing}
                    className="w-4 h-4 rounded border-[hsl(var(--color-border))] text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
                />
                <span className="text-sm text-[hsl(var(--color-foreground))]">
                    Wrap in full HTML document
                </span>
            </label>



            {/* Processing Progress */}
            {
                isProcessing && (
                    <ProcessingProgress
                        progress={progress}
                        status="processing"
                        message="Extracting content from PDF..."
                        showPercentage
                    />
                )
            }

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleConvert}
                    disabled={!canProcess}
                    loading={isProcessing}
                >
                    <FileCode2 className="w-4 h-4 mr-2" />
                    {isProcessing ? 'Converting...' : 'Convert to HTML'}
                </Button>

                {resultBlob && (
                    <>
                        <DownloadButton
                            file={resultBlob}
                            filename={file ? `${file.name.replace('.pdf', '')}.html` : 'document.html'}
                            variant="secondary"
                            size="lg"
                        />
                        <Button
                            variant="ghost"
                            size="lg"
                            onClick={handleCopy}
                        >
                            {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                            {copied ? 'Copied!' : 'Copy HTML'}
                        </Button>
                    </>
                )}
            </div>

            {/* Output Preview */}
            {
                htmlOutput && (
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))]">
                            Preview
                        </h3>

                        {/* Visual Preview */}
                        <div className="border border-[hsl(var(--color-border))] rounded-[var(--radius-md)] overflow-hidden">
                            <iframe
                                srcDoc={htmlOutput}
                                title="HTML Preview"
                                className="w-full h-[500px] bg-white"
                                sandbox="allow-same-origin"
                            />
                        </div>
                    </div>
                )
            }

            {/* Success Message */}
            {
                resultBlob && (
                    <div
                        className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700"
                        role="status"
                    >
                        <p className="text-sm font-medium">
                            ✅ HTML generated successfully! You can download the file, copy the code, or view the preview above.
                        </p>
                    </div>
                )
            }
        </div >
    );
}

export default PdfToHtmlTool;


const renderPageAsImage = async (page: any, quality: 'low' | 'medium' | 'high' = 'medium'): Promise<string> => {
    // 1. Determine scale/quality
    let scale = 1.5;
    let jpegQuality = 0.85;

    if (quality === 'low') {
        scale = 1.0;
        jpegQuality = 0.6;
    } else if (quality === 'high') {
        scale = 2.0;
        jpegQuality = 0.92;
    }

    // 2. Prepare canvas
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // 3. Render
    if (!context) throw new Error('Canvas context not available');

    await page.render({
        canvasContext: context,
        viewport: viewport
    }).promise;

    // 4. Export to JPEG
    return canvas.toDataURL('image/jpeg', jpegQuality);
};

const escapeHtml = (text: string): string => {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
};
