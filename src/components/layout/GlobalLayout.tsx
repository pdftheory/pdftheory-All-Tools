'use client';
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { type Locale } from '@/lib/i18n/config';
import { usePathname } from 'next/navigation';
import { AdUnit } from '@/components/ads/AdUnit';

export default function GlobalLayout({ children, locale }: { children: React.ReactNode; locale: Locale; }) {
    const pathname = usePathname();
    const isSpecial = pathname?.includes('/workflow') || pathname?.includes('/login') || pathname?.includes('/signup') || pathname?.includes('/developers');

    React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

    if (isSpecial) return <main id="main-content" className="flex-grow">{children}</main>;

    return (
        <>
            <Header locale={locale} />
            <main id="main-content" className="flex-grow pt-[80px]">
                <div className="container mx-auto px-4 pt-4">
                    <AdUnit slotId="global-top-ad" ezoicId="119" format="horizontal" />
                </div>
                {children}
            </main>
            <div className="container mx-auto px-4 py-8">
                <AdUnit slotId="global-footer-ad" ezoicId="121" format="horizontal" />
            </div>
            <Footer locale={locale} />
        </>
    );
}
