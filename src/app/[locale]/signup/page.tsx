'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { AlertCircle, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';

export default function SignupPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params);
    const t = useTranslations('auth');
    const router = useRouter();
    const supabase = createClient();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captchaToken, setCaptchaToken] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaToken) {
            setError(t('signup.captchaError'));
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const { error, data } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${window.location.origin}/${locale}/auth/callback`,
                    captchaToken,
                },
            });

            if (error) {
                throw error;
            }

            if (data.user && data.user.identities && data.user.identities.length === 0) {
                throw new Error(t('signup.userExists'));
            }

            setSuccess(true);
        } catch (err: any) {
            setError(err.message || t('signup.error'));
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
                    <h2 className="text-3xl font-extrabold text-gray-900">{t('signup.success.title')}</h2>
                    <p className="text-gray-600 text-lg">
                        {t.rich('signup.success.desc', {
                            email: email,
                            strong: (chunks) => <strong>{chunks}</strong>
                        })}
                    </p>
                    <p className="text-sm text-gray-500">
                        {t('signup.success.inbox')}
                    </p>
                    <div className="pt-4">
                        <Link href={`/${locale}/login`}>
                            <Button variant="outline" className="w-full h-11">
                                {t('signup.success.backButton')}
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
                        {t('signup.title')}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        {t('signup.subtitle')}
                    </p>
                </div>

                <div className="mt-8 space-y-6">

                    <form className="space-y-6" onSubmit={handleSignup}>
                        <div className="space-y-4">
                            <Input
                                label={t('signup.emailLabel')}
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('signup.placeholder.email')}
                            />

                            <Input
                                label={t('signup.passwordLabel')}
                                type="password"
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={t('signup.placeholder.password')}
                                minLength={6}
                            />
                        </div>

                        <div className="flex justify-center">
                            <Turnstile
                                siteKey="0x4AAAAAACZhc6xfIJocDmiF"
                                onSuccess={(token) => setCaptchaToken(token)}
                                onExpire={() => setCaptchaToken(undefined)}
                                onError={() => {
                                    setCaptchaToken(undefined);
                                    setError(t('signup.captchaFailed'));
                                }}
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
                            disabled={loading || !captchaToken}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                                    {t('signup.signingUp')}
                                </>
                            ) : (
                                <>
                                    {t('signup.button')}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </Button>

                        <div className="text-center text-sm">
                            <span className="text-gray-500">{t('signup.haveAccount')} </span>
                            <Link
                                href={`/${locale}/login`}>
                                <span className="font-bold text-blue-600 hover:text-blue-500 cursor-pointer">
                                    {t('signup.loginLink')}
                                </span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
