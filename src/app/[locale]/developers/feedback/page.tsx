'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    MessageSquareHeart,
    Lightbulb,
    Bug,
    Mic,
    CheckCircle2,
    Send,
    Star
} from 'lucide-react';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function FeedbackPage() {
    const locale = useLocale();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-2xl mx-auto text-center py-20">
                <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Star className="w-10 h-10 text-blue-600 dark:text-blue-400 fill-current" />
                </div>
                <h1 className="text-3xl font-bold mb-4">You're Awesome!</h1>
                <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed">
                    Thank you for helping us make pdftheory better. Your feedback has been
                    logged and will be reviewed by our product team.
                </p>
                <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="rounded-xl px-8"
                >
                    Share more feedback
                </Button>
            </div>
        );
    }

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-10">
                <Link href="/developers" className="hover:text-slate-900 dark:hover:text-white transition-colors">Docs</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-900 dark:text-slate-100 font-medium">Feedback</span>
            </div>

            <header className="mb-16">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                    Feedback & Roadmap
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                    We're building pdftheory for you. Share your ideas, report bugs, or let us
                    know what features you'd like to see next.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <div className="p-8 bg-blue-600 rounded-3xl text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-500">
                        <Lightbulb className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                            <Mic className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Feature Requests</h3>
                        <p className="text-blue-100 mb-0 leading-relaxed">
                            Something missing from our API? Tell us about the use case and we'll see if it fits
                            into our upcoming roadmap.
                        </p>
                    </div>
                </div>

                <div className="p-8 bg-slate-900 dark:bg-slate-800 rounded-3xl text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-500">
                        <Bug className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                            <Bug className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Bug Reports</h3>
                        <p className="text-slate-400 mb-0 leading-relaxed">
                            Found a glitch in the matrix? Let us know the steps to reproduce it and we'll
                            squash it as fast as possible.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl">
                <h2 id="feedback-form" className="text-2xl font-bold mb-8 pt-4 border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center gap-3">
                    <MessageSquareHeart className="w-6 h-6 text-pink-500" />
                    Share Your Thoughts
                </h2>

                <form onSubmit={handleSubmit} className="space-y-8 bg-slate-50 dark:bg-slate-900/30 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                    <div className="space-y-4">
                        <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            What kind of feedback do you have?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { id: 'feature', label: 'Feature Request', icon: Lightbulb },
                                { id: 'bug', label: 'Bug Report', icon: Bug },
                                { id: 'other', label: 'General Feedback', icon: MessageSquareHeart },
                            ].map((type) => (
                                <label key={type.id} className="cursor-pointer">
                                    <input type="radio" name="feedback-type" className="peer sr-only" defaultChecked={type.id === 'feature'} />
                                    <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex flex-col items-center gap-2 peer-checked:border-blue-500 peer-checked:ring-4 peer-checked:ring-blue-500/10 transition-all">
                                        <type.icon className="w-5 h-5 text-slate-400 peer-checked:text-blue-500" />
                                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{type.label}</span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Detail</label>
                        <textarea
                            required
                            rows={6}
                            placeholder="Tell us what's on your mind. Be as specific as you can..."
                            className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
                        ></textarea>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Your Email (Optional)</label>
                        <input
                            type="email"
                            placeholder="To get updates on your request"
                            className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
                        />
                    </div>

                    <Button type="submit" className="w-full h-14 bg-slate-900 dark:bg-blue-600 hover:bg-black dark:hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all">
                        <Send className="w-5 h-5 mr-3" />
                        Submit Feedback
                    </Button>
                </form>
            </div>
        </div>
    );
}
