'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { AlertCircle, ArrowRight, Loader2 } from 'lucide-react';

export default function LoginPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params);
    const t = useTranslations('auth'); // Assuming auth translations exist, or fallback to hardcoded for now
    const router = useRouter();
    const supabase = createClient();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                throw error;
            }

            router.push(`/${locale}/dashboard`);
            router.refresh();
        } catch (err: any) {
            setError(err.message || 'Failed to sign in');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                    <Link href={`/${locale}`} className="inline-block mb-6">
                        <span className="text-2xl font-black text-blue-600">pdftheory</span>
                    </Link>
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        {t('login.title')}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        {t('login.subtitle')}
                    </p>
                </div>

                <div className="mt-8 space-y-6">

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="space-y-4">
                            <Input
                                label={t('login.emailLabel')}
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('login.placeholder.email')}
                            />

                            <div className="space-y-1">
                                <Input
                                    label={t('login.passwordLabel')}
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder={t('login.placeholder.password')}
                                />
                                <div className="flex justify-end">
                                    <Link
                                        href={`/${locale}/forgot-password`}
                                        className="text-xs font-medium text-blue-600 hover:text-blue-500"
                                    >
                                        {t('login.forgotPassword')}
                                    </Link>
                                </div>
                            </div>
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
                                    {t('login.signingIn')}
                                </>
                            ) : (
                                <>
                                    {t('login.button')}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </Button>

                        <div className="text-center text-sm">
                            <span className="text-gray-500">{t('login.noAccount')} </span>
                            <Link
                                href={`/${locale}/signup`}
                                className="font-bold text-blue-600 hover:text-blue-500"
                            >
                                {t('login.signupLink')}
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
