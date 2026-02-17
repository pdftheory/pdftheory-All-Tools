import React from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { HistoryTable } from '@/components/dashboard/HistoryTable';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { HistoryExportButton } from '@/components/dashboard/HistoryExportButton';
import { History as HistoryIcon, Trash2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
    params: Promise<{
        locale: string;
    }>;
}

export default async function HistoryPage({ params }: PageProps) {
    const { locale } = await params;
    const supabase = await createClient();
    let user;
    const { data: { user: authUser }, error } = await supabase.auth.getUser();
    if (error || !authUser) {
        redirect(`/${locale}/login`);
    }
    user = authUser;

    return (
        <div className="min-h-screen bg-gray-50 pt-[80px] flex">
            {/* Sidebar */}
            <DashboardSidebar locale={locale} />

            {/* Main Content Area */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto">
                {/* Navigation Breadcrumb */}
                <nav className="mb-8 flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
                    <Link href={`/${locale}/dashboard`} className="hover:text-gray-900 transition-colors">Dashboard</Link>
                    <span>/</span>
                    <span className="text-[hsl(var(--color-primary))]">Activity History</span>
                </nav>

                {/* Header */}
                <header className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--color-primary))] text-white flex items-center justify-center shadow-lg shadow-[hsl(var(--color-primary))/20]">
                                <HistoryIcon className="w-6 h-6" />
                            </div>
                            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                                Activity Hub
                            </h1>
                        </div>
                        <p className="text-gray-500 max-w-xl text-lg font-medium leading-relaxed">
                            A comprehensive log of all your PDF transformations. Your data is encrypted and accessible only by you.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <HistoryExportButton userId={(user as any).id} />
                    </div>
                </header>

                {/* Stats Summary could go here in the future */}

                {/* Main Table */}
                <HistoryTable />

                {/* Privacy Disclaimer */}
                <footer className="mt-12 p-8 bg-blue-50/50 rounded-3xl border border-blue-100/50 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-500 shadow-sm shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-sm font-black text-blue-900 uppercase tracking-tighter mb-1">Privacy Focused Logging</h4>
                        <p className="text-sm text-blue-700/70 font-medium leading-relaxed">
                            We only store essential metadata about your file operations. Original files are never stored on our servers after processing is complete. Your history is automatically purged after 30 days unless you choose to delete it manually.
                        </p>
                    </div>
                </footer>
            </main>
        </div>
    );
}
