import React from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { HistoryTable } from '@/components/dashboard/HistoryTable';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { HistoryExportButton } from '@/components/dashboard/HistoryExportButton';
import { History as HistoryIcon, ShieldCheck } from 'lucide-react';
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

    const t = await getTranslations('dashboard.history');

    return (
        <div className="min-h-screen bg-gray-50 pt-[80px] flex">
            {/* Sidebar */}
            <DashboardSidebar locale={locale} />

            {/* Main Content Area */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto">
                {/* Navigation Breadcrumb */}
                <nav className="mb-8 flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
                    <Link href={`/${locale}/dashboard`} className="hover:text-gray-900 transition-colors">DASHBOARD</Link>
                    <span>/</span>
                    <span className="text-[hsl(var(--color-primary))]">{t('breadcrumb')}</span>
                </nav>

                {/* Header */}
                <header className="mb-10">
                    <div className="flex items-center justify-between gap-6 mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center shadow-lg">
                                <HistoryIcon className="w-6 h-6" />
                            </div>
                            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                                {t('title')}
                            </h1>
                        </div>
                        <HistoryExportButton userId={user.id} />
                    </div>
                    <p className="text-gray-500 max-w-xl text-lg font-medium leading-relaxed">
                        {t('subtitle')}
                    </p>
                </header>

                {/* Stats Summary could go here in the future */}

                {/* Main Table */}
                <HistoryTable />

                {/* Privacy Disclaimer */}
                <div className="mt-12 p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 opacity-50 rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{t('privacyTitle')}</h3>
                        </div>
                        <p className="text-sm text-gray-500 max-w-2xl leading-relaxed italic">
                            {t('privacyDesc')}
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
