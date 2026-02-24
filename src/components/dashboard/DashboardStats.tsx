'use client';

import React, { useEffect, useState } from 'react';
import { FileCheck, Clock, Zap, TrendingUp, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useAuth } from '@/components/providers/AuthProvider';
import { HistoryService, HistoryItem } from '@/lib/services/history';

interface StatsData {
    totalProcessed: number;
    toolsUsed: number;
    timeSaved: string;
}

export const DashboardStats = () => {
    const t = useTranslations('dashboard');
    const { user } = useAuth();
    const [stats, setStats] = useState<StatsData>({ totalProcessed: 0, toolsUsed: 0, timeSaved: '0m' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            if (!user) {
                setLoading(false);
                return;
            }
            setLoading(true);
            const { success, data } = await HistoryService.getUserHistory((user as any).id, 200);
            if (success && data) {
                const uniqueTools = new Set(data.map((item: HistoryItem) => item.action_type));
                // Estimate ~30 seconds saved per PDF action
                const totalSecondsSaved = data.length * 45; // Bumped estimation slightly
                const minutes = Math.floor(totalSecondsSaved / 60);
                const timeSavedStr = minutes >= 60 ? `${Math.floor(minutes / 60)}h ${minutes % 60}m` : `${minutes}m`;

                setStats({
                    totalProcessed: data.length,
                    toolsUsed: uniqueTools.size,
                    timeSaved: timeSavedStr,
                });
            }
            setLoading(false);
        };

        fetchStats();
    }, [user]);

    const statCards = [
        {
            label: t('stats.totalProcessed'),
            value: stats.totalProcessed.toLocaleString(),
            icon: FileCheck,
            colorClass: 'text-blue-600',
            bgClass: 'bg-blue-50/50',
            borderClass: 'border-blue-100',
            description: t('stats.processedDesc')
        },
        {
            label: t('stats.toolsUsed'),
            value: stats.toolsUsed.toLocaleString(),
            icon: Zap,
            colorClass: 'text-purple-600',
            bgClass: 'bg-purple-50/50',
            borderClass: 'border-purple-100',
            description: t('stats.toolsDesc')
        },
        {
            label: t('stats.timeSaved'),
            value: stats.timeSaved,
            icon: Clock,
            colorClass: 'text-emerald-600',
            bgClass: 'bg-emerald-50/50',
            borderClass: 'border-emerald-100',
            description: t('stats.savingsDesc', { brand: 'PDFTheory' })
        },
    ];

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm animate-pulse">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-gray-100" />
                            <div className="flex-1 space-y-2">
                                <div className="h-4 bg-gray-100 rounded w-1/2" />
                                <div className="h-8 bg-gray-100 rounded w-3/4" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {statCards.map((card) => (
                <div
                    key={card.label}
                    className={`bg-white p-8 rounded-2xl border ${card.borderClass} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
                >
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-bold text-gray-500 mb-1 uppercase tracking-wider">{card.label}</p>
                            <h3 className="text-4xl font-black text-gray-900 mb-2">{card.value}</h3>
                            <p className="text-xs text-gray-400 font-medium">{card.description}</p>
                        </div>
                        <div className={`w-14 h-14 rounded-2xl ${card.bgClass} ${card.colorClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <card.icon className="w-8 h-8" />
                        </div>
                    </div>

                    {/* Subtle progress-like bar at bottom */}
                    <div className="mt-6 w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
                        <div className={`h-full ${card.colorClass.replace('text', 'bg')} opacity-40 w-full`} />
                    </div>
                </div>
            ))}
        </div>
    );
};
