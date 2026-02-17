import React from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Settings, User, Bell, Globe, Palette, Save } from 'lucide-react';
import SettingsPageClient from '@/components/dashboard/SettingsPageClient';

interface PageProps {
    params: Promise<{
        locale: string;
    }>;
}

export default async function SettingsPage({ params }: PageProps) {
    const { locale } = await params;
    const supabase = await createClient();
    let user;
    const { data: { user: authUser }, error } = await supabase.auth.getUser();
    if (error || !authUser) {
        redirect(`/${locale}/login`);
    }
    user = authUser;

    const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Professional User';

    return (
        <div className="min-h-screen bg-gray-50 pt-[80px] flex">
            {/* Sidebar */}
            <DashboardSidebar locale={locale} />

            {/* Main Content Area */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto">
                <nav className="mb-8 flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
                    <span>Dashboard</span>
                    <span>/</span>
                    <span className="text-[hsl(var(--color-primary))]">Global Settings</span>
                </nav>

                <SettingsPageClient user={user} locale={locale} />
            </main>
        </div>
    );
}
