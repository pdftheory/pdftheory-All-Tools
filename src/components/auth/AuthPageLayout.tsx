'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface AuthPageLayoutProps {
    children: React.ReactNode;
    locale: string;
}

export const AuthPageLayout: React.FC<AuthPageLayoutProps> = ({ children, locale }) => {
    const t = useTranslations('common');

    // Hardcoded tool list for the showcase
    const tools = [
        'Merge PDF', 'Split PDF', 'Compress PDF',
        'Office to PDF', 'PDF to Word', 'PDF to Excel',
        'PDF to JPG', 'JPG to PDF', 'Edit PDF',
        'Rotate PDF', 'Unlock PDF', 'Protect PDF'
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans">
            {/* Left Side: Form */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 lg:p-12 relative">
                {/* Logo */}
                <Link href={`/${locale}`} className="absolute top-8 lg:top-12 flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity">
                    <div className="relative h-12 w-12">
                        <Image
                            src="/Logo.png"
                            alt={t('brand')}
                            width={48}
                            height={48}
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-2xl font-black tracking-tight text-[hsl(var(--color-foreground))]">
                        {t('brand')}
                    </span>
                </Link>

                {/* Auth Component Container */}
                <div className="w-full max-w-sm mt-16 lg:mt-0">
                    {children}

                    <div className="mt-8 text-center text-xs text-gray-500">
                        &copy; pdftheory. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Right Side: Marketing Content */}
            <div className="hidden lg:flex w-1/2 bg-[#f8f9fa] flex-col justify-center p-16 xl:p-24 border-l border-gray-100">
                <div className="max-w-lg mx-auto">
                    {/* Illustration Placeholder */}
                    {/* In a real scenario, use actual illustrations. Using a layout simulation here. */}
                    <div className="mb-12 relative h-64 w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
                        <div className="h-4 w-1/3 bg-gray-100 rounded-full animate-pulse"></div>
                        <div className="h-32 w-full bg-blue-50/50 rounded-xl flex items-center justify-center border border-blue-100 border-dashed">
                            <span className="text-blue-400 font-medium text-sm">Drag and drop PDFs here</span>
                        </div>
                        <div className="flex gap-2 mt-auto">
                            <div className="h-8 w-24 bg-red-500 rounded-lg opacity-80"></div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -right-4 -top-4 h-24 w-24 bg-yellow-400/10 rounded-full blur-xl"></div>
                        <div className="absolute -left-4 -bottom-4 h-32 w-32 bg-blue-400/10 rounded-full blur-xl"></div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        PDF tools for productive people
                    </h2>
                    <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                        pdftheory helps you convert, edit, e-sign, and protect PDF files quickly and easily. Enjoy a full suite of tools to effectively manage documents — no matter where you're working.
                    </p>

                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">See all tools</h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-600">
                            {tools.map((tool) => (
                                <div key={tool} className="flex items-center gap-2 text-sm py-1 hover:text-[hsl(var(--color-primary))] hover:font-medium transition-colors cursor-pointer">
                                    <span>•</span> {tool}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
