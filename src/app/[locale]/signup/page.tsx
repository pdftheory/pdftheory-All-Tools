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
            setError('Please solve the CAPTCHA to continue');
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
                throw new Error('User already exists');
            }

            setSuccess(true);
        } catch (err: any) {
            setError(err.message || 'Failed to sign up');
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
                    <h2 className="text-3xl font-extrabold text-gray-900">Check your email</h2>
                    <p className="text-gray-600 text-lg">
                        We've sent a verification link to <strong>{email}</strong>.
                    </p>
                    <p className="text-sm text-gray-500">
                        Please check your inbox (and spam folder) to complete your registration.
                    </p>
                    <div className="pt-4">
                        <Link href={`/${locale}/login`}>
                            <Button variant="outline" className="w-full h-11">
                                Back to Sign in
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
                        Create an account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Get unlimited access to all PDF tools
                    </p>
                </div>

                <div className="mt-8 space-y-6">

                    <form className="space-y-6" onSubmit={handleSignup}>
                        <div className="space-y-4">
                            <Input
                                label="Email address"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                            />

                            <Input
                                label="Password"
                                type="password"
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="At least 6 characters"
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
                                    setError('CAPTCHA verification failed. Please try again.');
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
                                    Creating account...
                                </>
                            ) : (
                                <>
                                    Sign up
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </Button>

                        <div className="text-center text-sm">
                            <span className="text-gray-500">Already have an account? </span>
                            <Link
                                href={`/${locale}/login`}>
                                <span className="font-bold text-blue-600 hover:text-blue-500 cursor-pointer">
                                    Sign in
                                </span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
