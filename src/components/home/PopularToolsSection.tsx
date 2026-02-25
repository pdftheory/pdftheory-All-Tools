'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getToolIcon } from '@/config/icons';
import { type Locale } from '@/lib/i18n/config';

interface Tool {
    id: string;
    slug: string;
}

interface PopularToolsSectionProps {
    locale: Locale;
    popularTools: Tool[];
    toolCount: number;
    localizedToolContent: Record<string, any>;
}

export const PopularToolsSection: React.FC<PopularToolsSectionProps> = ({
    locale,
    popularTools,
    toolCount,
    localizedToolContent,
}) => {
    const h = useTranslations('common');

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                        {h('header.popular')}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {h('benefits.description')}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {popularTools.map((tool) => {
                        const ToolIcon = getToolIcon(tool.id);
                        const content = localizedToolContent?.[tool.id];

                        return (
                            <Link
                                key={tool.id}
                                href={`/${locale}/tools/${tool.slug}`}
                                className="group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                                    <ToolIcon className="w-12 h-12" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                    {content?.title || tool.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                                </h3>
                                <p className="text-gray-500 text-sm line-clamp-2">
                                    {content?.description?.slice(0, 60)}...
                                </p>
                                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                            </Link>
                        );
                    })}
                </div>

                <div className="text-center mt-10">
                    <Link href={`/${locale}/tools`}>
                        <Button variant="secondary" size="lg" className="rounded-xl">
                            {h('header.seeAll')}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
