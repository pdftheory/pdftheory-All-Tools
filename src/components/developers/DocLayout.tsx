'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronRight, Home, Search } from 'lucide-react';
import { DocSidebar } from './DocSidebar';
import { DocTOC } from './DocTOC';
import { DocPagination } from './DocPagination';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export function DocLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const locale = useLocale();

    return (
        <div className="flex min-h-screen bg-white dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 font-sans">
            {/* Dedicated Doc Header */}
            <header className="fixed top-0 left-0 right-0 h-16 border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md z-40 flex items-center justify-between px-6">
                <div className="flex items-center gap-8">
                    <Link href={`/${locale}`} className="flex items-center gap-3">
                        <div className="relative h-9 w-9 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Image
                                src="/Logo.png"
                                alt="pdftheory"
                                width={24}
                                height={24}
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="font-bold text-xl tracking-tight hidden sm:block">pdftheory Docs</span>
                    </Link>
                    <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <Link href={`/${locale}`} className="hover:text-blue-600 transition-colors">Website</Link>
                        <Link href={`/${locale}/developers/dashboard`} className="hover:text-blue-600 transition-colors">API Keys</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search documentation..."
                            className="bg-slate-100 dark:bg-slate-900 border-none rounded-full py-2 pl-9 pr-4 text-sm w-64 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                            <span className="p-1 min-w-[1.25rem] h-5 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-[10px] flex items-center justify-center font-mono">⌘</span>
                            <span className="p-1 min-w-[1.25rem] h-5 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-[10px] flex items-center justify-center font-mono">K</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-72 flex-col fixed inset-y-0 border-r border-gray-100 dark:border-gray-800 pt-16 bg-slate-50/50 dark:bg-slate-900/10">
                <div className="px-6 py-10 overflow-y-auto overflow-x-hidden">
                    <DocSidebar />
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 lg:pl-72 flex flex-col pt-16">
                {/* Mobile Header (Sub-header) */}
                <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-md sticky top-16 z-30">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2 -ml-2 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 text-sm font-medium"
                        title="Open navigation menu"
                    >
                        <Menu className="w-5 h-5" />
                        Menu
                    </button>
                    <div className="flex items-center gap-2">
                        <Search className="w-5 h-5 text-gray-400" />
                    </div>
                </div>

                <div className="flex-1 flex flex-col xl:flex-row">
                    {/* Content Wrapper */}
                    <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
                        {children}
                        <DocPagination />
                    </main>

                    {/* Right Sidebar (TOC) - Desktop ONLY */}
                    <aside className="hidden xl:block w-72 flex-shrink-0 pt-16 px-6 sticky top-16 self-start overflow-y-auto max-h-[calc(100vh-4rem)]">
                        <div className="py-2">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 px-2">On this page</h4>
                            <DocTOC />
                        </div>
                    </aside>
                </div>

                {/* Footer Area (Docs style) */}
                <footer className="max-w-4xl w-full mx-auto px-4 sm:px-8 lg:px-12 py-12 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} pdftheory. Built for developers.</p>
                        <div className="flex gap-6">
                            <Link href={`/${locale}/developers/support`} className="hover:text-gray-900 dark:hover:text-white transition-colors">Support</Link>
                            <Link href={`/${locale}/developers/feedback`} className="hover:text-gray-900 dark:hover:text-white transition-colors">Feedback</Link>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] transition-opacity"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    <div className="fixed inset-y-0 left-0 w-72 bg-white dark:bg-[#0f172a] p-6 shadow-2xl border-r border-gray-200 dark:border-gray-800 animate-in slide-in-from-left duration-300">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <div className="relative h-7 w-7 bg-blue-600 rounded-md flex items-center justify-center">
                                    <Image
                                        src="/Logo.png"
                                        alt="pdftheory"
                                        width={18}
                                        height={18}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-bold text-lg">pdftheory Docs</span>
                            </div>
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="p-2 -mr-2 text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                title="Close navigation menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <DocSidebar onCloseAction={setIsSidebarOpen} />
                    </div>
                </div>
            )}
        </div>
    );
}
