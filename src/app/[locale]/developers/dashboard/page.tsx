'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Plus, Trash2, Copy, Check, Key, AlertCircle, ChevronRight } from 'lucide-react';
import { createApiKeyAction, listApiKeysAction, revokeApiKeyAction } from '@/actions/api-keys';
import { type ApiKey } from '@/lib/server/api-service';

import { useLocale, useTranslations } from 'next-intl';

export default function DashboardPage() {
    const [keys, setKeys] = useState<ApiKey[]>([]);
    const [loading, setLoading] = useState(true);
    const [newKey, setNewKey] = useState<string | null>(null);
    const [isCreating, setIsCreating] = useState(false);
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const locale = useLocale();
    const t = useTranslations('developers');

    useEffect(() => {
        loadKeys();
    }, []);

    const loadKeys = async () => {
        setLoading(true);
        const result = await listApiKeysAction();
        if (result.success && result.keys) {
            setKeys(result.keys);
        }
        setLoading(false);
    };

    const handleCreateKey = async () => {
        setIsCreating(true);
        setError(null);
        setNewKey(null);
        const name = `Key ${keys.length + 1}`;
        const result = await createApiKeyAction(name);

        if (result.success) {
            setNewKey((result as any).key);
            await loadKeys();
        } else {
            setError(result.error || t('dashboard.errors.createFailed'));
        }
        setIsCreating(false);
    };

    const handleRevokeKey = async (id: string, name: string) => {
        if (!confirm(t('dashboard.keys.revoke.confirm', { name }))) {
            return;
        }

        await revokeApiKeyAction(id);
        await loadKeys();
    };

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-10">
                <Link href="/developers" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('breadcrumb')}</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-900 dark:text-slate-100 font-medium">{t('dashboard.breadcrumb')}</span>
            </div>

            <div className="mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">{t('dashboard.title')}</h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                    {t('dashboard.subtitle')}
                </p>
            </div>

            {/* Error Display */}
            {error && (
                <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-700 dark:text-red-300">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p>{error}</p>
                </div>
            )}

            {/* New Key Modal / Display */}
            {newKey && (
                <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-xl">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
                            <Key className="w-6 h-6 text-blue-700 dark:text-blue-300" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">{t('dashboard.modals.success.title')}</h3>
                            <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
                                {t('dashboard.modals.success.desc')}
                            </p>
                            <div className="flex items-center gap-2">
                                <code className="flex-1 p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-300 dark:border-blue-700 font-mono text-sm break-all">
                                    {newKey}
                                </code>
                                <Button
                                    onClick={() => copyToClipboard(newKey)}
                                    variant="secondary"
                                    className="shrink-0"
                                >
                                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                </Button>
                            </div>
                        </div>
                        <button onClick={() => setNewKey(null)} className="text-blue-700 hover:text-blue-900">
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* API Keys List */}
            <Card className="p-6 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/40">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t('dashboard.keys.title')}</h2>
                    <Button onClick={handleCreateKey} disabled={isCreating} loading={isCreating} className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Plus className="w-4 h-4 mr-2" />
                        {t('dashboard.keys.button')}
                    </Button>
                </div>

                <div className="space-y-4">
                    {loading ? (
                        <div className="space-y-4">
                            {[1, 2].map((i) => (
                                <div key={i} className="h-20 bg-slate-100 dark:bg-slate-800 animate-pulse rounded-xl" />
                            ))}
                        </div>
                    ) : keys.length === 0 ? (
                        <div className="text-center py-12 text-slate-500">
                            <Key className="w-12 h-12 mx-auto mb-4 opacity-10" />
                            <p>{t('dashboard.keys.empty')}</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {keys.map((key) => (
                                <div
                                    key={key.id}
                                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${key.status === 'revoked'
                                        ? 'bg-slate-50 border-slate-200 opacity-60'
                                        : 'bg-white dark:bg-slate-900/60 border-slate-100 dark:border-slate-800'
                                        }`}
                                >
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-bold text-slate-900 dark:text-white">{key.name}</h3>
                                            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-md tracking-wider ${key.status === 'active'
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                : 'bg-red-100 text-red-700'
                                                }`}>
                                                {key.status === 'active' ? t('dashboard.keys.status.active') : t('dashboard.keys.status.revoked')}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-1 font-mono">
                                            {t('dashboard.keys.createdLabel', { date: new Date(key.created_at).toLocaleDateString(locale) })}
                                        </p>
                                    </div>

                                    {key.status === 'active' && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleRevokeKey(key.id, key.name)}
                                            className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/10"
                                        >
                                            <Trash2 className="w-4 h-4 mr-2" />
                                            {t('dashboard.keys.revoke.button')}
                                        </Button>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
}
