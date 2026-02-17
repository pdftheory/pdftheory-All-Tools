'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Home,
    History,
    Settings,
    FileText,
    Star,
    Workflow,
    ExternalLink,
    ShieldCheck,
    HelpCircle
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export const DashboardSidebar = ({ locale }: { locale: string }) => {
    const tCommon = useTranslations('common');
    const pathname = usePathname();

    const navItems = [
        { label: 'Overview', icon: Home, href: `/${locale}/dashboard` },
        { label: 'Favorites', icon: Star, href: `/${locale}/dashboard/favorites` },
        { label: 'Activity Hub', icon: History, href: `/${locale}/dashboard/history` },
        { label: 'Pro Workflows', icon: Workflow, href: `/${locale}/workflow` },
    ];

    const supportItems = [
        { label: 'Account Security', icon: ShieldCheck, href: `/${locale}/dashboard/security` },
        { label: 'Settings', icon: Settings, href: `/${locale}/settings` },
        { label: 'Support Center', icon: HelpCircle, href: `/${locale}/faq` },
    ];

    return (
        <aside className="w-72 bg-white border-r border-gray-100 min-h-[calc(100vh-80px)] hidden lg:flex flex-col sticky top-[80px]">
            {/* Primary Navigation */}
            <div className="p-8 flex-1">
                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Management</h2>
                <nav className="space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== `/${locale}/dashboard` && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3.5 px-5 py-3.5 text-sm font-bold rounded-2xl transition-all duration-300 ${isActive
                                    ? 'bg-[hsl(var(--color-primary))] text-white shadow-lg shadow-[hsl(var(--color-primary))/20] scale-[1.02]'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6 mt-10">Preferences</h2>
                <nav className="space-y-2">
                    {supportItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3.5 px-5 py-3.5 text-sm font-bold rounded-2xl transition-all duration-300 ${isActive
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <item.icon className="w-5 h-5 text-gray-400" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Quick Links Footer */}
            <div className="p-8 border-t border-gray-50 bg-gray-50/30">
                <Link
                    href={`/${locale}/tools`}
                    className="flex items-center gap-3 px-4 py-3 text-xs font-black text-gray-500 hover:text-[hsl(var(--color-primary))] bg-white border border-gray-100 rounded-xl transition-all hover:shadow-sm"
                >
                    <FileText className="w-4 h-4" />
                    TOOL LIBRARY
                    <ExternalLink className="w-3 h-3 ml-auto opacity-30" />
                </Link>
            </div>

        </aside>
    );
};

// Simple ArrowRight component if lucide doesn't have it (it does, but just to be sure)
function ArrowRight({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    );
}
