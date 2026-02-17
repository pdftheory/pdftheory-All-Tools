'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getToolIcon } from '@/config/icons';

interface QuickTool {
    id: string;
    slug: string;
    title: string;
    description: string;
    color: string;
}

export const QuickToolsGrid = ({ locale }: { locale: string }) => {
    const quickTools: QuickTool[] = [
        {
            id: 'pdf-multi-tool',
            slug: 'pdf-multi-tool',
            title: 'All-in-One Tool',
            description: 'Merge, split, rotate and organize PDF pages in one go.',
            color: 'bg-indigo-50 text-indigo-600',
        },
        {
            id: 'merge-pdf',
            slug: 'merge-pdf',
            title: 'Merge PDF',
            description: 'Combine multiple PDF files into a single document.',
            color: 'bg-blue-50 text-blue-600',
        },
        {
            id: 'split-pdf',
            slug: 'split-pdf',
            title: 'Split PDF',
            description: 'Separate one page or a whole set for easy conversion.',
            color: 'bg-purple-50 text-purple-600',
        },
        {
            id: 'edit-pdf',
            slug: 'edit-pdf',
            title: 'Edit PDF',
            description: 'Add text, images, and annotations to your PDF.',
            color: 'bg-amber-50 text-amber-600',
        },
        {
            id: 'sign-pdf',
            slug: 'sign-pdf',
            title: 'Sign PDF',
            description: 'Request signatures or sign your documents securely.',
            color: 'bg-emerald-50 text-emerald-600',
        },
        {
            id: 'jpg-to-pdf',
            slug: 'jpg-to-pdf',
            title: 'JPG to PDF',
            description: 'Convert JPG, PNG, BMP and more to PDF format.',
            color: 'bg-rose-50 text-rose-600',
        },
    ];

    return (
        <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
                <Link
                    href={`/${locale}/tools`}
                    className="text-sm font-semibold text-[hsl(var(--color-primary))] hover:underline flex items-center gap-1"
                >
                    View all 99 tools
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickTools.map((tool) => {
                    const ToolIcon = getToolIcon(tool.slug);
                    return (
                        <Link
                            key={tool.id}
                            href={`/${locale}/tools/${tool.slug}`}
                            className="group p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-300 flex items-start gap-4"
                        >
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <ToolIcon className="w-6 h-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[hsl(var(--color-primary))] transition-colors truncate">
                                    {tool.title}
                                </h3>
                                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                                    {tool.description}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};
