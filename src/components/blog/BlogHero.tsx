'use client';

import { Search, X } from 'lucide-react';

interface BlogHeroProps {
    title: string;
    subtitle: string;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    searchPlaceholder: string;
}

export function BlogHero({ title, subtitle, searchQuery, onSearchChange, searchPlaceholder }: BlogHeroProps) {
    return (
        <section className="relative pt-16 pb-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        {title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {subtitle}
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-xl mx-auto">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder={searchPlaceholder}
                            className="w-full pl-12 pr-12 py-4 text-base rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] focus:border-transparent shadow-sm transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => onSearchChange('')}
                                className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label="Clear search"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
