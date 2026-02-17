
import { NextRequest, NextResponse } from 'next/server';
import { ApiService } from '@/lib/server/api-service';
import { serverCompressPdf } from '@/lib/pdf/server-compress';

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

        // 2. Parse File
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided.' },
                { status: 400 }
            );
        }

        if (file.type !== 'application/pdf') {
            return NextResponse.json(
                { error: 'Invalid file type. Only PDF is supported.' },
                { status: 400 }
            );
        }

        // 3. Process File
        const buffer = Buffer.from(await file.arrayBuffer());
        const compressedBuffer = await serverCompressPdf(buffer);

        // 4. Return Result
        return new NextResponse(compressedBuffer as any, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="compressed_${file.name}"`,
            },
        });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
