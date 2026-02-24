'use client';

import React, { useEffect, useState } from 'react';
import { HistoryService, HistoryItem } from '@/lib/services/history';
import {
    FileText,
    Search,
    Filter,
    MoreHorizontal,
    CheckCircle2,
    Loader2,
    ArrowRight
} from 'lucide-react';
import { getToolIcon } from '@/config/icons';
import { useTranslations } from 'next-intl';
import { useAuth } from '@/components/providers/AuthProvider';

export const HistoryTable = () => {
    const t = useTranslations('dashboard.history');
    const { user } = useAuth();
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchHistory = async () => {
            if (!user) {
                setLoading(false);
                return;
            }
            setLoading(true);
            const { success, data } = await HistoryService.getUserHistory((user as any).id, 50);
            if (success && data) {
                setHistory(data);
            }
            setLoading(false);
        };

        fetchHistory();
    }, [user]);

    const filteredHistory = history.filter(item =>
        item.file_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return (
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-20 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
                    <Loader2 className="w-8 h-8 animate-spin text-[hsl(var(--color-primary))]" />
                </div>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">{t('loading')}</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Filters Bar */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative group">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[hsl(var(--color-primary))] transition-colors" />
                    <input
                        type="text"
                        placeholder={t('searchPlaceholder')}
                        className="w-full pl-14 pr-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[hsl(var(--color-primary))/5] transition-all font-medium text-gray-900"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-3 px-6 py-4 bg-white border border-gray-100 rounded-2xl text-gray-500 font-bold text-sm hover:bg-gray-50 transition-all shadow-sm" aria-label={t('filterAria')}>
                        <Filter className="w-4 h-4" />
                        {t('filterAll')}
                    </button>
                    <button className="flex items-center gap-2 px-6 py-4 bg-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-black transition-all shadow-lg active:scale-95">
                        {t('advancedFilters')}
                    </button>
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">{t('table.details')}</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">{t('table.task')}</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">{t('table.timeline')}</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">{t('table.execution')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredHistory.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-8 py-20 text-center">
                                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <FileText className="w-8 h-8 text-gray-200" />
                                        </div>
                                        <p className="text-gray-400 font-bold">{t('table.noResults')}</p>
                                    </td>
                                </tr>
                            ) : (
                                filteredHistory.map((item) => {
                                    const ToolIcon = getToolIcon(item.action_type);
                                    return (
                                        <tr key={item.id} className="hover:bg-gray-50/50 transition-colors group/row">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover/row:bg-white group-hover/row:shadow-sm transition-all duration-300">
                                                        <ToolIcon className="w-6 h-6" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="font-bold text-gray-900 truncate max-w-[240px] mb-0.5">{item.file_name}</p>
                                                        <span className="text-[10px] text-gray-400 font-bold uppercase">#PRO-LOG-{item.id.slice(0, 8)}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg group-hover/row:bg-white transition-colors">
                                                    <span className="text-[10px] font-black uppercase tracking-widest">{item.action_type.replace(/_/g, ' ')}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <p className="font-bold text-gray-900 text-sm mb-0.5">
                                                    {new Date(item.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </p>
                                                <p className="text-[10px] text-gray-400 font-bold uppercase">
                                                    {new Date(item.created_at).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                                                </p>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <div className="flex items-center justify-end gap-4">
                                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg">
                                                        <CheckCircle2 className="w-3 h-3" />
                                                        <span className="text-[10px] font-black uppercase tracking-widest">{t('table.status.verified')}</span>
                                                    </div>
                                                    <button className="p-2 text-gray-300 hover:text-gray-900 transition-colors" title={t('table.moreOptions')}>
                                                        <MoreHorizontal className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Placeholder */}
                <div className="p-6 border-t border-gray-50 bg-gray-50/30 flex items-center justify-between">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        {t('table.pagination.info', { count: filteredHistory.length, total: history.length })}
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="px-4 py-2 border border-gray-100 rounded-xl text-[10px] font-black text-gray-400 uppercase tracking-widest bg-white opacity-50 cursor-not-allowed">
                            {t('table.pagination.prev')}
                        </button>
                        <button className="px-4 py-2 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-md active:scale-95">
                            {t('table.pagination.next')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
