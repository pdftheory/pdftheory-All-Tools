'use client';

console.log('DEBUG: AddMetadataTool module loading...');

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { addPDFMetadata, AddMetadataFields } from '@/lib/pdf/processors/add-metadata';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import { useHistoryLogger } from '@/hooks/useHistoryLogger';
import { FileType } from 'lucide-react';

console.log('DEBUG: AddMetadataTool imports done.');

interface MetadataFieldProps {
    label: string;
    field: keyof AddMetadataFields;
    value: string;
    onChange: (field: keyof AddMetadataFields, value: string) => void;
    placeholder?: string;
    multiline?: boolean;
    disabled?: boolean;
}

function MetadataField({
    label,
    field,
    value,
    onChange,
    placeholder,
    multiline = false,
    disabled = false,
}: MetadataFieldProps) {
    const InputComponent = multiline ? 'textarea' : 'input';

    return (
        <div className="space-y-1">
            <label
                htmlFor={`metadata-${field}`}
                className="block text-sm font-medium text-[hsl(var(--color-foreground))]"
            >
                {label}
            </label>
            <InputComponent
                id={`metadata-${field}`}
                type={multiline ? undefined : 'text'}
                value={value}
                onChange={(e) => onChange(field, e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                className={`w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] 
          bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]
          placeholder:text-[hsl(var(--color-muted-foreground))]
          focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] focus:border-transparent
          disabled:opacity-50 disabled:cursor-not-allowed
          ${multiline ? 'min-h-[80px] resize-y' : ''}`}
            />
        </div>
    );
}

export interface AddMetadataToolProps {
    className?: string;
}

export function AddMetadataTool({ className = '' }: AddMetadataToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools'); // Will use 'addMetadata' keys later
    const { logToolUsage } = useHistoryLogger();

    // State
    const [files, setFiles] = useState<File[]>([]);
    const [status, setStatus] = useState<ProcessingStatus>('idle');
    const [progress, setProgress] = useState(0);
    const [progressMessage, setProgressMessage] = useState('');
    const [resultBlob, setResultBlob] = useState<Blob | null>(null);
    const [resultFilename, setResultFilename] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    // Metadata form state
    const [metadata, setMetadata] = useState<AddMetadataFields>({
        title: '',
        author: '',
        subject: '',
        keywords: [],
        creator: '',
        producer: '',
        copyrightStatus: undefined,
        copyrightNotice: '',
    });

    const [keywordsInput, setKeywordsInput] = useState('');

    const cancelledRef = useRef(false);

    const handleFilesSelected = useCallback((selectedFiles: File[]) => {
        if (selectedFiles.length > 0) {
            setFiles(selectedFiles);
            setError(null);
            setResultBlob(null);
            setStatus('idle');
        }
    }, []);

    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    const handleClearFiles = useCallback(() => {
        setFiles([]);
        setResultBlob(null);
        setError(null);
        setStatus('idle');
        setProgress(0);
    }, []);

    const handleMetadataChange = useCallback((field: keyof AddMetadataFields, value: string) => {
        setMetadata(prev => ({
            ...prev,
            [field]: value,
        }));
    }, []);

    const handleKeywordsChange = useCallback((value: string) => {
        setKeywordsInput(value);
        // Split by comma and trim
        const keywordsArray = value.split(',').map(k => k.trim()).filter(k => k.length > 0);
        setMetadata(prev => ({
            ...prev,
            keywords: keywordsArray
        }));
    }, []);

    const handleApplyMetadata = useCallback(async () => {
        if (files.length === 0) return;

        cancelledRef.current = false;
        setStatus('processing');
        setProgress(0);
        setError(null);
        setResultBlob(null);

        try {
            const result = await addPDFMetadata(
                files,
                metadata,
                { updateModificationDate: true },
                (prog, msg) => {
                    setProgress(prog);
                    if (msg) setProgressMessage(msg);
                }
            );

            if (cancelledRef.current) {
                setStatus('idle');
                return;
            }

            if (result.success && result.result) {
                setResultBlob(result.result as Blob);
                setResultFilename(result.filename || (files.length > 1 ? 'metadata_processed.zip' : 'metadata_processed.pdf'));
                setStatus('complete');

                // Log for each file
                files.forEach(file => {
                    logToolUsage('add_metadata', file.name, {
                        fileSize: file.size
                    });
                });

            } else {
                setError(result.error?.message || 'Failed to add metadata.');
                setStatus('error');
            }
        } catch (err) {
            if (!cancelledRef.current) {
                console.error('Failed to add metadata:', err);
                setError(err instanceof Error ? err.message : 'Failed to add metadata.');
                setStatus('error');
            }
        }
    }, [files, metadata, logToolUsage]);

    const handleCancel = useCallback(() => {
        cancelledRef.current = true;
        setStatus('idle');
        setProgress(0);
    }, []);

    const isProcessing = status === 'processing' || status === 'uploading';


    return (
        <div className={`space-y-6 ${className}`.trim()}>
            {!files.length && (
                <FileUploader
                    accept={['application/pdf', '.pdf']}
                    multiple={true}
                    maxFiles={100}
                    onFilesSelected={handleFilesSelected}
                    onError={handleUploadError}
                    disabled={isProcessing}
                    label="Upload PDF Files" // Fallback label, should be tTools('addMetadata.uploadLabel')
                    description="Drag and drop PDF files here to add metadata to all of them at once."
                />
            )}

            {error && (
                <div className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700" role="alert">
                    <p className="text-sm">{error}</p>
                </div>
            )}

            {files.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column: File List */}
                    <div className="lg:col-span-1 space-y-4 order-2 lg:order-1">
                        <Card variant="outlined" className="h-full">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-medium text-[hsl(var(--color-foreground))]">
                                    Selected Files ({files.length})
                                </h3>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleClearFiles}
                                    disabled={isProcessing}
                                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                >
                                    Clear All
                                </Button>
                            </div>
                            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                {files.map((file, idx) => (
                                    <div key={`${file.name}-${idx}`} className="flex items-center gap-3 p-2 rounded-md bg-gray-50 border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                                        <div className="flex-shrink-0 text-red-500">
                                            <FileType size={20} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-medium truncate text-[hsl(var(--color-foreground))]">{file.name}</p>
                                            <p className="text-xs text-[hsl(var(--color-muted-foreground))]">{(file.size / 1024).toFixed(1)} KB</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Right Column: Metadata Form */}
                    <div className="lg:col-span-2 space-y-6 order-1 lg:order-2">
                        <Card variant="outlined" size="lg">
                            <div className="mb-6">
                                <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))]">
                                    Metadata to Add
                                </h3>
                                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                                    This metadata will be applied to ALL selected files.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <MetadataField
                                    label="Title"
                                    field="title"
                                    value={metadata.title || ''}
                                    onChange={handleMetadataChange}
                                    placeholder="Document Title"
                                    disabled={isProcessing}
                                />
                                <MetadataField
                                    label="Author"
                                    field="author"
                                    value={metadata.author || ''}
                                    onChange={handleMetadataChange}
                                    placeholder="Author Name"
                                    disabled={isProcessing}
                                />
                                <MetadataField
                                    label="Subject"
                                    field="subject"
                                    value={metadata.subject || ''}
                                    onChange={handleMetadataChange}
                                    placeholder="Document Subject"
                                    disabled={isProcessing}
                                />
                                <MetadataField
                                    label="Creator Application"
                                    field="creator"
                                    value={metadata.creator || ''}
                                    onChange={handleMetadataChange}
                                    placeholder="Creator Application"
                                    disabled={isProcessing}
                                />
                                <MetadataField
                                    label="PDF Producer"
                                    field="producer"
                                    value={metadata.producer || ''}
                                    onChange={handleMetadataChange}
                                    placeholder="PDF Producer"
                                    disabled={isProcessing}
                                />

                                {/* Keywords Handler */}
                                <div className="space-y-1">
                                    <label htmlFor="metadata-keywords" className="block text-sm font-medium text-[hsl(var(--color-foreground))]">
                                        Keywords
                                    </label>
                                    <textarea
                                        id="metadata-keywords"
                                        value={keywordsInput}
                                        onChange={(e) => handleKeywordsChange(e.target.value)}
                                        placeholder="Enter keywords separated by commas (e.g. finance, report, 2024)"
                                        disabled={isProcessing}
                                        className="w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] 
                        bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]
                        placeholder:text-[hsl(var(--color-muted-foreground))]
                        focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] focus:border-transparent
                        disabled:opacity-50 disabled:cursor-not-allowed min-h-[80px] resize-y"
                                    />
                                </div>

                            </div>

                            {isProcessing && (
                                <div className="mt-6">
                                    <ProcessingProgress
                                        progress={progress}
                                        status={status}
                                        message={progressMessage}
                                        onCancel={handleCancel}
                                        showPercentage
                                    />
                                </div>
                            )}

                            {status === 'complete' && resultBlob && (
                                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <div className="text-green-800 font-medium">
                                            Success! {files.length} file(s) processed.
                                        </div>
                                        <div className="flex gap-3">
                                            <DownloadButton
                                                file={resultBlob}
                                                filename={resultFilename}
                                                variant="primary"
                                                size="lg"
                                                label="Download Result"
                                            />
                                            <Button variant="outline" onClick={handleClearFiles}>
                                                Start Over
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {!isProcessing && status !== 'complete' && (
                                <div className="mt-6 pt-4 border-t border-[hsl(var(--color-border))] flex justify-end">
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        onClick={handleApplyMetadata}
                                        disabled={files.length === 0}
                                        className="w-full sm:w-auto"
                                    >
                                        Apply Metadata to {files.length} File{files.length !== 1 ? 's' : ''}
                                    </Button>
                                </div>
                            )}
                        </Card>
                    </div>
                </div>
            )}
        </div>
    );
}
