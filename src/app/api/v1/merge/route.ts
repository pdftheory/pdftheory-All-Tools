
import { NextRequest, NextResponse } from 'next/server';
import { ApiService } from '@/lib/server/api-service';
import { serverMergePdf } from '@/lib/pdf/server-merge';

export async function POST(req: NextRequest) {
    try {
        // 1. Validate API Key
        const apiKey = req.headers.get('x-api-key');

        if (!apiKey) {
            return NextResponse.json(
                { error: 'Missing API Key. Please provide x-api-key header.' },
                { status: 401 }
            );
        }

        const isValid = await ApiService.validateApiKey(apiKey);

        if (!isValid) {
            return NextResponse.json(
                { error: 'Invalid or inactive API Key.' },
                { status: 401 }
            );
        }

        // 2. Parse Files
        const formData = await req.formData();
        let files = formData.getAll('files') as File[];

        // Also check if user sent 'file' multiple times
        if (!files || files.length === 0) {
            files = formData.getAll('file') as File[];
        }

        if (!files || files.length < 2) {
            return NextResponse.json(
                { error: 'Please provide at least 2 PDF files to merge.' },
                { status: 400 }
            );
        }

        const pdfBuffers: Buffer[] = [];
        for (const file of files) {
            if (file.type !== 'application/pdf') {
                return NextResponse.json(
                    { error: `Invalid file type: ${file.name}. Only PDF is supported.` },
                    { status: 400 }
                );
            }
            const buffer = Buffer.from(await file.arrayBuffer());
            pdfBuffers.push(buffer);
        }

        // 3. Process Files
        const mergedBuffer = await serverMergePdf(pdfBuffers);

        // 4. Return Result
        return new NextResponse(mergedBuffer as any, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="merged_document.pdf"`,
            },
        });

    } catch (error) {
        console.error('Merge API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
