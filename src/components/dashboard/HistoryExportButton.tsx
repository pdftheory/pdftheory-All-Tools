'use client';

import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { HistoryService } from '@/lib/services/history';
import { useTranslations } from 'next-intl';

interface HistoryExportButtonProps {
    userId: string;
}

export const HistoryExportButton = ({ userId }: HistoryExportButtonProps) => {
    const t = useTranslations('dashboard.history.export');
    const [exporting, setExporting] = useState(false);

    const handleExport = async () => {
        try {
            setExporting(true);
            const { success, data } = await HistoryService.getUserHistory(userId, 1000);

            if (!success || !data || data.length === 0) {
                alert(t('noData'));
                return;
            }

            // Simple CSV conversion
            const headers = [t('headers.action'), t('headers.file'), t('headers.date'), t('headers.metadata')];
            const rows = data.map(item => [
                item.action_type,
                item.file_name,
                item.created_at,
                JSON.stringify(item.metadata || {})
            ]);

            const csvContent = [
                headers.join(','),
                ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
            ].join('\n');

            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `pdfcraft_activity_history_${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Export error:', error);
            alert(t('error'));
        } finally {
            setExporting(false);
        }
    };

    return (
        <button
            onClick={handleExport}
            disabled={exporting}
            className="flex items-center gap-3 px-6 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-2xl font-bold text-sm hover:bg-gray-900 hover:text-white transition-all shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group mr-6"
        >
            {exporting ? (
                <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="uppercase tracking-widest">{t('preparing')}</span>
                </>
            ) : (
                <>
                    <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                    <span className="uppercase tracking-widest">{t('button')}</span>
                </>
            )}
        </button>
    );
};
