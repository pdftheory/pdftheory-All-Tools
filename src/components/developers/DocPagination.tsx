'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

interface PageLink {
    title: string;
    href: string;
}

const navigation = [
    { title: 'Introduction', href: '/developers' },
    { title: 'Quickstart', href: '/developers/quickstart' },
    { title: 'API Keys', href: '/developers/dashboard' },
    { title: 'Usage', href: '/developers/usage' },
    { title: 'API Reference', href: '/developers/api-reference' },
    { title: 'Compress PDF', href: '/developers/api/compress' },
    { title: 'Merge PDFs', href: '/developers/api/merge' },
    { title: 'Split PDF', href: '/developers/api/split' },
];

export function DocPagination() {
    const pathname = usePathname();
    const locale = useLocale();

    // Find current page index
    const currentIndex = navigation.findIndex(page => {
        const fullHref = `/${locale}${page.href}`;
        return pathname === fullHref || pathname === `${fullHref}/`;
    });

    if (currentIndex === -1) return null;

    const prevPage = currentIndex > 0 ? navigation[currentIndex - 1] : null;
    const nextPage = currentIndex < navigation.length - 1 ? navigation[currentIndex + 1] : null;

    return (
        <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-slate-100 dark:border-slate-800">
            {prevPage ? (
                <Link
                    href={`/${locale}${prevPage.href}`}
                    className="flex-1 group p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all duration-300"
                >
                    <div className="text-xs font-semibold text-slate-400 mb-1 flex items-center gap-1 group-hover:text-blue-500 transition-colors">
                        <ChevronLeft className="w-3 h-3" />
                        Previous
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {prevPage.title}
                    </div>
                </Link>
            ) : (
                <div className="flex-1" />
            )}

            {nextPage ? (
                <Link
                    href={`/${locale}${nextPage.href}`}
                    className="flex-1 group p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all duration-300 text-right"
                >
                    <div className="text-xs font-semibold text-slate-400 mb-1 flex items-center justify-end gap-1 group-hover:text-blue-500 transition-colors">
                        Next
                        <ChevronRight className="w-3 h-3" />
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {nextPage.title}
                    </div>
                </Link>
            ) : (
                <div className="flex-1" />
            )}
        </div>
    );
}
