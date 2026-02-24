'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { AlertCircle, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

export default function ResetPasswordPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params);
    const t = useTranslations('auth');
    const router = useRouter();
    const supabase = createClient();

    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // Check if we have a session (Supabase handles this after email click)
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                // If no session, they might have navigated here directly
                // Supabase typically handles the session after the redirect from the email link
                // but we can add a check or just let the update fail
            }
        };
        checkSession();
    }, [supabase.auth]);

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.updateUser({
                password: password,
            });

            if (error) {
                throw error;
            }

            setSuccess(true);
        } catch (err: any) {
            setError(err.message || t('resetPassword.error'));
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900">{t('resetPassword.success.title')}</h2>
                    <p className="text-gray-600 text-lg">
                        {t('resetPassword.success.desc')}
                    </p>
                    <div className="pt-4">
                        <Link href={`/${locale}/login`}>
                            <Button className="w-full h-11">
                                {t('resetPassword.success.button')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                    <Link href={`/${locale}`} className="inline-block mb-6">
                        <span className="text-2xl font-black text-blue-600">pdftheory</span>
                    </Link>
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        {t('resetPassword.title')}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        {t('resetPassword.subtitle')}
                    </p>
                </div>

                <div className="mt-8 space-y-6">
                    <form className="space-y-6" onSubmit={handleUpdatePassword}>
                        <div className="space-y-4">
                            <Input
                                label={t('resetPassword.passwordLabel')}
                                type="password"
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={t('resetPassword.placeholder')}
                                minLength={6}
                            />
                        </div>

                        {error && (
                            <div className="rounded-lg bg-red-50 p-4 flex items-start gap-3">
                                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full h-11 text-base shadow-lg shadow-blue-500/20"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                                    {t('resetPassword.updating')}
                                </>
                            ) : (
                                <>
                                    {t('resetPassword.button')}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
