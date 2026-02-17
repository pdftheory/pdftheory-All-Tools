import React from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Star, LayoutGrid, Search, ArrowRight } from 'lucide-react';
import { tools } from '@/config/tools';
import { getToolIcon } from '@/config/icons';
import Link from 'next/link';

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

    return (
        <div className="min-h-screen bg-gray-50 pt-[80px] flex">
            {/* Sidebar */}
            <DashboardSidebar locale={locale} />

            {/* Main Content Area */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto">
                <nav className="mb-8 flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
                    <span>Dashboard</span>
                    <span>/</span>
                    <span className="text-[hsl(var(--color-primary))]">Favorites</span>
                </nav>

                <FavoritesPageClient locale={locale} />
            </main>
        </div>
    );
}
