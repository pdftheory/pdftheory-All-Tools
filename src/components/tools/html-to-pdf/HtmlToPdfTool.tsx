'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { FileType, Upload, Code2, Eye, EyeOff, AlertCircle } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useHistoryLogger } from '@/hooks/useHistoryLogger';

export interface HtmlToPDFToolProps {
    className?: string;
}

type InputMode = 'upload' | 'code';
type PageSize = 'a4' | 'letter' | 'legal';
type Orientation = 'portrait' | 'landscape';

const PAGE_DIMENSIONS = {
    a4: { portrait: { width: 210, height: 297 }, landscape: { width: 297, height: 210 } },
    letter: { portrait: { width: 216, height: 279 }, landscape: { width: 279, height: 216 } },
    legal: { portrait: { width: 216, height: 356 }, landscape: { width: 356, height: 216 } },
};

/**
 * HtmlToPDFTool Component
 * 
 * Converts HTML files or raw HTML code to high-quality PDF documents.
 * Uses html2canvas + jsPDF for client-side conversion (privacy-first).
 */
export function HtmlToPDFTool({ className = '' }: HtmlToPDFToolProps) {
    const t = useTranslations('common');
    const { logToolUsage } = useHistoryLogger();

    // State
    const [inputMode, setInputMode] = useState<InputMode>('code');
    const [file, setFile] = useState<File | null>(null);
    const [htmlCode, setHtmlCode] = useState<string>(`<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding: 40px;
            line-height: 1.6;
            color: #333;
        }
        h1 {
            color: #2563eb;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 10px;
        }
        .highlight {
            background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
            padding: 2px 8px;
            border-radius: 4px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #2563eb;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f8fafc;
        }
    </style>
</head>
<body>
    <h1>Welcome to HTML to PDF</h1>
    <p>This tool converts your <span class="highlight">HTML content</span> into a professionally formatted PDF document.</p>
    
    <h2>Features</h2>
    <ul>
        <li>Full CSS styling support</li>
        <li>Multiple page sizes (A4, Letter, Legal)</li>
        <li>Portrait and Landscape orientations</li>
        <li>100% client-side processing</li>
    </ul>
    
    <h2>Sample Table</h2>
    <table>
        <tr>
            <th>Feature</th>
            <th>Status</th>
        </tr>
        <tr>
            <td>CSS Support</td>
            <td>✅ Full</td>
        </tr>
        <tr>
            <td>Images</td>
            <td>✅ Embedded</td>
        </tr>
        <tr>
            <td>Privacy</td>
            <td>✅ No Upload</td>
        </tr>
    </table>
    
    <p><strong>Edit this HTML and click "Convert to PDF" to get started!</strong></p>
</body>
</html>`);
    const [showPreview, setShowPreview] = useState(true);
    const [resultBlob, setResultBlob] = useState<Blob | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);

    // Options
    const [pageSize, setPageSize] = useState<PageSize>('a4');
    const [orientation, setOrientation] = useState<Orientation>('portrait');
    const [scale, setScale] = useState(2); // Higher scale = better quality

    const previewRef = useRef<HTMLIFrameElement>(null);

    /**
     * Handle file selected from uploader
     */
    const handleFilesSelected = useCallback(async (files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
            setResultBlob(null);
            setError(null);

            try {
                const content = await files[0].text();
                setHtmlCode(content);
            } catch (err) {
                console.error('Failed to read file:', err);
                setError('Failed to read the HTML file.');
            }
        }
    }, []);

    /**
     * Handle file upload error
     */
    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    /**
     * Convert HTML to PDF using html2canvas + jsPDF
     */
    const handleConvert = useCallback(async () => {
        if (!htmlCode.trim()) {
            setError('Please enter some HTML content or upload a file.');
            return;
        }

        setIsProcessing(true);
        setProgress(0);
        setError(null);
        setResultBlob(null);

        try {
            setProgress(10);

            // Create a hidden container to render the HTML
            const container = document.createElement('div');
            container.style.cssText = `
                position: absolute;
                left: -9999px;
                top: 0;
                width: ${PAGE_DIMENSIONS[pageSize][orientation].width * 3.78}px;
                background: white;
            `;
            document.body.appendChild(container);

            // Create an iframe for isolated rendering
            const iframe = document.createElement('iframe');
            iframe.style.cssText = `
                width: ${PAGE_DIMENSIONS[pageSize][orientation].width * 3.78}px;
                height: auto;
                border: none;
            `;
            container.appendChild(iframe);

            setProgress(30);

            // Write HTML content to iframe
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (!iframeDoc) {
                throw new Error('Failed to create rendering context.');
            }

            iframeDoc.open();
            iframeDoc.write(htmlCode);
            iframeDoc.close();

            // Wait for content to load
            await new Promise(resolve => setTimeout(resolve, 500));

            setProgress(50);

            // Get the content height
            const contentHeight = iframeDoc.body.scrollHeight;
            iframe.style.height = `${contentHeight}px`;

            // Capture with html2canvas
            const canvas = await html2canvas(iframeDoc.body, {
                scale: scale,
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#ffffff',
                logging: false,
            });

            setProgress(70);

            // Create PDF
            const pdf = new jsPDF({
                orientation: orientation,
                unit: 'mm',
                format: pageSize,
            });

            const pageWidth = PAGE_DIMENSIONS[pageSize][orientation].width;
            const pageHeight = PAGE_DIMENSIONS[pageSize][orientation].height;
            const margin = 10;
            const contentWidth = pageWidth - (margin * 2);

            const imgData = canvas.toDataURL('image/png');
            const imgWidth = contentWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            // Handle multi-page content
            let heightLeft = imgHeight;
            let position = margin;

            // First page
            pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
            heightLeft -= (pageHeight - margin * 2);

            // Additional pages if needed
            while (heightLeft > 0) {
                position = heightLeft - imgHeight + margin;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
                heightLeft -= (pageHeight - margin * 2);
            }

            setProgress(90);

            // Clean up
            document.body.removeChild(container);

            // Generate blob
            const pdfBlob = pdf.output('blob');
            setResultBlob(pdfBlob);

            setProgress(100);

            logToolUsage('html_to_pdf', file ? file.name : 'raw_html_code', {
                inputMode,
                fileSize: file ? file.size : htmlCode.length,
                pageSize,
                orientation,
                scale
            });
        } catch (err) {
            console.error('PDF conversion error:', err);
            setError(err instanceof Error ? err.message : 'Failed to convert HTML to PDF.');
        } finally {
            setIsProcessing(false);
        }
    }, [htmlCode, pageSize, orientation, scale]);

    /**
     * Reset state
     */
    const handleReset = useCallback(() => {
        setFile(null);
        setResultBlob(null);
        setError(null);
        setProgress(0);
    }, []);

    const hasContent = htmlCode.trim().length > 0;
    const canProcess = hasContent && !isProcessing;

    return (
        <div className={`space-y-6 ${className}`.trim()}>
            {/* Input Mode Tabs */}
            <div className="flex gap-2 p-1 bg-[hsl(var(--color-muted)/0.3)] rounded-[var(--radius-lg)]">
                <button
                    type="button"
                    onClick={() => setInputMode('code')}
                    className={`
                        flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-[var(--radius-md)] 
                        text-sm font-medium transition-all duration-200
                        ${inputMode === 'code'
                            ? 'bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] shadow-sm'
                            : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]'
                        }
                    `}
                >
                    <Code2 className="w-4 h-4" />
                    Write HTML Code
                </button>
                <button
                    type="button"
                    onClick={() => setInputMode('upload')}
                    className={`
                        flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-[var(--radius-md)] 
                        text-sm font-medium transition-all duration-200
                        ${inputMode === 'upload'
                            ? 'bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] shadow-sm'
                            : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]'
                        }
                    `}
                >
                    <Upload className="w-4 h-4" />
                    Upload HTML File
                </button>
            </div>

            {/* Upload Mode - File Uploader */}
            {inputMode === 'upload' && !file && (
                <FileUploader
                    accept={['.html', '.htm', 'text/html']}
                    multiple={false}
                    maxFiles={1}
                    onFilesSelected={handleFilesSelected}
                    onError={handleUploadError}
                    disabled={isProcessing}
                    label="Upload HTML File"
                    description="Drag and drop an .html or .htm file to convert to PDF."
                />
            )}

            {/* Editor & Preview */}
            {(inputMode === 'code' || (inputMode === 'upload' && file)) && (
                <div className="space-y-4">
                    {/* File info for upload mode */}
                    {inputMode === 'upload' && file && (
                        <Card variant="outlined">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-[hsl(var(--color-foreground))]">{file.name}</p>
                                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                                        {(file.size / 1024).toFixed(2)} KB
                                    </p>
                                </div>
                                <Button variant="ghost" size="sm" onClick={handleReset} disabled={isProcessing}>
                                    {t('buttons.clear') || 'Clear'}
                                </Button>
                            </div>
                        </Card>
                    )}

                    {/* Preview Toggle */}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={() => setShowPreview(!showPreview)}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] transition-colors"
                        >
                            {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            {showPreview ? 'Hide Preview' : 'Show Preview'}
                        </button>
                    </div>

                    {/* Editor and Preview Container */}
                    <div className={`grid gap-4 ${showPreview ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
                        {/* HTML Editor */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-[hsl(var(--color-foreground))]">
                                HTML Code Editor
                            </label>
                            <textarea
                                value={htmlCode}
                                onChange={(e) => {
                                    setHtmlCode(e.target.value);
                                    setResultBlob(null);
                                }}
                                disabled={isProcessing}
                                placeholder="<!DOCTYPE html>\n<html>\n<head>...</head>\n<body>...</body>\n</html>"
                                className="
                                    w-full h-[500px] p-4 
                                    font-mono text-sm
                                    border border-[hsl(var(--color-border))] 
                                    rounded-[var(--radius-md)]
                                    bg-[hsl(var(--color-background))]
                                    text-[hsl(var(--color-foreground))]
                                    placeholder:text-[hsl(var(--color-muted-foreground))]
                                    focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary)/0.3)] focus:border-[hsl(var(--color-primary))]
                                    resize-none
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                "
                            />
                        </div>

                        {/* Live Preview */}
                        {showPreview && (
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-[hsl(var(--color-foreground))]">
                                    Live Preview
                                </label>
                                <iframe
                                    ref={previewRef}
                                    srcDoc={htmlCode}
                                    title="HTML Preview"
                                    className="
                                        w-full h-[500px]
                                        border border-[hsl(var(--color-border))]
                                        rounded-[var(--radius-md)]
                                        bg-white
                                    "
                                    sandbox="allow-same-origin"
                                />
                            </div>
                        )}
                    </div>
                </div>
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
                <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
                    PDF Options
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Page Size */}
                    <div>
                        <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                            Page Size
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            {(['a4', 'letter', 'legal'] as PageSize[]).map((size) => (
                                <button
                                    key={size}
                                    type="button"
                                    onClick={() => setPageSize(size)}
                                    disabled={isProcessing}
                                    className={`
                                        px-4 py-2 rounded-[var(--radius-md)] border text-sm font-medium uppercase
                                        transition-colors duration-200
                                        ${pageSize === size
                                            ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary))] text-white'
                                            : 'border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted)/0.5)]'
                                        }
                                        disabled:opacity-50 disabled:cursor-not-allowed
                                    `}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Orientation */}
                    <div>
                        <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                            Orientation
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            {(['portrait', 'landscape'] as Orientation[]).map((orient) => (
                                <button
                                    key={orient}
                                    type="button"
                                    onClick={() => setOrientation(orient)}
                                    disabled={isProcessing}
                                    className={`
                                        px-4 py-2 rounded-[var(--radius-md)] border text-sm font-medium capitalize
                                        transition-colors duration-200
                                        ${orientation === orient
                                            ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary))] text-white'
                                            : 'border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted)/0.5)]'
                                        }
                                        disabled:opacity-50 disabled:cursor-not-allowed
                                    `}
                                >
                                    {orient}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quality/Scale */}
                    <div className="md:col-span-2">
                        <label htmlFor="quality-slider" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                            Quality: {scale === 1 ? 'Standard' : scale === 2 ? 'High' : 'Ultra'}
                        </label>
                        <input
                            id="quality-slider"
                            type="range"
                            min="1"
                            max="3"
                            step="1"
                            value={scale}
                            onChange={(e) => setScale(Number(e.target.value))}
                            disabled={isProcessing}
                            title="PDF rendering quality - Standard, High, or Ultra"
                            aria-label="PDF quality slider"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[hsl(var(--color-primary))]"
                        />
                        <div className="flex justify-between text-xs text-[hsl(var(--color-muted-foreground))] mt-1">
                            <span>Standard</span>
                            <span>High</span>
                            <span>Ultra</span>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Processing Progress */}
            {isProcessing && (
                <ProcessingProgress
                    progress={progress}
                    status="processing"
                    message="Converting HTML to PDF..."
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
                    <FileType className="w-4 h-4 mr-2" />
                    {isProcessing ? 'Converting...' : 'Convert to PDF'}
                </Button>

                {resultBlob && (
                    <DownloadButton
                        file={resultBlob}
                        filename={file ? `${file.name.replace(/\.(html|htm)$/i, '')}.pdf` : 'document.pdf'}
                        variant="secondary"
                        size="lg"
                    />
                )}
            </div>

            {/* Success Message */}
            {resultBlob && (
                <div
                    className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700"
                    role="status"
                >
                    <p className="text-sm font-medium">
                        ✅ PDF created successfully! Click the download button to save your file.
                    </p>
                </div>
            )}
        </div>
    );
}

export default HtmlToPDFTool;
