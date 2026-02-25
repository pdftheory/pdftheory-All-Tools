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
                <div className="container mx-auto px-4 pt-4 min-h-[100px] flex items-center justify-center">
                    <AdUnit slotId="global-top-ad" format="horizontal" />
                </div>
                {children}
            </main>

            <div className="container mx-auto px-4 py-8 min-h-[100px] flex items-center justify-center">
                <AdUnit slotId="global-footer-ad" format="horizontal" />
            </div>

            <Footer locale={locale} />
        </>
    );
}
