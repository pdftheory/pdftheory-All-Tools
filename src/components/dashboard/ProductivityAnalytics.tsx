'use client';

import React from 'react';
import { TrendingUp, Globe, Zap, Clock, ShieldCheck, BarChart3 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const ProductivityAnalytics = () => {
    const t = useTranslations('dashboard.analytics');

    const chartData = [
        { day: 'M', value: 45 },
        { day: 'T', value: 72 },
        { day: 'W', value: 38 },
        { day: 'T', value: 85 },
        { day: 'F', value: 65 },
        { day: 'S', value: 25 },
        { day: 'S', value: 15 },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Weekly Performance */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm group">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[hsl(var(--color-primary))] transition-colors">{t('weeklySavings.title')}</h3>
                        <p className="text-sm text-gray-400 font-medium">{t('weeklySavings.subtitle')}</p>
                    </div>
                    <div className="p-3 bg-blue-50 text-[hsl(var(--color-primary))] rounded-2xl group-hover:scale-110 transition-transform">
                        <BarChart3 className="w-5 h-5" />
                    </div>
                </div>

                <div className="flex items-end justify-between gap-2 h-32 mb-8">
                    {chartData.map((data, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-3">
                            <div
                                className="w-full bg-gray-50 rounded-lg group-hover:bg-blue-50/50 transition-colors relative overflow-hidden"
                                style={{ '--height': `${data.value}%` } as React.CSSProperties}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--color-primary))] to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{data.day}</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-500 shadow-sm">
                        <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs font-black text-emerald-600 uppercase tracking-widest">{t('improvement')}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">{t('versus')}</p>
                    </div>
                </div>
            </div>

            {/* System Status / Cloud Workspace */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-gray-900 text-white rounded-lg">
                            <Globe className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{t('cloud.title')}</h3>
                    </div>
                    <p className="text-sm text-gray-400 font-medium mb-8">
                        {t('cloud.subtitle')}
                    </p>

                    <div className="space-y-6">
                        {[
                            { label: t('cloud.uptime'), value: '99.98%', icon: ShieldCheck, color: 'text-emerald-500' },
                            { label: t('cloud.latency'), value: '24ms', icon: Zap, color: 'text-amber-500' },
                            { label: t('cloud.successRate'), value: '100%', icon: TrendingUp, color: 'text-blue-500' },
                        ].map((stat, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</span>
                                </div>
                                <span className="text-sm font-bold text-gray-900 font-mono">{stat.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">WASM ENGINE: OPTIMIZED</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
