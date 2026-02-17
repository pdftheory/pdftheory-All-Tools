'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import {
    BookOpen,
    Terminal,
    Layers,
    Key,
    CreditCard,
    Box,
    Zap,
    CheckCircle2,
    ChevronRight,
    Menu,
    X,
    Search,
    LifeBuoy,
    MessageSquare
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
    {
        title: 'Getting Started',
        links: [
            { title: 'Introduction', href: '/developers', icon: BookOpen },
            { title: 'Quickstart', href: '/developers/quickstart', icon: Zap },
        ],
    },
    {
        title: 'Management',
        links: [
            { title: 'API Keys', href: '/developers/dashboard', icon: Key },
            { title: 'Usage', href: '/developers/usage', icon: Layers },
        ],
    },
    {
        title: 'API Reference',
        links: [
            { title: 'Overview', href: '/developers/api-reference', icon: Terminal },
            { title: 'Compress PDF', href: '/developers/api/compress', icon: Box },
            { title: 'Merge PDFs', href: '/developers/api/merge', icon: CheckCircle2 },
            { title: 'Split PDF', href: '/developers/api/split', icon: Box },
        ],
    },
    {
        title: 'Help',
        links: [
            { title: 'Support', href: '/developers/support', icon: LifeBuoy },
            { title: 'Feedback', href: '/developers/feedback', icon: MessageSquare },
        ],
    },
];

// Add LifeBuoy import to lucide-react list above in the file if needed, 
// checking line 7-20... oh wait, it's already there? No, let me check.


export function DocSidebar({ className, onCloseAction }: { className?: string; onCloseAction?: (open: boolean) => void }) {
    const pathname = usePathname();
    const locale = useLocale();

    const isActive = (href: string) => {
        // Add locale prefix for comparison
        const fullHref = `/${locale}${href}`;
        // If it's just the root developers page
        if (href === '/developers') {
            return pathname === fullHref || pathname === `/${locale}/developers/`;
        }
        return pathname === fullHref;
    };

    return (
        <nav className={cn("space-y-8 pb-10", className)}>
            {/* Sidebar Search Placeholder */}
            <div className="px-3 mb-6 lg:hidden">
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-slate-100 dark:bg-slate-900 border-none rounded-lg py-2 pl-9 pr-4 text-sm w-full outline-none focus:ring-1 focus:ring-blue-500/20"
                    />
                </div>
            </div>

            {navigation.map((section) => (
                <div key={section.title}>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-3">
                        {section.title}
                    </h3>
                    <div className="space-y-0.5">
                        {section.links.map((link) => {
                            const active = isActive(link.href);
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.href}
                                    href={`/${locale}${link.href}`}
                                    onClick={() => onCloseAction?.(false)}
                                    className={cn(
                                        "group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                                        active
                                            ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 shadow-sm"
                                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/50"
                                    )}
                                >
                                    <Icon className={cn(
                                        "w-4 h-4 transition-colors",
                                        active ? "text-blue-600 dark:text-blue-400" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                                    )} />
                                    {link.title}
                                    {active && (
                                        <ChevronRight className="ml-auto w-3.5 h-3.5 opacity-50" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            ))}
        </nav>
    );
}
