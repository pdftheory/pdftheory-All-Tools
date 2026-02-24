import React from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Star, LayoutGrid, Search, ArrowRight } from 'lucide-react';
import { tools } from '@/config/tools';
import { getToolIcon } from '@/config/icons';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import FavoritesPageClient from '@/components/dashboard/FavoritesPageClient';

interface PageProps {
    params: Promise<{
        locale: string;
    }>;
}

export default async function FavoritesPage({ params }: PageProps) {
    const { locale } = await params;
    const supabase = await createClient();
    let user;
    const { data: { user: authUser }, error } = await supabase.auth.getUser();
    if (error || !authUser) {
        redirect(`/${locale}/login`);
    }
    user = authUser;

    const t = await getTranslations('dashboard.favorites');

    return (
        <div className="min-h-screen bg-gray-50 pt-[80px] flex">
            {/* Sidebar */}
            <DashboardSidebar locale={locale} />

            {/* Main Content Area */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto">
                <nav className="mb-8 flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
                    <Link href={`/${locale}/dashboard`} className="hover:text-gray-900 transition-colors">DASHBOARD</Link>
                    <span>/</span>
                    <span className="text-[hsl(var(--color-primary))] uppercase">{t('title')}</span>
                </nav>

                <header className="mb-10">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center shadow-lg">
                            <Star className="w-6 h-6 fill-current" />
                        </div>
                        <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                            {t('title')}
                        </h1>
                    </div>
                    <p className="text-gray-500 max-w-xl text-lg font-medium leading-relaxed">
                        {t('subtitle')}
                    </p>
                </header>

                <FavoritesPageClient locale={locale} />
            </main>
        </div>
    );
}
