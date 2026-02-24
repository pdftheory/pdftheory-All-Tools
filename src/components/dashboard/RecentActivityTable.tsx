'use client';

import React, { useEffect, useState } from 'react';
import { HistoryService, HistoryItem } from '@/lib/services/history';
import {
    FileText,
    Loader2,
    ArrowRight,
    LayoutGrid
} from 'lucide-react';
import { getToolIcon } from '@/config/icons';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useAuth } from '@/components/providers/AuthProvider';

export const RecentActivityTable = ({ locale }: { locale: string }) => {
    const t = useTranslations('dashboard.recentActivity');
    const { user } = useAuth();
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistory = async () => {
            if (!user) {
                setLoading(false);
                return;
            }
            setLoading(true);
            const { success, data } = await HistoryService.getUserHistory((user as any).id, 5);
            if (success && data) {
                setHistory(data);
            }
            setLoading(false);
        };

        fetchHistory();
    }, [user]);

    const getTimeAgo = (dateString: string) => {
        const now = new Date();
        const past = new Date(dateString);
        const diffInMs = now.getTime() - past.getTime();
        const diffInMins = Math.floor(diffInMs / (1000 * 60));
        const diffInHours = Math.floor(diffInMins / 60);
        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInMins < 1) return t('timeAgo.justNow');
        if (diffInMins < 60) return t('timeAgo.mins', { count: diffInMins });
        if (diffInHours < 24) return t('timeAgo.hours', { count: diffInHours });
        return t('timeAgo.days', { count: diffInDays });
    };

    if (loading) {
        return (
            <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-center py-10">
                    <Loader2 className="w-8 h-8 animate-spin text-gray-200" />
                </div>
            </div>
        );
    }

    return (
        <section className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden group">
            <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{t('title')}</h2>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t('logsSection')}</p>
                </div>
                <Link
                    href={`/${locale}/dashboard/history`}
                    className="p-3 bg-gray-50 text-gray-400 rounded-2xl hover:bg-[hsl(var(--color-primary))] hover:text-white transition-all duration-300"
                    title={t('mgmtHub')}
                >
                    <LayoutGrid className="w-5 h-5" />
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <tbody className="divide-y divide-gray-50">
                        {history.length === 0 ? (
                            <tr>
                                <td className="px-8 py-20 text-center">
                                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <FileText className="w-8 h-8 text-gray-200" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('noActivity')}</h3>
                                    <p className="text-sm text-gray-400 max-w-[280px] mx-auto mb-8 leading-relaxed">
                                        {t('noActivityDesc')}
                                    </p>
                                    <Link
                                        href={`/${locale}/tools`}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-xs font-bold rounded-xl hover:bg-black transition-all uppercase tracking-widest"
                                    >
                                        {t('exploreTools')}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </td>
                            </tr>
                        ) : (
                            history.map((item) => {
                                const ToolIcon = getToolIcon(item.action_type);
                                return (
                                    <tr key={item.id} className="hover:bg-gray-50/50 transition-colors group/row">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover/row:bg-white group-hover/row:shadow-sm transition-all duration-300">
                                                    <ToolIcon className="w-6 h-6" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="font-bold text-gray-900 truncate max-w-[200px] mb-0.5">{item.file_name}</p>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[10px] font-black text-[hsl(var(--color-primary))] uppercase tracking-widest">
                                                            {item.action_type.replace(/_/g, ' ')}
                                                        </span>
                                                        <span className="w-1 h-1 rounded-full bg-gray-200" />
                                                        <span className="text-[10px] text-gray-400 font-bold uppercase">{getTimeAgo(item.created_at)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                <span className="text-[10px] font-black uppercase tracking-widest">{t('status.completed')}</span>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
