
import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Download, Shield, Code, FileArchive, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { AdUnit } from '@/components/ads/AdUnit';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });
    return {
        title: `Source Code | PDFTheory`,
        description: 'Download the source code for PDFTheory. Professional PDF tools built with privacy and transparency in mind.',
    };
}

export default async function SourceCodePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const tCommon = await getTranslations('common');

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-b from-[hsl(var(--color-background))] to-[hsl(var(--color-muted)/0.3)]">
            <div className="max-w-3xl w-full space-y-6">

                {/* Top Ad Slot */}
                <AdUnit slotId="source-code-top" format="horizontal" className="my-2" />

                {/* Back Button */}
                <div className="flex justify-start">
                    <Link href={`/${locale}`}>
                        <Button variant="ghost" size="sm" className="gap-2 text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]">
                            <ArrowLeft size={16} />
                            {tCommon('buttons.back')}
                        </Button>
                    </Link>
                </div>

                {/* Hero Section */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[hsl(var(--color-foreground))]">
                        Source Code
                    </h1>
                    <p className="text-xl text-[hsl(var(--color-muted-foreground))]">
                        PDFTheory is built with transparency and privacy at its core.
                    </p>
                </div>

                {/* Middle Ad Slot */}
                <AdUnit slotId="source-code-middle" format="auto" />

                {/* Main Content */}
                <Card className="p-8 border-2 shadow-xl bg-[hsl(var(--color-card))]">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 pb-6 border-b border-[hsl(var(--color-border))]">
                            <div className="p-3 bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] rounded-xl">
                                <FileArchive size={32} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">pdftheory.zip</h2>
                                <p className="text-sm text-[hsl(var(--color-muted-foreground))] font-mono">
                                    Full project source code
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-green-500">
                                    <Shield size={18} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">Privacy Focused</h3>
                                    <p className="text-xs text-[hsl(var(--color-muted-foreground))]">Verify that all processing happens locally.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-blue-500">
                                    <Code size={18} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">Open Architecture</h3>
                                    <p className="text-xs text-[hsl(var(--color-muted-foreground))]">Understand how Next.js and PDF.js are integrated.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <a
                                href="/pdftheory.zip"
                                download="pdftheory.zip"
                                className="block"
                            >
                                <Button variant="primary" size="lg" className="w-full gap-3 h-14 text-lg font-bold shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98]">
                                    <Download size={22} />
                                    Download Source Code
                                </Button>
                            </a>

                            <div className="text-center">
                                <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                                    By downloading, you agree to the AGPL-3.0 License.
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Before Bottom Info Ad Slot */}
                <AdUnit slotId="source-code-pre-info" format="auto" />

                {/* Secondary Info */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="p-6 rounded-2xl bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] flex items-center gap-4">
                        <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg">
                            <Shield size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">AGPL-3.0 Licensed</p>
                            <p className="text-xs text-[hsl(var(--color-muted-foreground))]">Free as in speech and beer. Your privacy is guaranteed by open source transparency.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Ad Slot */}
                <AdUnit slotId="source-code-bottom" format="auto" />
            </div>
        </div>
    );
}
