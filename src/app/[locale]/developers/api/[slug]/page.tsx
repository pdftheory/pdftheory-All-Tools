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
import { useLocale } from 'next-intl';
import { CodeBlock } from '@/components/developers/CodeBlock';
import { useParams } from 'next/navigation';

const API_DATA: Record<string, any> = {
    'compress': {
        title: 'Compress PDF',
        desc: 'Reduced the file size of a PDF document while preserving quality.',
        endpoint: 'POST /api/v1/compress',
        parameters: [
            { name: 'file', type: 'file', required: true, desc: 'The PDF file to compress.' },
            { name: 'quality', type: 'string', required: false, desc: 'Compression level: low, medium, high. Default is medium.' },
        ],
        example: `
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
        `
    },
    'merge': {
        title: 'Merge PDFs',
        desc: 'Combine multiple PDF documents into a single file.',
        endpoint: 'POST /v1/merge',
        parameters: [
            { name: 'files', type: 'file[]', required: true, desc: 'Array of PDF files to merge.' },
        ],
        example: `
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
        `
    },
    'split': {
        title: 'Split PDF',
        desc: 'Extract specific pages or ranges from a PDF document.',
        endpoint: 'POST /v1/split',
        parameters: [
            { name: 'file', type: 'file', required: true, desc: 'The PDF file to split.' },
            { name: 'pages', type: 'string', required: true, desc: 'Page ranges (e.g., "1-3, 5, 8-10").' },
        ],
        example: `
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
    }
};

export default function ApiEndpointPage() {
    const params = useParams();
    const slug = params.slug as string;
    const locale = useLocale();
    const data = API_DATA[slug];

    if (!data) {
        return (
            <div className="py-20 text-center">
                <h1 className="text-2xl font-bold mb-4">Endpoint not found</h1>
                <Link href="/developers/api-reference" className="text-blue-600 hover:underline">Return to API Reference</Link>
            </div>
        );
    }

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
                <Link href="/developers" className="hover:text-slate-900 dark:hover:text-white transition-colors">Docs</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link href="/developers/api-reference" className="hover:text-slate-900 dark:hover:text-white transition-colors">API Reference</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-900 dark:text-slate-100 font-medium">{data.title}</span>
            </div>

            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                    {data.title}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                    {data.desc}
                </p>
            </header>

            <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2 id="endpoint" className="text-2xl font-bold mb-6 pt-4 border-b border-slate-100 dark:border-slate-800 pb-2">Endpoint</h2>
                <div className="flex items-center gap-3 p-4 bg-slate-100 dark:bg-slate-900 rounded-xl font-mono text-sm border border-slate-200 dark:border-slate-800 mb-10">
                    <span className="px-2 py-0.5 bg-blue-600 text-white rounded text-xs font-bold uppercase">Post</span>
                    <span className="text-slate-700 dark:text-slate-300">/api/v1/{slug}</span>
                </div>

                <h2 id="parameters" className="text-2xl font-bold mb-6 pt-4 border-b border-slate-100 dark:border-slate-800 pb-2">Parameters</h2>
                <div className="overflow-x-auto mb-12">
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <th className="py-4 font-semibold text-slate-900 dark:text-white w-1/4">Name</th>
                                <th className="py-4 font-semibold text-slate-900 dark:text-white w-1/4">Type</th>
                                <th className="py-4 font-semibold text-slate-900 dark:text-white">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-slate-900">
                            {data.parameters.map((p: any, i: number) => (
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

                <h2 id="example" className="text-2xl font-bold mb-6 pt-4 border-b border-slate-100 dark:border-slate-800 pb-2">Implementation Example</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Use our standard multipart/form-data interface to process files. Ensure you include your
                    <code>x-api-key</code> in the request headers.
                </p>
                <CodeBlock
                    language="javascript"
                    filename={`${slug}.js`}
                    code={data.example}
                />

                <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-6 rounded-r-xl my-10 flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                        <Info className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                        <h4 className="text-amber-900 dark:text-amber-100 font-bold mb-1">Important Notice</h4>
                        <p className="text-amber-800 dark:text-amber-200 text-sm m-0">
                            Maximum file size is currently 50MB. If you need to process larger files,
                            please contact our enterprise sales team.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20 border-t border-slate-100 dark:border-slate-800 pt-10 flex justify-between items-center text-sm text-slate-500">
                <Link href="/developers/api-reference" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Back to Reference
                </Link>
                <div />
            </div>
        </div>
    );
}
