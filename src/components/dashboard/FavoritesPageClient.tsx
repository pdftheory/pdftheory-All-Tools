'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Star, LayoutGrid, Search, ArrowRight, X, Plus, Sparkles, AlertCircle } from 'lucide-react';
import { tools } from '@/config/tools';
import { getToolIcon } from '@/config/icons';
import Link from 'next/link';

interface FavoritesPageClientProps {
    locale: string;
}

const STORAGE_KEY = 'pdftheory_favorite_tools';

export default function FavoritesPageClient({ locale }: FavoritesPageClientProps) {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [libSearchTerm, setLibSearchTerm] = useState('');
    const [hasLoaded, setHasLoaded] = useState(false);

    // Initialize from localStorage
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                setFavorites(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse favorites', e);
                setFavorites(['merge-pdf', 'split-pdf', 'sign-pdf']); // Fallback
            }
        } else {
            // Default favorites for new users
            setFavorites(['merge-pdf', 'split-pdf', 'sign-pdf', 'edit-pdf', 'pdf-to-word', 'compress-pdf']);
        }
        setHasLoaded(true);
    }, []);

    // Save to localStorage
    useEffect(() => {
        if (hasLoaded) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
        }
    }, [favorites, hasLoaded]);

    const favoriteTools = useMemo(() => {
        return tools.filter(t =>
            favorites.includes(t.slug) &&
            (t.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
                t.id.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }, [favorites, searchTerm]);

    const libraryTools = useMemo(() => {
        return tools.filter(t =>
            t.slug.toLowerCase().includes(libSearchTerm.toLowerCase()) ||
            t.id.toLowerCase().includes(libSearchTerm.toLowerCase())
        );
    }, [libSearchTerm]);

    const toggleFavorite = (slug: string) => {
        setFavorites(prev =>
            prev.includes(slug)
                ? prev.filter(s => s !== slug)
                : [...prev, slug]
        );
    };

    if (!hasLoaded) {
        return (
            <div className="flex-1 flex items-center justify-center py-20">
                <div className="w-12 h-12 border-4 border-gray-100 border-t-amber-400 rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="animate-in fade-in duration-700">
            <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-amber-400 text-white flex items-center justify-center shadow-lg shadow-amber-100">
                            <Star className="w-6 h-6 fill-white" />
                        </div>
                        <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                            Pinned Tools
                        </h1>
                    </div>
                    <p className="text-gray-500 max-w-xl text-lg font-medium leading-relaxed">
                        Your personalized collection of frequently used PDF processors.
                    </p>
                </div>

                <div className="flex bg-white p-2 rounded-2xl border border-gray-100 shadow-sm w-full md:w-auto">
                    <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-xl flex-1 md:w-64 focus-within:ring-2 focus-within:ring-amber-400/20 transition-all">
                        <Search className="w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search pinned..."
                            className="bg-transparent border-none outline-none text-sm font-bold w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                title="Clear search"
                            >
                                <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {/* Favorites Grid */}
            {favoriteTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteTools.map((tool) => {
                        const ToolIcon = getToolIcon(tool.slug);
                        return (
                            <div
                                key={tool.id}
                                className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-amber-400/5 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[4rem] group-hover:bg-amber-50/50 transition-colors" />

                                {/* Unpin Action */}
                                <button
                                    onClick={() => toggleFavorite(tool.slug)}
                                    className="absolute top-6 right-6 z-20 p-2 text-gray-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                                    title="Unpin from dashboard"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <Link href={`/${locale}/tools/${tool.slug}`} className="relative z-10 block">
                                    <div className="relative inline-flex mb-6">
                                        <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-50 group-hover:bg-white group-hover:shadow-md transition-all duration-500">
                                            <ToolIcon className="w-8 h-8" />
                                        </span>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-lg flex items-center justify-center shadow-lg shadow-amber-100 border-2 border-white">
                                            <Star className="w-3 h-3 fill-white text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 truncate group-hover:text-amber-500 transition-colors">
                                        {tool.slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                                    </h3>
                                    <p className="text-sm text-gray-400 font-medium leading-relaxed line-clamp-2 mb-6">
                                        Professional-grade PDF {tool.slug.split('-')[0]} tool with optimized processing engine.
                                    </p>
                                    <div className="flex items-center text-xs font-black text-amber-500 uppercase tracking-widest group-hover:gap-2 transition-all">
                                        Launch Tool <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </Link>
                            </div>
                        );
                    })}

                    {/* Add More Tools Card */}
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="group p-8 rounded-[2rem] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center hover:border-amber-400 hover:bg-amber-50/20 transition-all cursor-pointer min-h-[280px]"
                    >
                        <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-amber-400 group-hover:text-white transition-all duration-500">
                            <Plus className="w-8 h-8 text-gray-300 group-hover:text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-500 group-hover:text-amber-600">Pin More Tools</h3>
                        <p className="text-sm text-gray-400 mt-2 max-w-[200px]">Browse the library and star your favorite tools for quick access.</p>
                    </button>
                </div>
            ) : (
                <div className="bg-white rounded-[3rem] p-16 text-center border border-gray-100 shadow-sm border-dashed">
                    <div className="w-24 h-24 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                        <Sparkles className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 mb-4">No tools found</h2>
                    <p className="text-gray-500 max-w-md mx-auto mb-10 text-lg font-medium">
                        {searchTerm ? `No results for "${searchTerm}" in your pins.` : "You haven't pinned any tools yet. Start building your perfect workspace."}
                    </p>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="px-10 py-5 bg-amber-400 text-white font-black rounded-2xl hover:shadow-xl hover:shadow-amber-100 hover:-translate-y-1 transition-all flex items-center gap-3 mx-auto uppercase tracking-widest text-sm"
                    >
                        <LayoutGrid className="w-5 h-5" />
                        Explore Tool Library
                    </button>
                </div>
            )}

            {/* Tool Discovery Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setIsAddModalOpen(false)} />
                    <div className="relative bg-white w-full max-w-4xl max-h-[85vh] rounded-[2.5rem] shadow-2xl flex flex-col animate-in zoom-in-95 duration-300 overflow-hidden">
                        {/* Modal Header */}
                        <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-black text-gray-900 mb-1">Tool Repository</h2>
                                <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Select tools to pin on your dashboard</p>
                            </div>
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-rose-50 hover:text-rose-500 transition-all"
                                title="Close repository"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Search */}
                        <div className="px-8 py-6 bg-gray-50/50">
                            <div className="relative group">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Instant tool lookup..."
                                    className="w-full pl-16 pr-6 py-5 bg-white rounded-2xl border border-gray-100 shadow-sm focus:ring-4 focus:ring-amber-400/10 focus:border-amber-400 transition-all text-lg font-bold outline-none"
                                    value={libSearchTerm}
                                    onChange={(e) => setLibSearchTerm(e.target.value)}
                                    autoFocus
                                />
                            </div>
                        </div>

                        {/* Tool List */}
                        <div className="flex-1 overflow-y-auto p-8 pt-0 divide-y divide-gray-50">
                            {libraryTools.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                                    {libraryTools.map((tool) => {
                                        const ToolIcon = getToolIcon(tool.slug);
                                        const isFav = favorites.includes(tool.slug);
                                        return (
                                            <button
                                                key={tool.id}
                                                onClick={() => toggleFavorite(tool.slug)}
                                                className={`flex items-center gap-4 p-5 rounded-3xl border transition-all text-left group ${isFav ? 'bg-amber-50 border-amber-200' : 'bg-white border-gray-100 hover:border-amber-200 hover:bg-gray-50'}`}
                                            >
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isFav ? 'bg-white text-amber-500 shadow-sm' : 'bg-gray-100 text-gray-400 group-hover:bg-white group-hover:text-amber-500'}`}>
                                                    <ToolIcon className="w-6 h-6" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className={`font-bold transition-colors ${isFav ? 'text-amber-900' : 'text-gray-900'}`}>
                                                        {tool.slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                                                    </p>
                                                    <p className="text-xs text-gray-400 font-medium truncate">Category: {tool.category || 'Utility'}</p>
                                                </div>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isFav ? 'bg-amber-400 text-white animate-in zoom-in-0 duration-300' : 'bg-gray-50 text-gray-300 group-hover:bg-amber-100 group-hover:text-amber-500'}`}>
                                                    <Star className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="py-20 text-center">
                                    <AlertCircle className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                                    <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">No tools found matching "{libSearchTerm}"</p>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="p-8 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
                                {favorites.length} TOOLS PINNED
                            </p>
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="px-8 py-4 bg-gray-900 text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-gray-800 transition-all"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
