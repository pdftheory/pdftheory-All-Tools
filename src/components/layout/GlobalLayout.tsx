'use client';

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { type Locale } from '@/lib/i18n/config';
import { usePathname } from 'next/navigation';
import { AdUnit } from '@/components/ads/AdUnit';

interface GlobalLayoutProps {
    children: React.ReactNode;
    locale: Locale;
}

export default function GlobalLayout({ children, locale }: GlobalLayoutProps) {
    const pathname = usePathname();
    const isWorkflowPage = pathname?.includes('/workflow');
    const isAuthPage = pathname?.includes('/login') || pathname?.includes('/signup');
    const isDocPage = pathname?.includes('/developers');

    // Scroll to top on route change
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (isWorkflowPage || isAuthPage || isDocPage) {
        return (
            <main id="main-content" className="flex-grow">
                {children}
            </main>
        );
    }

    return (
        <>
            <Header locale={locale} />
            <main id="main-content" className="flex-grow pt-[80px]">
                {children}
            </main>

            <div className="container mx-auto px-4 py-8">
                <AdUnit slotId="global-footer-ad" format="horizontal" />
            </div>

            <Footer locale={locale} />
        </>
    );
}
