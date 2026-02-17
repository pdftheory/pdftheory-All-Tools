'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
    Download, Mail, Globe, Shield, Zap, Users, CheckCircle,
    ArrowRight, Layers, Type, Palette, Copy, Check, FileText,
    Image as ImageIcon, Share2, Facebook, Twitter, Linkedin
} from 'lucide-react';
import { AdUnit } from '@/components/ads/AdUnit';

// Since we are using client components for interactivity (Tabs), we can't use async params directly for locale
// But we can accept them as props if we were a server component. 
// Hybrid approach: pass params to a Client Component or make this a Client Component.
// Given strict "use client" for interactivity, we'll wrap the logic.

export default function PressPage(props: { params: Promise<{ locale: string }> }) {
    const params = use(props.params);
    return <PressPageContent locale={params.locale} />;
}

function PressPageContent({ locale }: { locale: string }) {
    const [messages, setMessages] = useState<{ [key: string]: boolean }>({});
    const [activeTab, setActiveTab] = useState<'kit' | 'gallery' | 'facts'>('kit');

    const copyToClipboard = (text: string, key: string) => {
        navigator.clipboard.writeText(text);
        setMessages({ ...messages, [key]: true });
        setTimeout(() => setMessages({ ...messages, [key]: false }), 2000);
    };

    // Constructing a Real Vector Logo (SVG) as a string to allow download
    const logoSvgString = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="120" fill="#2563EB"/>
  <path d="M160 360V152L352 256L160 360Z" fill="white"/>
</svg>`;
    const vectorLogoUrl = `data:image/svg+xml;base64,${Buffer.from(logoSvgString).toString('base64')}`;

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900 pb-20">
            {/* Top Ad Slot - Compact */}
            <div className="bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 py-2">
                    <AdUnit
                        slotId="press-top-banner"
                        format="horizontal"
                        className="mx-auto max-w-5xl"
                    />
                </div>
            </div>

            {/* Immersive Hero Section - Reduced Spacing */}
            <section className="relative bg-[#0F172A] text-white overflow-hidden pb-16 pt-24 lg:pt-32 lg:pb-24">
                {/* Abstract Backdrop */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-blue-300 mb-6 backdrop-blur-md uppercase tracking-widest">
                        Official Media Resources
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight leading-none text-white">
                        Tell the <span className="text-blue-500">pdftheory</span> Story
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light mb-8">
                        Access official brand assets, high-fidelity product mockups, and the latest news about our privacy-first browser technology.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => document.getElementById('digital-kit')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/40"
                        >
                            Open Digital Press Kit
                        </button>
                    </div>
                </div>
            </section>

            {/* Digital Press Kit - Interactive & Tabbed */}
            <section id="digital-kit" className="py-16 bg-white border-b border-gray-200">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900">Digital Press Kit</h2>
                            <p className="text-slate-500">Everything you need, organized in one place.</p>
                        </div>
                        <div className="flex p-1 bg-slate-100 rounded-lg self-start">
                            {[
                                { id: 'kit', label: 'Brand Assets', icon: Download },
                                { id: 'gallery', label: 'Media Gallery', icon: ImageIcon },
                                { id: 'facts', label: 'Fact Sheet', icon: FileText },
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === tab.id
                                        ? 'bg-white text-blue-600 shadow-sm'
                                        : 'text-slate-500 hover:text-slate-700'
                                        }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* TAB CONTENT: BRAND ASSETS */}
                    {activeTab === 'kit' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 space-y-12">
                            {/* Logos Row */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <Card className="p-8 border-gray-100 shadow-lg hover:shadow-xl transition-shadow bg-slate-50/50">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.969-1.485L12 11l-2.969-1.485L12 11zm8.031-4.016L12 3.485 3.969 7.499 12 11.515l8.031-4.016zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900">Primary Logo</h3>
                                                <p className="text-sm text-slate-500">The main mark. Use whenever possible.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <a href={vectorLogoUrl} download="pdftheory-logo.svg" className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-600 font-semibold text-sm transition-colors group">
                                            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                                            Download SVG
                                        </a>
                                        <a href="/Logo.png" download="pdftheory-logo.png" className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-600 font-semibold text-sm transition-colors group">
                                            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                                            Download PNG
                                        </a>
                                    </div>
                                </Card>

                                <Card className="p-8 border-gray-100 shadow-lg hover:shadow-xl transition-shadow bg-slate-900 text-white">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center">
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="w-8 h-8 opacity-90"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.969-1.485L12 11l-2.969-1.485L12 11zm8.031-4.016L12 3.485 3.969 7.499 12 11.515l8.031-4.016zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">Monochrome</h3>
                                                <p className="text-sm text-slate-400">For dark backgrounds.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <a href={vectorLogoUrl} download="pdftheory-logo-white.svg" className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 font-semibold text-sm transition-colors group">
                                            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                                            Download SVG
                                        </a>
                                        <a href="/Logo.png" download="pdftheory-logo-white.png" className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 font-semibold text-sm transition-colors group">
                                            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                                            Download PNG
                                        </a>
                                    </div>
                                </Card>
                            </div>

                            {/* Colors Section */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Palette className="w-5 h-5 text-gray-400" /> Brand Colors
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { name: "Theory Blue", hex: "#2563EB", bg: "bg-blue-600", text: "text-white" },
                                        { name: "Slate Dark", hex: "#0F172A", bg: "bg-slate-900", text: "text-white" },
                                        { name: "Success", hex: "#16A34A", bg: "bg-green-600", text: "text-white" },
                                        { name: "Error", hex: "#DC2626", bg: "bg-red-600", text: "text-white" },
                                    ].map((color) => (
                                        <button
                                            key={color.hex}
                                            onClick={() => copyToClipboard(color.hex, color.hex)}
                                            className={`group relative flex flex-col justify-between p-4 h-32 rounded-xl shadow-sm hover:shadow-md transition-all text-left w-full ring-1 ring-black/5 ${color.bg}`}
                                        >
                                            <div className="flex justify-between items-start w-full">
                                                <span className={`text-xs font-bold uppercase opacity-80 ${color.text === 'text-white' ? 'text-white' : 'text-slate-900'}`}>{color.name}</span>
                                                {messages[color.hex] ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />}
                                            </div>
                                            <span className={`text-lg font-mono font-bold ${color.text === 'text-white' ? 'text-white' : 'text-slate-900'}`}>{color.hex}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB CONTENT: MEDIA GALLERY */}
                    {activeTab === 'gallery' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="group relative rounded-xl overflow-hidden aspect-video bg-gray-100 shadow-sm hover:shadow-xl transition-all cursor-zoom-in">
                                    <Image src="/images/workflow-illustration.png" alt="Workflow" fill className="object-cover" />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                                        <a href="/images/workflow-illustration.png" download className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform">Download High-Res</a>
                                    </div>
                                </div>
                                <div className="group relative rounded-xl overflow-hidden aspect-video bg-gray-100 shadow-sm hover:shadow-xl transition-all cursor-zoom-in">
                                    <Image src="/images/business-hero.jpg" alt="Business" fill className="object-cover" />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                                        <a href="/images/business-hero.jpg" download className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform">Download High-Res</a>
                                    </div>
                                </div>
                                <div className="group relative rounded-xl overflow-hidden aspect-video bg-gray-100 shadow-sm hover:shadow-xl transition-all cursor-zoom-in">
                                    <Image src="/images/education-hero.jpg" alt="Education" fill className="object-cover" />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                                        <a href="/images/education-hero.jpg" download className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform">Download High-Res</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB CONTENT: FACT SHEET */}
                    {activeTab === 'facts' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <Card className="p-8 border-gray-100 shadow-sm max-w-3xl mx-auto">
                                <h3 className="text-xl font-bold mb-6">Company Boilerplate</h3>
                                <div className="relative bg-slate-50 p-6 rounded-xl border border-gray-100 group">
                                    <p className="text-slate-600 leading-relaxed font-mono text-sm">
                                        "pdftheory is the world's leading browser-based PDF utility platform. By processing files locally using WebAssembly technology, pdftheory offers privacy-first document management without uploads or server-side risks. Founded in 2024, the platform provides 110 free tools to millions of users worldwide."
                                    </p>
                                    <button
                                        onClick={() => copyToClipboard("pdftheory is the world's leading browser-based PDF utility platform. By processing files locally using WebAssembly technology, pdftheory offers privacy-first document management without uploads or server-side risks. Founded in 2024, the platform provides 110 free tools to millions of users worldwide.", 'boilerplate')}
                                        className="absolute top-4 right-4 p-2 bg-white rounded-md shadow-sm border border-gray-200 hover:bg-gray-50 text-slate-500"
                                    >
                                        {messages['boilerplate'] ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                                <div className="mt-12 pt-12 border-t border-gray-100">
                                    <h3 className="text-xl font-bold mb-6">Key Facts & Statistics</h3>
                                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                                        {[
                                            { label: "Founded", value: "2024" },
                                            { label: "Headquarters", value: "Remote / Global" },
                                            { label: "Core Technology", value: "Client-Side WASM" },
                                            { label: "Privacy Model", value: "Zero Server Uploads" },
                                            { label: "Total Tools", value: "110" },
                                            { label: "Pricing", value: "100% Free / Open" },
                                            { label: "Supported Platforms", value: "All Modern Browsers" },
                                            { label: "User Registration", value: "Not Required" },
                                        ].map((fact, i) => (
                                            <div key={i} className="flex items-center justify-between border-b border-gray-50 pb-2">
                                                <span className="text-slate-500 text-sm font-medium">{fact.label}</span>
                                                <span className="text-slate-900 font-bold">{fact.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    )}

                </div>
            </section>

            {/* In The News / Social Proof */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">As Featured In</p>
                    <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Featured Logos (Placeholders) */}
                        <div className="text-2xl font-black text-slate-400 flex items-center gap-2"><Globe className="w-6 h-6" /> TechCrunch</div>
                        <div className="text-2xl font-black text-slate-400 flex items-center gap-2"><Zap className="w-6 h-6" /> ProductHunt</div>
                        <div className="text-2xl font-black text-slate-400 flex items-center gap-2"><Shield className="w-6 h-6" /> CyberNews</div>
                        <div className="text-2xl font-black text-slate-400 flex items-center gap-2"><Layers className="w-6 h-6" /> HackerNews</div>
                    </div>
                </div>
            </section>

            {/* Company Story / Impact Cards */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">Our Story</span>
                        <h2 className="text-4xl font-black text-slate-900">About pdftheory</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1: Who are we? */}
                        <Card className="p-8 border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-slate-50/50">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Who are we?</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                pdftheory is a forward-thinking software collective dedicated to building the web's most powerful privacy-first document tools. We are a team of engineers passionate about open web technologies.
                            </p>
                        </Card>

                        {/* Card 2: What do we do? */}
                        <Card className="p-8 border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-slate-50/50">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">What do we do?</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                We engineer high-performance, client-side PDF utilities that run entirely in your browser using advanced WebAssembly. We simplify complex document tasks without expensive software.
                            </p>
                        </Card>

                        {/* Card 3: Helping millions worldwide */}
                        <Card className="p-8 border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-slate-50/50">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Helping People Globally</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                pdftheory is designed to be fast, reliable, and secure, handling everything from everyday document tasks to large-scale workflows.
                            </p>
                        </Card>

                        {/* Card 4: Privacy First (The suitable extra) */}
                        <Card className="p-8 border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-slate-50/50">
                            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-6 text-rose-600">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Privacy at the Core</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                We believe utility shouldn't cost privacy. Our Zero-Upload architecture means we never see, store, or touch your documents—they stay on your device, always.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact Footer */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Media Inquiries</h2>
                    <p className="text-slate-600 mb-8">For interviews, detailed specs, or specific asset requests.</p>
                    <a href="mailto:press@pdftheory.com" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
                        <Mail className="w-5 h-5" /> Contact Press Relations
                    </a>
                </div>
            </section>

        </main>
    );
}

// Helper to allow using Buffer in client side if needed (usually polyfilled in Next.js, but if not we can use btoa)
declare var Buffer: any;
