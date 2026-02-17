'use client';

import React from 'react';
import { TrendingUp, Clock, Zap, Target } from 'lucide-react';

export const ProductivityAnalytics = () => {
    return (
        <div className="mt-10">
            <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Efficiency Analytics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Time Saved Chart Placeholder */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Weekly Savings</h3>
                            <p className="text-sm text-gray-400 font-medium leading-relaxed">Cumulative hours saved through automations.</p>
                        </div>
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                    </div>

                    <div className="flex items-end gap-2 h-32 mb-6">
                        {['h-[40%]', 'h-[65%]', 'h-[45%]', 'h-[90%]', 'h-[75%]', 'h-[55%]', 'h-[85%]'].map((heightClass, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                <div
                                    className={`w-full rounded-t-lg transition-all duration-500 group-hover:scale-y-105 ${i === 3 ? 'bg-[hsl(var(--color-primary))]' : 'bg-gray-100 group-hover:bg-gray-200'} ${heightClass}`}
                                />
                                <span className="text-[8px] font-black text-gray-400 uppercase tracking-tighter">
                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 pt-6 border-t border-gray-50">
                        <span className="text-xs font-black text-[hsl(var(--color-primary))]">+24% IMPROVEMENT</span>
                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-tight ml-auto">Versus last 7 days</span>
                    </div>
                </div>

                {/* Workspace Health */}
                <div className="bg-gray-900 p-8 rounded-[2.5rem] shadow-xl shadow-gray-200 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--color-primary))] opacity-[0.03] rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />

                    <div className="flex items-center justify-between mb-8 relative z-10">
                        <div>
                            <h3 className="text-xl font-bold text-white">Cloud Workspace</h3>
                            <p className="text-sm text-gray-400 font-medium leading-relaxed">Real-time processing status across nodes.</p>
                        </div>
                        <div className="p-3 bg-white/5 text-[hsl(var(--color-primary))] rounded-2xl">
                            <Zap className="w-5 h-5 fill-[hsl(var(--color-primary))]" />
                        </div>
                    </div>

                    <div className="space-y-6 relative z-10">
                        {[
                            { label: 'Uptime', value: '99.99%', icon: Clock, color: 'text-emerald-400' },
                            { label: 'Latency', value: '45ms', icon: Zap, color: 'text-amber-400' },
                            { label: 'Success Rate', value: '100%', icon: Target, color: 'text-[hsl(var(--color-primary))]' }
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all cursor-default">
                                <div className="flex items-center gap-3">
                                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                                    <span className="text-sm font-bold text-gray-300">{stat.label}</span>
                                </div>
                                <span className="text-sm font-black text-white">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
