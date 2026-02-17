import React from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { SecurityPageClient } from '@/components/dashboard/SecurityPageClient';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
    params: Promise<{
        locale: string;
    }>;
}

export default async function SecurityPage({ params }: PageProps) {
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
                    <Link href={`/${locale}/dashboard`} className="hover:text-gray-900 transition-colors">Dashboard</Link>
                    <span>/</span>
                    <span className="text-[hsl(var(--color-primary))]">Security Hub</span>
                </nav>

                <header className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center shadow-lg">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                            Security Hub
                        </h1>
                    </div>
                    <p className="text-gray-500 max-w-xl text-lg font-medium leading-relaxed">
                        Manage your account security, passwords, and authentication methods to keep your professional documents protected.
                    </p>
                </header>

                <SecurityPageClient locale={locale} />
            </main>
        </div>
    );
}
