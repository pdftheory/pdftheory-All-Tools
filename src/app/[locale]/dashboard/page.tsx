import React from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { RecentActivityTable } from '@/components/dashboard/RecentActivityTable';
import { QuickToolsGrid } from '@/components/dashboard/QuickToolsGrid';
import { ProductivityAnalytics } from '@/components/dashboard/ProductivityAnalytics';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

interface PageProps {
    params: Promise<{
        locale: string;
    }>;
}

export default async function DashboardPage({ params }: PageProps) {
    const { locale } = await params;
    const supabase = await createClient();
    let user;
    const { data: { user: authUser }, error } = await supabase.auth.getUser();
    if (error || !authUser) {
        redirect(`/${locale}/login`);
    }
    user = authUser;

    const t = await getTranslations('common');
    const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'User';

    return (
        <div className="min-h-screen bg-gray-50 pt-[80px] flex">
            {/* Sidebar - Desktop Only */}
            <DashboardSidebar locale={locale} />

            {/* Main Content Area */}
            <main className="flex-1 p-6 md:p-8 overflow-y-auto">
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-3xl font-black text-gray-900 mb-2">
                        Welcome back, <span className="text-[hsl(var(--color-primary))]">{displayName}</span>! 👋
                    </h1>
                    <p className="text-gray-500">Here's an overview of your recent PDF activities.</p>
                </header>

                {/* Stats Section */}
                <DashboardStats />

                {/* Quick Actions Grid */}
                <QuickToolsGrid locale={locale} />

                {/* Productivity Analytics */}
                <ProductivityAnalytics />

                {/* Recent Activity */}
                <div className="mt-10 pb-20">
                    <RecentActivityTable />
                </div>
            </main>
        </div>
    );
}
