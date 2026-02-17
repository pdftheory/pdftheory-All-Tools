'use client';

import React, { useEffect, useState } from 'react';
import { HistoryService, HistoryItem } from '@/lib/services/history';
import {
    FileText,
    Loader2,
    Clock,
    Search,
    Filter,
    Download,
    Trash2,
    MoreVertical,
    ArrowUpDown,
    CheckCircle2,
    Calendar,
    AlertCircle
} from 'lucide-react';
import { getToolIcon } from '@/config/icons';
import { useAuth } from '@/components/providers/AuthProvider';

export const HistoryTable = () => {
    const { user } = useAuth();
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [filteredHistory, setFilteredHistory] = useState<HistoryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');

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
                setFilteredHistory(data);
            }
            setLoading(false);
        };

        fetchHistory();
    }, [user]);

    useEffect(() => {
        const filtered = history.filter(item => {
            const matchesSearch = item.file_name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = filterType === 'all' || item.action_type === filterType;
            return matchesSearch && matchesFilter;
        });
        setFilteredHistory(filtered);
    }, [searchTerm, filterType, history]);

    const formatDateTime = (dateString: string) => {
        const date = new Date(dateString);
        return {
            date: date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }),
            time: date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
        };
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <div className="relative">
                    <div className="w-16 h-16 rounded-full border-4 border-gray-50 border-t-[hsl(var(--color-primary))] animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-gray-200" />
                    </div>
                </div>
                <p className="mt-4 text-sm font-bold text-gray-400 uppercase tracking-widest">Accessing Logs...</p>
            </div>
        );
    }

    const uniqueActionTypes = Array.from(new Set(history.map(item => item.action_type)));

    return (
        <div className="space-y-6">
            {/* Filters Bar */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="search"
                        placeholder="Search by filename..."
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[hsl(var(--color-primary))/20] focus:border-[hsl(var(--color-primary))] transition-all outline-none text-sm font-medium"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <select
                        className="px-6 py-4 bg-white border border-gray-100 rounded-2xl text-sm font-bold text-gray-600 outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))/20]"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        title="Filter history by action type"
                    >
                        <option value="all">Every Action</option>
                        {uniqueActionTypes.map(type => (
                            <option key={type} value={type} className="capitalize">{type.replace(/_/g, ' ')}</option>
                        ))}
                    </select>
                    <button
                        className="p-4 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-gray-900 transition-colors"
                        title="Advanced filters"
                    >
                        <Filter className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Document Details</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Operational Task</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Timeline</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Execution</th>
                                <th className="px-8 py-5 text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredHistory.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-8 py-20 text-center">
                                        <AlertCircle className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                                        <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">No matching activities found</p>
                                    </td>
                                </tr>
                            ) : (
                                filteredHistory.map((item) => {
                                    const { date, time } = formatDateTime(item.created_at);
                                    const ToolIcon = getToolIcon(item.action_type);
                                    return (
                                        <tr key={item.id} className="hover:bg-gray-50/30 transition-colors group">
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-[hsl(var(--color-primary))] group-hover:text-white transition-all duration-300">
                                                        <ToolIcon className="w-5 h-5" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="font-bold text-gray-900 truncate max-w-[200px]">{item.file_name}</p>
                                                        {item.metadata?.fileSize && (
                                                            <p className="text-[10px] text-gray-400 font-bold uppercase">{(item.metadata.fileSize / 1024 / 1024).toFixed(2)} MB</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5">
                                                <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-[10px] font-black uppercase tracking-widest rounded-lg">
                                                    {item.action_type.replace(/_/g, ' ')}
                                                </span>
                                            </td>
                                            <td className="px-8 py-5">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-gray-700 font-mono tracking-tighter">{date}</span>
                                                    <span className="text-[10px] text-gray-400 font-black uppercase">{time}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                                                    <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Verified</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5 text-right">
                                                <button
                                                    className="p-2 text-gray-300 hover:text-gray-900 transition-colors"
                                                    title="More options"
                                                >
                                                    <MoreVertical className="w-5 h-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Placeholder */}
                <div className="px-8 py-6 bg-gray-50/50 border-t border-gray-50 flex items-center justify-between">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                        Showing {filteredHistory.length} of {history.length} records
                    </p>
                    <div className="flex gap-2">
                        <button disabled className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-[10px] font-black text-gray-300 uppercase tracking-widest cursor-not-allowed">Previous</button>
                        <button disabled className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-[10px] font-black text-gray-300 uppercase tracking-widest cursor-not-allowed">Next Page</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
