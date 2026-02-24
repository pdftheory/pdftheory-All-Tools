'use client';

import React from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    Terminal,
    Box,
    ArrowRight,
    Zap,
    Info
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { CodeBlock } from '@/components/developers/CodeBlock';
import { useParams } from 'next/navigation';

export default function ApiEndpointPage() {
    const params = useParams();
    const slug = params.slug as string;
    const locale = useLocale();
    const t = useTranslations('developers');

    // These endpoints use the localized data from apiReference.endpoints
    const endpointData = t.raw(`apiReference.endpoints.${slug}`);

    if (!endpointData || !endpointData.title) {
        return (
            <div className="py-20 text-center">
                <h1 className="text-2xl font-bold mb-4">{t('apiReference.notFound.title')}</h1>
                <Link href="/developers/api-reference" className="text-blue-600 hover:underline">{t('apiReference.notFound.link')}</Link>
            </div>
        );
    }

    // Example code is still hardcoded or could be fetched from a config, 
    // but for now we'll keep the logic that uses the hardcoded API_DATA if needed, 
    // or just assume we'll pass the slug to a helper.
    // Given the structure, I'll localize the example descriptions but keep the code snippets as is for now 
    // unless they need total localization too.

    // Using a simple map for examples for now, or we could add them to JSON.
    const EXAMPLES: Record<string, string> = {
        'compress': `
const formData = new FormData();
formData.append('file', fileInput.files[0]);
formData.append('quality', 'high');

const response = await fetch('https://api.pdftheory.com/v1/compress', {
  method: 'POST',
  headers: {
    'x-api-key': 'YOUR_API_KEY'
  },
  body: formData
});

const result = await response.blob();
        `,
        'merge': `
const formData = new FormData();
files.forEach(file => formData.append('files', file));

const response = await fetch('https://api.pdftheory.com/v1/merge', {
  method: 'POST',
  headers: {
    'x-api-key': 'YOUR_API_KEY'
  },
  body: formData
});

const result = await response.blob();
        `,
        'split': `
const formData = new FormData();
formData.append('file', file);
formData.append('pages', '1-5');

const response = await fetch('https://api.pdftheory.com/v1/split', {
  method: 'POST',
  headers: {
    'x-api-key': 'YOUR_API_KEY'
  },
  body: formData
});

const result = await response.blob();
        `
    };

    const parametersMap: Record<string, any[]> = {
        'compress': [
            { name: 'file', type: 'file', required: true, desc: t('apiReference.endpoints.compress.params.file') },
            { name: 'quality', type: 'string', required: false, desc: t('apiReference.endpoints.compress.params.quality') },
        ],
        'merge': [
            { name: 'files', type: 'file[]', required: true, desc: t('apiReference.endpoints.merge.params.files') },
        ],
        'split': [
            { name: 'file', type: 'file', required: true, desc: t('apiReference.endpoints.split.params.file') },
            { name: 'pages', type: 'string', required: true, desc: t('apiReference.endpoints.split.params.pages') },
        ]
    };

    const parameters = parametersMap[slug] || [];
    const example = EXAMPLES[slug] || '';

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
                <Link href="/developers" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('breadcrumb')}</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link href="/developers/api-reference" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('apiReference.breadcrumb')}</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-900 dark:text-slate-100 font-medium">{endpointData.title}</span>
            </div>

            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                    {endpointData.title}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                    {endpointData.desc}
                </p>
            </header>

            <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2 id="endpoint" className="text-2xl font-bold mb-6 pt-4 border-b border-slate-100 dark:border-slate-800 pb-2">{t('apiReference.labels.endpoint')}</h2>
                <div className="flex items-center gap-3 p-4 bg-slate-100 dark:bg-slate-900 rounded-xl font-mono text-sm border border-slate-200 dark:border-slate-800 mb-10">
                    <span className="px-2 py-0.5 bg-blue-600 text-white rounded text-xs font-bold uppercase">Post</span>
                    <span className="text-slate-700 dark:text-slate-300">/api/v1/{slug}</span>
                </div>

                <h2 id="parameters" className="text-2xl font-bold mb-6 pt-4 border-b border-slate-100 dark:border-slate-800 pb-2">{t('apiReference.labels.parameters')}</h2>
                <div className="overflow-x-auto mb-12">
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <th className="py-4 font-semibold text-slate-900 dark:text-white w-1/4">{t('apiReference.labels.tableName')}</th>
                                <th className="py-4 font-semibold text-slate-900 dark:text-white w-1/4">{t('apiReference.labels.tableType')}</th>
                                <th className="py-4 font-semibold text-slate-900 dark:text-white">{t('apiReference.labels.tableDesc')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-slate-900">
                            {parameters.map((p, i) => (
                                <tr key={i}>
                                    <td className="py-4 font-mono text-blue-600 dark:text-blue-400">
                                        {p.name}
                                        {p.required && <span className="ml-1 text-red-500 font-sans">*</span>}
                                    </td>
                                    <td className="py-4 text-slate-500 font-mono text-xs">{p.type}</td>
                                    <td className="py-4 text-slate-600 dark:text-slate-400">{p.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 id="example" className="text-2xl font-bold mb-6 pt-4 border-b border-slate-100 dark:border-slate-800 pb-2">{t('apiReference.labels.example')}</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {t.rich('apiReference.messages.example', {
                        apiLink: (chunks) => <code>{chunks}</code>
                    })}
                </p>
                <CodeBlock
                    language="javascript"
                    filename={`${slug}.js`}
                    code={example}
                />

                <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-6 rounded-r-xl my-10 flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                        <Info className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                        <h4 className="text-amber-900 dark:text-amber-100 font-bold mb-1">{t('apiReference.labels.important')}</h4>
                        <p className="text-amber-800 dark:text-amber-200 text-sm m-0">
                            {t('apiReference.messages.sizeLimit')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20 border-t border-slate-100 dark:border-slate-800 pt-10 flex justify-between items-center text-sm text-slate-500">
                <Link href="/developers/api-reference" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    {t('apiReference.labels.back')}
                </Link>
                <div />
            </div>
        </div>
    );
}
