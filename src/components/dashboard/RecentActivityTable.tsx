'use client';

import React, { useEffect, useState } from 'react';
import { HistoryService, HistoryItem } from '@/lib/services/history';
import {
    FileText,
    Loader2,
    ArrowRight,
    Clock,
    CheckCircle2,
    Zap
} from 'lucide-react';
import { getToolIcon } from '@/config/icons';
import Link from 'next/link';
import { useAuth } from '@/components/providers/AuthProvider';

export const RecentActivityTable = () => {
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
            const { success, data } = await HistoryService.getUserHistory((user as any).id, 8);
            if (success && data) {
                setHistory(data);
            }
            setLoading(false);
        };

        fetchHistory();
    }, [user]);

    if (loading) {
        return (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 flex justify-center items-center shadow-sm">
                <Loader2 className="w-8 h-8 animate-spin text-[hsl(var(--color-primary))]" />
            </div>
        );
    }

    if (history.length === 0) {
        return (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-10 h-10 text-[hsl(var(--color-primary))]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No activity recorded</h3>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto leading-relaxed">Your professional PDF journey starts here. Process a file and track its history with ease.</p>
                <Link
                    href="/en/tools"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[hsl(var(--color-primary))] text-white font-bold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-md"
                >
                    Explore 99+ Tools
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        );
    }

    const formatTimeAgo = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;
        return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">LATEST LOGS</p>
                </div>
                <Link
                    href="/en/dashboard/history"
                    className="group text-sm text-[hsl(var(--color-primary))] font-bold hover:underline flex items-center gap-1.5"
                >
                    Management Hub
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
            <div className="divide-y divide-gray-50">
                {history.slice(0, 5).map((item) => {
                    const ToolIcon = getToolIcon(item.action_type);
                    return (
                        <div key={item.id} className="px-8 py-5 flex items-center gap-5 hover:bg-gray-50/50 transition-colors group">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[hsl(var(--color-primary))] group-hover:text-white transition-all duration-300 shadow-sm">
                                    <ToolIcon className="w-6 h-6" />
                                </div>
                                <div className="absolute -bottom-1 -right-1">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 bg-white rounded-full p-0.5 shadow-sm" />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-bold text-gray-900 truncate group-hover:text-[hsl(var(--color-primary))] transition-colors">
                                    {item.file_name}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                                        {item.action_type.replace(/_/g, ' ')}
                                    </span>
                                    <span className="text-xs text-gray-300">•</span>
                                    <span className="text-xs text-gray-400 flex items-center gap-1 font-medium">
                                        <Clock className="w-3 h-3" />
                                        {formatTimeAgo(item.created_at)}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1.5">
                                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                                    Completed
                                </span>
                                {item.metadata?.fileSize && (
                                    <span className="text-[10px] text-gray-400 font-medium">
                                        {(item.metadata.fileSize / 1024 / 1024).toFixed(2)} MB
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
