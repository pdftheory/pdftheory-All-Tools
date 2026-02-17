'use client';

import React, { useState, useCallback, useRef } from 'react';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ghostscriptCompressPDF, GhostscriptCompressOptions, GhostscriptQuality, GHOSTSCRIPT_QUALITY_PRESETS } from '@/lib/pdf/processors/ghostscript-compress';
import type { ProcessOutput } from '@/types/pdf';
import { useHistoryLogger } from '@/hooks/useHistoryLogger';

export interface CompressPDFToolProps {
    className?: string;
}

export function CompressPDFTool({ className = '' }: CompressPDFToolProps) {
    const { logToolUsage } = useHistoryLogger();
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<ProcessingStatus>('idle');
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState<Blob | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [outputFilename, setOutputFilename] = useState<string>('');
    const [stats, setStats] = useState<{
        originalSize: number;
        compressedSize: number;
        ratio: string;
    } | null>(null);

    // Ghostscript quality preset
    const [quality, setQuality] = useState<GhostscriptQuality>('/ebook');

    const cancelledRef = useRef(false);

    const handleProcess = useCallback(async () => {
        if (!file) return;
        cancelledRef.current = false;
        setStatus('processing');
        setProgress(0);
        setError(null);
        setResult(null);
        setStats(null);

        try {
            const options: GhostscriptCompressOptions = {
                quality,
            };

            const output: ProcessOutput = await ghostscriptCompressPDF(file, options, (prog) => {
                if (!cancelledRef.current) setProgress(prog);
            });

            if (output.success && output.result) {
                setResult(output.result as Blob);
                setOutputFilename(output.filename || file.name.replace('.pdf', '_compressed.pdf'));

                if (output.metadata) {
                    setStats({
                        originalSize: Number(output.metadata.originalSize),
                        compressedSize: Number(output.metadata.compressedSize),
                        ratio: String(output.metadata.compressionRatio)
                    });
                }

                setStatus('complete');

                // Log to dashboard history
                logToolUsage('compress_pdf', file.name, {
                    original_size: output.metadata?.originalSize,
                    compressed_size: output.metadata?.compressedSize,
                    quality,
                });
            } else {
                setError(output.error?.message || 'Compression failed.');
                setStatus('error');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
            setStatus('error');
        }
    }, [file, quality]);

    const formatSize = (bytes: number) => {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const isProcessing = status === 'processing';

    return (
        <div className={`space-y-6 ${className}`.trim()}>
            {!file && (
                <FileUploader
                    accept={['application/pdf', '.pdf']}
                    multiple={false}
                    maxFiles={1}
                    onFilesSelected={(files) => {
                        if (files.length > 0) {
                            setFile(files[0]);
                            setError(null);
                            setResult(null);
                        }
                    }}
                    onError={setError}
                    disabled={isProcessing}
                    label="Upload PDF to Compress"
                    description="Reduce file size using Ghostscript WebAssembly. Everything stays on your device."
                />
            )}

            {error && (
                <div className="p-4 rounded bg-red-50 border border-red-200 text-red-700">
                    <p className="text-sm">{error}</p>
                </div>
            )}

            {file && (
                <>
                    <Card variant="outlined">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-900">{file.name}</p>
                                <p className="text-sm text-gray-500">{formatSize(file.size)}</p>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                    setFile(null);
                                    setResult(null);
                                    setStats(null);
                                }}
                                disabled={isProcessing}
                            >
                                Change File
                            </Button>
                        </div>
                    </Card>

                    <Card variant="outlined" size="lg">
                        <h3 className="text-lg font-medium mb-4">PDF Quality Setting</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                            {(Object.entries(GHOSTSCRIPT_QUALITY_PRESETS) as [GhostscriptQuality, string][]).map(([value, label]) => (
                                <button
                                    key={value}
                                    onClick={() => setQuality(value)}
                                    disabled={isProcessing}
                                    className={`p-4 rounded-lg border-2 text-left transition-all ${quality === value
                                        ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600'
                                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <div className="font-semibold text-gray-900 mb-1">
                                        {value.replace('/', '').charAt(0).toUpperCase() + value.replace('/', '').slice(1)}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                        {label}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </Card>
                </>
            )}

            {isProcessing && (
                <ProcessingProgress
                    progress={progress}
                    status={status}
                    onCancel={() => {
                        cancelledRef.current = true;
                        setStatus('idle');
                    }}
                    showPercentage
                />
            )}

            {file && (
                <div className="flex flex-wrap items-center gap-4">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={handleProcess}
                        disabled={!file || isProcessing}
                        loading={isProcessing}
                    >
                        {isProcessing ? 'Compressing...' : 'Compress PDF'}
                    </Button>

                    {result && (
                        <DownloadButton
                            file={result}
                            filename={outputFilename}
                            variant="secondary"
                            size="lg"
                            showFileSize
                        />
                    )}
                </div>
            )}

            {status === 'complete' && stats && (
                <div className="p-6 rounded-lg bg-green-50 border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-3">Compression Result</h4>
                    <div className="flex flex-wrap gap-8">
                        <div>
                            <p className="text-sm text-green-700 uppercase tracking-wide font-medium">Original</p>
                            <p className="text-xl font-bold text-green-900">{formatSize(stats.originalSize)}</p>
                        </div>
                        <div>
                            <p className="text-sm text-green-700 uppercase tracking-wide font-medium">Compressed</p>
                            <p className="text-xl font-bold text-green-900">{formatSize(stats.compressedSize)}</p>
                        </div>
                        <div>
                            <p className="text-sm text-green-700 uppercase tracking-wide font-medium">Saved</p>
                            <p className="text-xl font-bold text-green-900">{stats.ratio}%</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
