'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    Settings, User, Bell, Globe, Palette, Save,
    Cpu, Shield, Layout, Zap, Clock, Check,
    ArrowRight, Info, AlertCircle, Loader2
} from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

interface SettingsPageClientProps {
    user: any;
    locale: string;
}

// Settings storage key
const SETTINGS_KEY = 'pdftheory_user_settings';

interface UserSettings {
    compressionLevel: string;
    autoLinearize: boolean;
    historyPurge: string;
    toolDisplay: string;
    notifications: {
        usage: boolean;
        alerts: boolean;
        newsletter: boolean;
    };
}

const defaultSettings: UserSettings = {
    compressionLevel: 'medium',
    autoLinearize: true,
    historyPurge: '30',
    toolDisplay: 'grid',
    notifications: {
        usage: true,
        alerts: false,
        newsletter: true
    }
};

export default function SettingsPageClient({ user, locale }: SettingsPageClientProps) {
    const router = useRouter();
    const [isSaving, setIsSaving] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    // Form States
    const [displayName, setDisplayName] = useState(user.user_metadata?.full_name || user.email?.split('@')[0] || '');
    const [language, setLanguage] = useState(locale);
    const [compressionLevel, setCompressionLevel] = useState(defaultSettings.compressionLevel);
    const [autoLinearize, setAutoLinearize] = useState(defaultSettings.autoLinearize);
    const [historyPurge, setHistoryPurge] = useState(defaultSettings.historyPurge);
    const [notifications, setNotifications] = useState(defaultSettings.notifications);
    const [toolDisplay, setToolDisplay] = useState(defaultSettings.toolDisplay);

    // Load settings from localStorage on mount
    useEffect(() => {
        try {
            const savedSettings = localStorage.getItem(SETTINGS_KEY);
            if (savedSettings) {
                const parsed: UserSettings = JSON.parse(savedSettings);
                setCompressionLevel(parsed.compressionLevel || defaultSettings.compressionLevel);
                setAutoLinearize(parsed.autoLinearize ?? defaultSettings.autoLinearize);
                setHistoryPurge(parsed.historyPurge || defaultSettings.historyPurge);
                setToolDisplay(parsed.toolDisplay || defaultSettings.toolDisplay);
                setNotifications(parsed.notifications || defaultSettings.notifications);
            }
        } catch (e) {
            console.error('Error loading settings:', e);
        }
        setIsLoaded(true);
    }, []);

    const handleSave = async () => {
        setIsSaving(true);
        setError('');

        try {
            const supabase = createClient();

            // Update user metadata (display name) in Supabase
            const { error: updateError } = await supabase.auth.updateUser({
                data: { full_name: displayName }
            });

            if (updateError) {
                throw new Error(updateError.message);
            }

            // Save settings to localStorage
            const settings: UserSettings = {
                compressionLevel,
                autoLinearize,
                historyPurge,
                toolDisplay,
                notifications
            };
            localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));

            // Handle language change
            if (language !== locale) {
                // Redirect to the new locale
                const currentPath = window.location.pathname;
                const newPath = currentPath.replace(`/${locale}`, `/${language}`);
                router.push(newPath);
                return; // Don't show success since we're redirecting
            }

            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch (err: any) {
            setError(err.message || 'Failed to save settings');
        } finally {
            setIsSaving(false);
        }
    };

    const Toggle = ({ active, onToggle, label }: { active: boolean, onToggle: () => void, label: string }) => (
        <div
            onClick={onToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onToggle()}
            className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-transparent hover:border-gray-100 transition-all cursor-pointer group"
        >
            <span className="font-bold text-gray-700 group-hover:text-black transition-colors">{label}</span>
            <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${active ? 'bg-[hsl(var(--color-primary))]' : 'bg-gray-200'}`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${active ? 'right-1' : 'left-1'}`} />
            </div>
        </div>
    );

    if (!isLoaded) {
        return (
            <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
            </div>
        );
    }

    return (
        <div className="max-w-4xl space-y-10 pb-20">
            {/* Header with Save Status */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200">
                            <Settings className="w-6 h-6" />
                        </div>
                        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Settings</h1>
                    </div>
                    <p className="text-gray-500 max-w-xl text-lg font-medium leading-relaxed">
                        Control your PDF processing environment and workspace behavior.
                    </p>
                </div>

                <div className="flex flex-col items-end gap-2">
                    {error && (
                        <div className="flex items-center gap-2 text-rose-600 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            <span>{error}</span>
                        </div>
                    )}
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className={`flex items-center gap-3 px-8 py-4 ${success ? 'bg-emerald-500' : 'bg-[hsl(var(--color-primary))]'} text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50`}
                    >
                        {isSaving ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : success ? (
                            <Check className="w-4 h-4" />
                        ) : (
                            <Save className="w-4 h-4" />
                        )}
                        {success ? 'Saved!' : isSaving ? 'Saving...' : 'Apply Changes'}
                    </button>
                </div>
            </header>

            {/* Profile Section */}
            <section className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-3 mb-8">
                    <User className="w-5 h-5 text-gray-400" />
                    <h2 className="text-xl font-bold text-gray-900">Personal Identity</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-10">
                    <div className="relative group shrink-0">
                        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
                            <div className="w-full h-full bg-white rounded-[1.35rem] flex items-center justify-center text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-500">
                                {displayName?.[0]?.toUpperCase() || 'P'}
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Display Name</label>
                                <input
                                    type="text"
                                    value={displayName}
                                    placeholder="Enter display name"
                                    title="Display Name"
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-2xl text-sm font-bold text-gray-700 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                                <input
                                    type="email"
                                    value={user.email}
                                    placeholder="Email address"
                                    title="Email Address (Cannot be changed here)"
                                    disabled
                                    className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-2xl text-sm font-bold text-gray-400 cursor-not-allowed italic"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1 space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Preferred Language</label>
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-2xl text-sm font-bold text-gray-700 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                                    title="Choose your workspace language"
                                >
                                    <option value="en">English</option>
                                    <option value="es">Español</option>
                                    <option value="fr">Français</option>
                                    <option value="de">Deutsch</option>
                                    <option value="ar">العربية</option>
                                </select>
                                {language !== locale && (
                                    <p className="text-xs text-amber-600 font-medium">Saving will redirect you to the selected language.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PDF Processing Section */}
            <section className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <Cpu className="w-5 h-5 text-gray-400" />
                        <h2 className="text-xl font-bold text-gray-900">Processing Engine</h2>
                    </div>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full">Active</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Default Compression Level</label>
                            <div className="grid grid-cols-3 gap-2">
                                {['low', 'medium', 'high'].map((level) => (
                                    <button
                                        key={level}
                                        onClick={() => setCompressionLevel(level)}
                                        className={`py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${compressionLevel === level
                                            ? 'bg-gray-900 text-white shadow-lg'
                                            : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                                    >
                                        {level}
                                    </button>
                                ))}
                            </div>
                            <p className="text-[10px] text-gray-400 font-medium leading-relaxed">High compression results in smaller files but may affect graphic quality.</p>
                        </div>

                        <Toggle
                            active={autoLinearize}
                            onToggle={() => setAutoLinearize(!autoLinearize)}
                            label="Fast Web View (Linearize)"
                        />
                    </div>

                    <div className="bg-gray-50 p-6 rounded-3xl border border-dashed border-gray-200">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-white rounded-xl shadow-sm">
                                <Info className="w-4 h-4 text-indigo-500" />
                            </div>
                            <div>
                                <h4 className="text-xs font-black text-gray-900 uppercase tracking-tight mb-1">Settings Info</h4>
                                <p className="text-[11px] text-gray-500 leading-relaxed">These preferences are stored locally and apply to all PDF tools. Processing always happens in your browser for maximum privacy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
                    <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-gray-400" />
                        <h2 className="text-xl font-bold text-gray-900">Privacy Hub</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Activity History Retention</label>
                            <select
                                value={historyPurge}
                                onChange={(e) => setHistoryPurge(e.target.value)}
                                className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-2xl text-sm font-bold text-gray-700 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all"
                                title="Set your data retention policy"
                            >
                                <option value="7">7 Days</option>
                                <option value="30">30 Days (Recommended)</option>
                                <option value="90">90 Days</option>
                                <option value="0">Forever</option>
                            </select>
                        </div>

                        <p className="text-[10px] text-gray-400 font-medium italic">All processed files stay in your browser and are never uploaded to servers.</p>
                    </div>
                </section>

                <section className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
                    <div className="flex items-center gap-3">
                        <Layout className="w-5 h-5 text-gray-400" />
                        <h2 className="text-xl font-bold text-gray-900">Workspace</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="flex border-b border-gray-50 pb-4 justify-between items-center">
                            <span className="text-sm font-bold text-gray-700">Tool Library Display</span>
                            <div className="flex bg-gray-50 p-1 rounded-xl">
                                {['grid', 'list'].map((mode) => (
                                    <button
                                        key={mode}
                                        onClick={() => setToolDisplay(mode)}
                                        className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase transition-all ${toolDisplay === mode ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}
                                    >
                                        {mode}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Toggle
                            active={notifications.usage}
                            onToggle={() => setNotifications({ ...notifications, usage: !notifications.usage })}
                            label="Email Usage Reports"
                        />
                    </div>
                </section>
            </div>

            {/* Footer Status */}
            <div className="flex items-center justify-center p-8 bg-gray-900 text-white rounded-[2.5rem] shadow-2xl overflow-hidden relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[hsl(var(--color-primary))] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-6 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-emerald-400" />
                    </div>
                    <p className="text-xs font-bold text-gray-400 tracking-tight">Settings are stored locally on your device for privacy.</p>
                    <Link href={`/${locale}/dashboard/security`} className="text-xs font-black text-[hsl(var(--color-primary))] uppercase tracking-widest hover:underline flex items-center gap-1">
                        Security Hub <ArrowRight className="w-3 h-3" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
