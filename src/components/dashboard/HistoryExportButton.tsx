'use client';

import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { HistoryService } from '@/lib/services/history';

interface HistoryExportButtonProps {
    userId: string;
}

export const HistoryExportButton = ({ userId }: HistoryExportButtonProps) => {
    const [isExporting, setIsExporting] = useState(false);

    const handleExport = async () => {
        if (isExporting) return;

        setIsExporting(true);
        try {
            // Fetch a larger set for export (e.g., last 1000 items)
            const { success, data, error } = await HistoryService.getUserHistory(userId, 1000);

            if (!success || !data || data.length === 0) {
                console.error('Export failed: No data found or error occurred', error);
                alert('No activity data found to export.');
                setIsExporting(false);
                return;
            }

            // Convert to CSV
            const headers = ['Action Type', 'File Name', 'Created At', 'Metadata'];
            const rows = data.map(item => [
                item.action_type,
                item.file_name,
                new Date(item.created_at).toLocaleString(),
                JSON.stringify(item.metadata).replace(/"/g, '""') // Escape quotes for CSV
            ]);

            const csvContent = [
                headers.join(','),
                ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
            ].join('\n');

            // Trigger download
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            const date = new Date().toISOString().split('T')[0];

            link.setAttribute('href', url);
            link.setAttribute('download', `pdftheory-activity-${date}.csv`);
            link.style.visibility = 'hidden';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            URL.revokeObjectURL(url);
        } catch (err) {
            console.error('Export error:', err);
            alert('An error occurred while exporting your data.');
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <button
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center gap-2 px-6 py-3.5 bg-white border border-gray-100 text-sm font-black text-gray-600 rounded-2xl hover:bg-gray-50 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {isExporting ? (
                <Loader2 className="w-4 h-4 animate-spin text-[hsl(var(--color-primary))]" />
            ) : (
                <Download className="w-4 h-4" />
            )}
            {isExporting ? 'PREPARING...' : 'EXPORT DATA'}
        </button>
    );
};
