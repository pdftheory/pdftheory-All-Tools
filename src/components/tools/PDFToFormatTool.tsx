'use client';

import React, { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from './FileUploader';
import { ProcessingProgress } from './ProcessingProgress';
import { DownloadButton } from './DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { FileText, AlertCircle, Settings2 } from 'lucide-react';
import { useHistoryLogger } from '@/hooks/useHistoryLogger';
import { executeNode } from '@/lib/workflow/executor';
import { FormField, Input, Checkbox, Select } from '@/components/ui/FormField';

export interface PDFToFormatToolProps {
    toolId: string;
    outputFormat: string;
    accept?: string[];
    className?: string;
}

/**
 * PDFToFormatTool Component
 * 
 * A generic component for converting PDF documents to various formats.
 * Uses WorkflowNodeExecutor to run the conversion logic.
 */
export function PDFToFormatTool({
    toolId,
    outputFormat,
    accept = ['.pdf', 'application/pdf'],
    className = ''
}: PDFToFormatToolProps) {
    const t = useTranslations('common');
    const tTool = useTranslations('toolCommon');
    const tErrors = useTranslations('errors');
    const { logToolUsage } = useHistoryLogger();

    // State
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [resultBlob, setResultBlob] = useState<Blob | null>(null);
    const [resultFilename, setResultFilename] = useState<string>('');

    // Settings state
    const [settings, setSettings] = useState<Record<string, any>>({
        subject: 'Converted Document',
        from: 'sender@example.com',
        title: '',
        author: 'pdftheory',
        pages: '',
        includePageMarkers: true,
        scale: 2,
        quality: 0.8,
        dpi: 144,
        preserveLayers: true,
        format: 'jpg',
        preserveFormatting: true,
    });

    /**
     * Handle file selected from uploader
     */
    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
            setResultBlob(null);
            setError(null);
            setProgress(0);

            // Auto-fill title for certain formats
            if (['pdf-to-epub', 'pdf-to-mobi', 'pdf-to-fb2'].includes(toolId)) {
                setSettings(prev => ({
                    ...prev,
                    title: files[0].name.replace(/\.[^/.]+$/, '')
                }));
            }
        }
    }, [toolId]);

    /**
     * Handle file upload error
     */
    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    /**
     * Parse page range string (e.g., "1, 2, 5-10") to array of numbers
     */
    const parsePages = (pagesStr: string): number[] => {
        if (!pagesStr.trim()) return [];
        const pages: number[] = [];
        const parts = pagesStr.split(',').map(p => p.trim());
        for (const part of parts) {
            if (part.includes('-')) {
                const [start, end] = part.split('-').map(Number);
                if (!isNaN(start) && !isNaN(end)) {
                    for (let i = start; i <= end; i++) pages.push(i);
                }
            } else {
                const num = Number(part);
                if (!isNaN(num)) pages.push(num);
            }
        }
        return [...new Set(pages)].sort((a, b) => a - b);
    };

    /**
     * Perform conversion
     */
    const handleConvert = useCallback(async () => {
        if (!file) return;

        setIsProcessing(true);
        setProgress(0);
        setError(null);
        setResultBlob(null);

        // Prepare final options
        const finalOptions = {
            ...settings,
            pages: parsePages(settings.pages),
            scale: Number(settings.scale),
            quality: Number(settings.quality),
            dpi: Number(settings.dpi),
        };

        try {
            const output = await executeNode({
                id: 'conversion-node',
                type: 'tool',
                position: { x: 0, y: 0 },
                data: {
                    toolId: toolId,
                    label: `Converting PDF to ${outputFormat.toUpperCase()}`,
                    icon: 'file-text',
                    category: 'convert-from-pdf',
                    acceptedFormats: ['.pdf'],
                    outputFormat: outputFormat,
                    status: 'processing',
                    progress: 0,
                    settings: finalOptions
                }
            }, [file], (prog: number, message?: string) => {
                setProgress(prog);
            });

            if (output.success && output.result) {
                const blob = Array.isArray(output.result) ? output.result[0] : output.result;
                setResultBlob(blob);
                setResultFilename(output.filename || `${file.name.replace(/\.[^/.]+$/, '')}.${outputFormat}`);
                setProgress(100);

                logToolUsage(toolId.replace(/-/g, '_'), file.name, {
                    outputFormat: outputFormat,
                    fileSize: file.size,
                    ...finalOptions
                });
            } else {
                setError(output.error?.message || tErrors('processingFailed'));
            }
        } catch (err) {
            console.error('Conversion error:', err);
            setError(err instanceof Error ? err.message : tErrors('unexpectedError'));
        } finally {
            setIsProcessing(false);
        }
    }, [file, toolId, outputFormat, logToolUsage, settings]);

    /**
     * Reset state
     */
    const handleReset = useCallback(() => {
        setFile(null);
        setResultBlob(null);
        setError(null);
        setProgress(0);
    }, []);

    const updateSetting = (key: string, value: any) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className={`space-y-6 ${className}`.trim()}>
            {/* File Uploader */}
            {!file && (
                <FileUploader
                    accept={accept}
                    multiple={false}
                    maxFiles={1}
                    onFilesSelected={handleFilesSelected}
                    onError={handleUploadError}
                    disabled={isProcessing}
                    label={tTool('uploader.uploadPdf')}
                    description={tTool('uploader.convertDescription', { format: outputFormat.toUpperCase() })}
                />
            )}

            {/* File Info */}
            {file && (
                <Card variant="outlined" className="p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                <FileText className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="font-medium text-[hsl(var(--color-foreground))]">{file.name}</p>
                                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                                    {(file.size / 1024).toFixed(2)} {tTool('uploader.units.kb')}
                                </p>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={handleReset} disabled={isProcessing}>
                            {t('buttons.clear')}
                        </Button>
                    </div>
                </Card>
            )}

            {/* Tool Options */}
            {file && !isProcessing && !resultBlob && (
                <Card variant="outlined" className="p-4 space-y-4">
                    <div className="flex items-center gap-2 mb-2 text-[hsl(var(--color-foreground))]">
                        <Settings2 className="w-4 h-4" />
                        <h3 className="font-semibold">{tTool('options.title')}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Common: Page Range */}
                        <FormField label={tTool('options.pageRange')} helpText={tTool('options.pageRangeHelp')}>
                            <Input
                                value={settings.pages}
                                onChange={e => updateSetting('pages', e.target.value)}
                                placeholder={tTool('options.pageRangePlaceholder')}
                            />
                        </FormField>

                        {/* Image based options (HEIC, PSD, CBZ, XPS, DJVU) */}
                        {['pdf-to-heic', 'pdf-to-psd', 'pdf-to-cbz', 'pdf-to-xps', 'pdf-to-djvu'].includes(toolId) && (
                            <>
                                <FormField label={tTool('options.scaleFactor')} helpText={tTool('options.scaleHelp')}>
                                    <Input
                                        type="number"
                                        min="1"
                                        max="5"
                                        step="0.5"
                                        value={settings.scale}
                                        onChange={e => updateSetting('scale', e.target.value)}
                                    />
                                </FormField>
                                {['pdf-to-heic', 'pdf-to-cbz', 'pdf-to-djvu'].includes(toolId) && (
                                    <FormField label={tTool('options.quality')}>
                                        <Input
                                            type="number"
                                            min="0.1"
                                            max="1.0"
                                            step="0.1"
                                            value={settings.quality}
                                            onChange={e => updateSetting('quality', e.target.value)}
                                        />
                                    </FormField>
                                )}
                            </>
                        )}

                        {/* RTF Specific */}
                        {toolId === 'pdf-to-rtf' && (
                            <div className="flex items-center pt-6">
                                <Checkbox
                                    label={tTool('options.preserveFormatting')}
                                    checked={settings.preserveFormatting}
                                    onChange={e => updateSetting('preserveFormatting', e.target.checked)}
                                />
                            </div>
                        )}

                        {/* PSD Specific */}
                        {toolId === 'pdf-to-psd' && (
                            <>
                                <FormField label={tTool('options.dpi')}>
                                    <Input
                                        type="number"
                                        value={settings.dpi}
                                        onChange={e => updateSetting('dpi', e.target.value)}
                                    />
                                </FormField>
                                <div className="flex items-center pt-6">
                                    <Checkbox
                                        label={tTool('options.preserveLayers')}
                                        checked={settings.preserveLayers}
                                        onChange={e => updateSetting('preserveLayers', e.target.checked)}
                                    />
                                </div>
                            </>
                        )}

                        {/* CBZ Specific */}
                        {toolId === 'pdf-to-cbz' && (
                            <FormField label={tTool('options.imageFormat')}>
                                <Select
                                    value={settings.format}
                                    onChange={e => updateSetting('format', e.target.value)}
                                >
                                    <option value="jpg">JPG</option>
                                    <option value="png">PNG</option>
                                </Select>
                            </FormField>
                        )}

                        {/* PDF to Email specific */}
                        {toolId === 'pdf-to-email' && (
                            <>
                                <FormField label={tTool('options.emailSubject')}>
                                    <Input
                                        value={settings.subject}
                                        onChange={e => updateSetting('subject', e.target.value)}
                                    />
                                </FormField>
                                <FormField label={tTool('options.senderEmail')}>
                                    <Input
                                        value={settings.from}
                                        onChange={e => updateSetting('from', e.target.value)}
                                    />
                                </FormField>
                            </>
                        )}

                        {/* E-books specific */}
                        {['pdf-to-epub', 'pdf-to-mobi', 'pdf-to-fb2'].includes(toolId) && (
                            <>
                                <FormField label={tTool('options.bookTitle')}>
                                    <Input
                                        value={settings.title}
                                        onChange={e => updateSetting('title', e.target.value)}
                                    />
                                </FormField>
                                <FormField label={tTool('options.author')}>
                                    <Input
                                        value={settings.author}
                                        onChange={e => updateSetting('author', e.target.value)}
                                    />
                                </FormField>
                            </>
                        )}

                        {/* PDF to Text specific */}
                        {toolId === 'pdf-to-txt' && (
                            <div className="flex items-center pt-6">
                                <Checkbox
                                    label={tTool('options.includePageMarkers')}
                                    checked={settings.includePageMarkers}
                                    onChange={e => updateSetting('includePageMarkers', e.target.checked)}
                                />
                            </div>
                        )}
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
                    message={progress < 100 ? t('status.processing') : t('status.complete')}
                    showPercentage
                />
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleConvert}
                    disabled={!file || isProcessing}
                    loading={isProcessing}
                >
                    <FileText className="w-4 h-4 mr-2" />
                    {isProcessing ? t('status.processing') : (resultBlob ? t('buttons.convertAgain') : `${t('buttons.process')} to ${outputFormat.toUpperCase()}`)}
                </Button>

                {resultBlob && (
                    <DownloadButton
                        file={resultBlob}
                        filename={resultFilename}
                        variant="secondary"
                        size="lg"
                    />
                )}
            </div>
        </div>
    );
}
