'use client';

import React, { useState, useEffect } from 'react';
import { tools } from '@/config/tools';
import { getToolContent, type Locale } from '@/config/tool-content';
import { getToolIcon } from '@/config/icons';
import {
    Search,
    Plus,
    X,
    Star,
    LayoutGrid,
    ExternalLink,
    SearchX,
    FolderPlus,
    ChevronRight,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function FavoritesPageClient({ locale }: { locale: string }) {
    const t = useTranslations('dashboard.favorites');
    const [favorites, setFavorites] = useState<string[]>([]);
    const [isAddingMode, setIsAddingMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [modalSearch, setModalSearch] = useState('');

    useEffect(() => {
        const saved = localStorage.getItem('pdfcraft_favorites');
        if (saved) {
            setFavorites(JSON.parse(saved));
        }
    }, []);

    const toggleFavorite = (toolId: string) => {
        const newFavorites = favorites.includes(toolId)
            ? favorites.filter(id => id !== toolId)
            : [...favorites, toolId];

        setFavorites(newFavorites);
        localStorage.setItem('pdfcraft_favorites', JSON.stringify(newFavorites));
    };

    const favoriteTools = tools.filter(tool => favorites.includes(tool.id));
    const filteredFavorites = favoriteTools.filter(tool => {
        const content = getToolContent(locale as Locale, tool.id);
        const title = content?.title || tool.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const availableTools = tools.filter(tool => {
        const content = getToolContent(locale as Locale, tool.id);
        const title = content?.title || tool.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return title.toLowerCase().includes(modalSearch.toLowerCase());
    });

    return (
        <div className="space-y-8">
            {/* Action Bar */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative group">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[hsl(var(--color-primary))] transition-colors" />
                    <input
                        type="text"
                        placeholder={t('searchPlaceholder')}
                        className="w-full pl-14 pr-12 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[hsl(var(--color-primary))/5] transition-all font-medium text-gray-900"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-5 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg text-gray-400"
                            title={t('clearSearch')}
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>
                <button
                    onClick={() => setIsAddingMode(true)}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-black transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                    <Plus className="w-5 h-5" />
                    {t('modal.title')}
                </button>
            </div>

            {/* Content Grid */}
            {favorites.length === 0 ? (
                <div className="bg-white rounded-[3rem] border-2 border-dashed border-gray-100 p-20 text-center">
                    <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-8 relative">
                        <Star className="w-10 h-10 text-gray-200" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-sm border border-gray-50 flex items-center justify-center">
                            <Plus className="w-4 h-4 text-[hsl(var(--color-primary))]" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3">{t('noTools.title')}</h3>
                    <p className="text-gray-400 max-w-sm mx-auto mb-10 leading-relaxed">
                        {t('noTools.emptyDesc')}
                    </p>
                    <button
                        onClick={() => setIsAddingMode(true)}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(var(--color-primary))] text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-[hsl(var(--color-primary))/20] transition-all"
                    >
                        {t('noTools.button')}
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            ) : filteredFavorites.length === 0 ? (
                <div className="bg-white rounded-[3rem] border border-gray-100 p-20 text-center">
                    <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                        <SearchX className="w-10 h-10 text-gray-200" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('noTools.title')}</h3>
                    <p className="text-gray-400">{t('noTools.searchDesc', { query: searchQuery })}</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredFavorites.map((tool) => {
                        const Icon = getToolIcon(tool.id);
                        return (
                            <div key={tool.id} className="group relative bg-white rounded-[2.5rem] border border-gray-100 p-8 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300">
                                <button
                                    onClick={() => toggleFavorite(tool.id)}
                                    className="absolute top-6 right-6 p-3 bg-gray-50 text-[hsl(var(--color-primary))] rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                    title={t('unpin')}
                                >
                                    <X className="w-4 h-4" />
                                </button>

                                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--color-primary))] group-hover:text-white transition-colors duration-300">
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[hsl(var(--color-primary))] transition-colors">
                                    {getToolContent(locale as Locale, tool.id)?.title || tool.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed mb-8">
                                    {getToolContent(locale as Locale, tool.id)?.metaDescription || t('toolDesc')}
                                </p>

                                <Link
                                    href={`/${locale}${tool.href}`}
                                    className="inline-flex items-center gap-2 text-xs font-black text-gray-900 uppercase tracking-widest group/link"
                                >
                                    {t('launch')}
                                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                </Link>
                            </div>
                        );
                    })}

                    <button
                        onClick={() => setIsAddingMode(true)}
                        className="group border-2 border-dashed border-gray-100 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center hover:border-[hsl(var(--color-primary))] hover:bg-gray-50/50 transition-all duration-300 min-h-[320px]"
                    >
                        <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--color-primary))] group-hover:text-white transition-colors">
                            <FolderPlus className="w-8 h-8" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">{t('addMore.title')}</h4>
                        <p className="text-xs text-gray-400 max-w-[180px] leading-relaxed">
                            {t('addMore.desc')}
                        </p>
                    </button>
                </div>
            )}

            {/* Modal - Tool Repository */}
            {isAddingMode && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    <div
                        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
                        onClick={() => setIsAddingMode(false)}
                    />

                    <div className="relative w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300">
                        {/* Modal Header */}
                        <div className="p-8 md:p-10 border-b border-gray-50 flex items-center justify-between shrink-0">
                            <div>
                                <h2 className="text-2xl font-black text-gray-900 mb-1">{t('modal.title')}</h2>
                                <p className="text-sm text-gray-400 font-medium">{t('modal.subtitle')}</p>
                            </div>
                            <button
                                onClick={() => setIsAddingMode(false)}
                                className="p-4 bg-gray-50 rounded-2xl text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-all"
                                title={t('modal.close')}
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Search */}
                        <div className="px-8 py-6 bg-gray-50/50 border-b border-gray-50 shrink-0">
                            <div className="relative group">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[hsl(var(--color-primary))]" />
                                <input
                                    type="text"
                                    placeholder={t('modal.searchPlaceholder')}
                                    className="w-full pl-16 pr-8 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[hsl(var(--color-primary))/5] transition-all font-medium text-gray-900"
                                    value={modalSearch}
                                    onChange={(e) => setModalSearch(e.target.value)}
                                    autoFocus
                                />
                            </div>
                        </div>

                        {/* Modal Tools List */}
                        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {availableTools.map((tool) => {
                                    const Icon = getToolIcon(tool.id);
                                    const isPinned = favorites.includes(tool.id);
                                    return (
                                        <button
                                            key={tool.id}
                                            onClick={() => toggleFavorite(tool.id)}
                                            className={`flex items-center gap-4 p-4 rounded-[2rem] border transition-all duration-300 group/item ${isPinned
                                                ? 'bg-blue-50/30 border-[hsl(var(--color-primary))] ring-1 ring-[hsl(var(--color-primary))]'
                                                : 'bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                                                }`}
                                        >
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${isPinned ? 'bg-[hsl(var(--color-primary))] text-white' : 'bg-gray-50 text-gray-400 group-hover/item:bg-white'
                                                }`}>
                                                <Icon className="w-7 h-7" />
                                            </div>
                                            <div className="text-left flex-1 min-w-0">
                                                <h4 className="font-bold text-gray-900 truncate">
                                                    {getToolContent(locale as Locale, tool.id)?.title || tool.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                                </h4>
                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                                    {t('modal.category', { category: t('modal.defaultCategory') })}
                                                </p>
                                            </div>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isPinned ? 'bg-emerald-500 text-white scale-110' : 'bg-gray-100 text-gray-300'
                                                }`}>
                                                {isPinned ? <Star className="w-4 h-4 fill-current" /> : <Plus className="w-4 h-4" />}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-8 border-t border-gray-50 flex items-center justify-between shrink-0 bg-gray-50/20">
                            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
                                {t('modal.pinnedCount', { count: favorites.length })}
                            </p>
                            <button
                                onClick={() => setIsAddingMode(false)}
                                className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-black transition-all shadow-lg active:scale-95"
                            >
                                {t('modal.done')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
