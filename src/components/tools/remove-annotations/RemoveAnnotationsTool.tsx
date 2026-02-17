'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Plus } from 'lucide-react';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { removeAnnotations } from '@/lib/pdf/processors/remove-annotations';
import { packagePDFsToZip } from '@/lib/pdf/processors/pdf-to-zip';
import type { ProcessOutput, UploadedFile } from '@/types/pdf';
import { useHistoryLogger } from '@/hooks/useHistoryLogger';

/**
 * Generate a unique ID for files
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export interface RemoveAnnotationsToolProps { className?: string; }

export function RemoveAnnotationsTool({ className = '' }: RemoveAnnotationsToolProps) {
  const t = useTranslations('removeAnnotations');
  const commonT = useTranslations('common');
  const { logToolUsage } = useHistoryLogger();

  // State
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [results, setResults] = useState<{ blob: Blob; filename: string }[]>([]);
  const [zipResult, setZipResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  const cancelledRef = useRef(false);
  const addFilesInputRef = useRef<HTMLInputElement>(null);

  const [options, setOptions] = useState({
    removeComments: true,
    removeHighlights: true,
    removeLinks: false,
    removeShapes: false,
    removeImages: false,
    removeForms: false,
    removeJS: false,
    removeMetadata: false,
    removeBookmarks: false,
    removeRedactions: false,
    removeUnderline: false,
    removeStrikeOut: false,
    removeSquiggly: false,
    removeDrawings: false,
  });

  const toggleOption = (key: keyof typeof options) => {
    setOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFilesSelected = useCallback((newFiles: File[]) => {
    const uploadedFiles: UploadedFile[] = newFiles.map(file => ({
      id: generateId(),
      file,
      status: 'pending' as const,
    }));

    setFiles(prev => [...prev, ...uploadedFiles]);
    setError(null);
    setResults([]);
    setZipResult(null);
  }, []);

  const handleAddFilesClick = () => {
    addFilesInputRef.current?.click();
  };

  const handleAddFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFilesSelected(Array.from(e.target.files));
    }
    // Reset to allow selecting same files
    e.target.value = '';
  };

  const handleRemoveFile = useCallback((id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
    setResults([]);
    setZipResult(null);
  }, []);

  const handleClearAll = useCallback(() => {
    setFiles([]);
    setResults([]);
    setZipResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
  }, []);

  const handleProcess = useCallback(async () => {
    if (files.length === 0) return;
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResults([]);
    setZipResult(null);

    const processedResults: { blob: Blob; filename: string }[] = [];
    const totalFiles = files.length;

    try {
      for (let i = 0; i < totalFiles; i++) {
        if (cancelledRef.current) break;

        const currentFile = files[i].file;
        const fileBaseName = currentFile.name.replace('.pdf', '');

        // Update individual file status if we had more granular tracking, 
        // but for now we'll just update global progress
        const baseProgress = (i / totalFiles) * 100;

        const output: ProcessOutput = await removeAnnotations(
          currentFile,
          { ...options, pages: 'all' },
          (fileProg) => {
            if (!cancelledRef.current) {
              const totalProg = baseProgress + (fileProg / totalFiles);
              setProgress(Math.round(totalProg));
              setProgressMessage(`Cleaning ${currentFile.name} (${i + 1}/${totalFiles})...`);
            }
          }
        );

        if (output.success && output.result) {
          processedResults.push({
            blob: output.result as Blob,
            filename: `${fileBaseName}_cleaned.pdf`
          });

          logToolUsage('remove-annotations', currentFile.name, {
            fileSize: currentFile.size,
            batchSize: totalFiles,
            ...options
          });
        } else {
          throw new Error(output.error?.message || `Failed to process ${currentFile.name}`);
        }
      }

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      setResults(processedResults);

      // If multiple files, create a ZIP
      if (processedResults.length > 1) {
        setProgress(95);
        setProgressMessage('Creating ZIP archive...');

        const zipOutput = await packagePDFsToZip(
          processedResults.map(r => new File([r.blob], r.filename, { type: 'application/pdf' })),
          { outputFilename: 'cleaned_pdfs.zip' }
        );

        if (zipOutput.success && zipOutput.result) {
          setZipResult(zipOutput.result as Blob);
        }
      }

      setProgress(100);
      setStatus('complete');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setStatus('error');
    }
  }, [files, options, logToolUsage]);

  const isProcessing = status === 'processing';
  const optionKeys = Object.keys(options) as Array<keyof typeof options>;

  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      <FileUploader
        accept={['application/pdf', '.pdf']}
        multiple={true}
        maxFiles={100}
        onFilesSelected={handleFilesSelected}
        onError={setError}
        disabled={isProcessing}
        label={t('uploadLabel')}
        description={t('uploadDescription')}
      />

      {error && (
        <div className="p-4 rounded bg-red-50 border border-red-200 text-red-700">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {files.length > 0 && (
        <>
          <Card variant="outlined" size="lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))]">
                  Selected Files ({files.length})
                </h3>
                <button
                  type="button"
                  onClick={handleAddFilesClick}
                  disabled={isProcessing}
                  className="p-1 rounded-full bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary)/0.2)] transition-colors disabled:opacity-50"
                  title="Add more PDFs"
                >
                  <Plus className="w-5 h-5" />
                </button>
                <input
                  ref={addFilesInputRef}
                  type="file"
                  accept=".pdf,application/pdf"
                  multiple
                  aria-label="Add more PDFs"
                  title="Add more PDFs"
                  onChange={handleAddFilesChange}
                  className="hidden"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearAll}
                disabled={isProcessing}
              >
                {commonT('buttons.clearAll') || 'Clear All'}
              </Button>
            </div>

            <ul className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {files.map((file, index) => (
                <li
                  key={file.id}
                  className="flex items-center gap-3 p-3 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-muted)/0.3)]"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--color-primary))] text-[hsl(var(--color-primary-foreground))] text-xs font-medium flex items-center justify-center">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[hsl(var(--color-foreground))] truncate">
                      {file.file.name}
                    </p>
                    <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                      {formatSize(file.file.size)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(file.id)}
                    disabled={isProcessing}
                    className="flex-shrink-0 p-1 rounded hover:bg-red-100 text-[hsl(var(--color-muted-foreground))] hover:text-red-600 disabled:opacity-30"
                    aria-label={`Remove ${file.file.name}`}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="outlined" size="lg">
            <h3 className="text-lg font-medium mb-4">{t('optionsTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {optionKeys.map((key) => (
                <label key={key} className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors border border-transparent hover:border-gray-100">
                  <input
                    type="checkbox"
                    checked={options[key]}
                    onChange={() => toggleOption(key)}
                    disabled={isProcessing}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700 font-medium">{t(key)}</span>
                </label>
              ))}
            </div>
          </Card>
        </>
      )}

      {isProcessing && (
        <ProcessingProgress
          progress={progress}
          status={status}
          message={progressMessage}
          onCancel={() => { cancelledRef.current = true; setStatus('idle'); }}
          showPercentage
        />
      )}

      {files.length > 0 && (
        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={handleProcess}
            disabled={isProcessing}
            loading={isProcessing}
          >
            {isProcessing ? 'Processing...' : t('removeButton')}
          </Button>

          {status === 'complete' && results.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              {zipResult && (
                <DownloadButton
                  file={zipResult}
                  filename="cleaned_pdfs.zip"
                  variant="secondary"
                  size="lg"
                  showFileSize
                  label="Download All (ZIP)"
                />
              )}
              {results.length === 1 && (
                <DownloadButton
                  file={results[0].blob}
                  filename={results[0].filename}
                  variant="secondary"
                  size="lg"
                  showFileSize
                />
              )}
            </div>
          )}
        </div>
      )}

      {status === 'complete' && results.length > 0 && (
        <div className="p-4 rounded bg-green-50 border border-green-200 text-green-700">
          <p className="text-sm font-medium">
            {results.length} {results.length === 1 ? 'file' : 'files'} processed successfully!
          </p>
        </div>
      )}
    </div>
  );
}

export default RemoveAnnotationsTool;
