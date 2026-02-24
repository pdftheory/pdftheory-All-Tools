'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, Smartphone, Fingerprint, Eye, EyeOff, Loader2, CheckCircle2, AlertCircle, X, Monitor } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/components/providers/AuthProvider';
import { useTranslations } from 'next-intl';

interface SecurityPageClientProps {
    locale: string;
}

interface SessionInfo {
    browser: string;
    os: string;
    lastActive: string;
    location?: string;
}

export const SecurityPageClient = ({ locale }: SecurityPageClientProps) => {
    const t = useTranslations('dashboard.security');
    const { user } = useAuth();
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [passwordLoading, setPasswordLoading] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [passwordSuccess, setPasswordSuccess] = useState(false);
    const [sessionInfo, setSessionInfo] = useState<SessionInfo | null>(null);

    // Get browser and OS info
    useEffect(() => {
        const getBrowserInfo = () => {
            const ua = navigator.userAgent;
            let browser = t('session.unknown');
            let os = t('session.unknown');

            // Detect browser
            if (ua.includes('Firefox')) browser = 'Firefox';
            else if (ua.includes('Edg')) browser = 'Microsoft Edge';
            else if (ua.includes('Chrome')) browser = 'Chrome';
            else if (ua.includes('Safari')) browser = 'Safari';
            else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';

            // Detect OS
            if (ua.includes('Windows NT 10')) os = 'Windows 10/11';
            else if (ua.includes('Windows')) os = 'Windows';
            else if (ua.includes('Mac OS X')) os = 'macOS';
            else if (ua.includes('Linux')) os = 'Linux';
            else if (ua.includes('Android')) os = 'Android';
            else if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';

            setSessionInfo({
                browser,
                os,
                lastActive: t('session.activeNow'),
            });
        };

        getBrowserInfo();
    }, [t]);

    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault();
        setPasswordError('');
        setPasswordSuccess(false);

        // Validation
        if (newPassword.length < 8) {
            setPasswordError(t('errors.minLength'));
            return;
        }

        if (newPassword !== confirmPassword) {
            setPasswordError(t('errors.match'));
            return;
        }

        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword)) {
            setPasswordError(t('errors.format'));
            return;
        }

        setPasswordLoading(true);

        try {
            const supabase = createClient();

            // Supabase updateUser to change password
            const { error } = await supabase.auth.updateUser({
                password: newPassword
            });

            if (error) {
                setPasswordError(error.message);
            } else {
                setPasswordSuccess(true);
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
                // Close modal after 2 seconds on success
                setTimeout(() => {
                    setShowPasswordModal(false);
                    setPasswordSuccess(false);
                }, 2000);
            }
        } catch (err: any) {
            setPasswordError(err.message || t('session.unknown'));
        } finally {
            setPasswordLoading(false);
        }
    };

    const handleSignOutAll = async () => {
        try {
            const supabase = createClient();
            await supabase.auth.signOut({ scope: 'global' });
            window.location.href = `/${locale}/login`;
        } catch (err) {
            console.error('Error signing out:', err);
        }
    };

    const closeModal = () => {
        setShowPasswordModal(false);
        setPasswordError('');
        setPasswordSuccess(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Password Section */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <Lock className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{t('credentials.title')}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                        {t('credentials.subtitle')}
                    </p>
                    <div className="space-y-4 pt-2">
                        <button
                            onClick={() => setShowPasswordModal(true)}
                            className="w-full py-4 bg-gray-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-gray-800 transition-all shadow-md"
                        >
                            {t('credentials.button')}
                        </button>
                    </div>
                </div>

                {/* 2FA Section */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                            <Smartphone className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{t('enhanced.title')}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                        {t('enhanced.subtitle')}
                    </p>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                        <div className="flex items-center gap-3">
                            <Fingerprint className="w-5 h-5 text-gray-400" />
                            <span className="text-sm font-bold text-gray-700">{t('enhanced.tfa')}</span>
                        </div>
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest rounded-full">
                            {t('enhanced.comingSoon')}
                        </span>
                    </div>
                </div>
            </div>

            {/* Current Session */}
            <div className="mt-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-gray-900">{t('session.title')}</h3>
                    <p className="text-xs text-emerald-500 font-bold uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">{t('session.status')}</p>
                </div>

                <div className="flex items-center gap-6 p-6 border border-gray-50 rounded-2xl bg-gray-50/30">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-gray-900 shadow-sm border border-gray-100">
                        <Monitor className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                        <p className="text-lg font-bold text-gray-900">
                            {sessionInfo ? `${sessionInfo.os} • ${sessionInfo.browser}` : t('session.loading')}
                        </p>
                        <p className="text-sm text-gray-400 font-medium">
                            {sessionInfo?.lastActive || t('session.loading')}
                            {user?.email && ` • ${user.email}`}
                        </p>
                    </div>
                    <button
                        onClick={handleSignOutAll}
                        className="text-xs font-black text-rose-500 uppercase tracking-widest hover:underline"
                    >
                        {t('session.signOut')}
                    </button>
                </div>
            </div>

            {/* Account Info */}
            <div className="mt-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{t('accountInfo.title')}</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                        <span className="text-sm font-bold text-gray-600">{t('accountInfo.email')}</span>
                        <span className="text-sm font-medium text-gray-900">{user?.email || t('accountInfo.notAvailable')}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                        <span className="text-sm font-bold text-gray-600">{t('accountInfo.created')}</span>
                        <span className="text-sm font-medium text-gray-900">
                            {user?.created_at ? new Date(user.created_at).toLocaleDateString(locale, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            }) : t('accountInfo.notAvailable')}
                        </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                        <span className="text-sm font-bold text-gray-600">{t('accountInfo.lastSignIn')}</span>
                        <span className="text-sm font-medium text-gray-900">
                            {user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString(locale, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            }) : t('accountInfo.notAvailable')}
                        </span>
                    </div>
                </div>
            </div>

            {/* Password Change Modal */}
            {showPasswordModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900">{t('modal.title')}</h2>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="p-2 text-gray-400 hover:text-gray-900 transition-colors rounded-xl hover:bg-gray-100"
                                    title={t('modal.close')}
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {passwordSuccess ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('modal.successTitle')}</h3>
                                    <p className="text-sm text-gray-500">{t('modal.successDesc')}</p>
                                </div>
                            ) : (
                                <form onSubmit={handlePasswordChange} className="space-y-4">
                                    {passwordError && (
                                        <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-sm">
                                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                            <span>{passwordError}</span>
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                            {t('modal.newPassword')}
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showNewPassword ? 'text' : 'password'}
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                className="w-full px-4 py-3 pr-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm font-medium"
                                                placeholder={t('modal.placeholders.new')}
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                title={showNewPassword ? t('modal.aria.hide') : t('modal.aria.show')}
                                            >
                                                {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-1">{t('modal.requirements')}</p>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                            {t('modal.confirmPassword')}
                                        </label>
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm font-medium"
                                            placeholder={t('modal.placeholders.confirm')}
                                            required
                                        />
                                    </div>

                                    <div className="flex gap-3 pt-4">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="flex-1 py-3 border border-gray-200 text-gray-700 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gray-50 transition-all"
                                        >
                                            {t('modal.cancel')}
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={passwordLoading}
                                            className="flex-1 py-3 bg-gray-900 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {passwordLoading ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    <span>{t('modal.updating')}</span>
                                                </>
                                            ) : (
                                                t('modal.update')
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
