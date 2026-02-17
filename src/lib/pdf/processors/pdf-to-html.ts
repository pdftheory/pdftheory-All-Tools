import { BasePDFProcessor } from '../processor';
import { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { loadPdfjs } from '@/lib/pdf/loader';

export class PDFToHTMLProcessor extends BasePDFProcessor {
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        try {
            const pdfjs = await loadPdfjs();
            const file = input.files[0];
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;

            let htmlContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${file.name}</title>
    <style>
        body { font-family: sans-serif; line-height: 1.6; padding: 40px; }
        .page { margin-bottom: 40px; border-bottom: 1px solid #ccc; padding-bottom: 20px; }
        .page-marker { color: #888; font-size: 0.8em; margin-bottom: 10px; }
    </style>
</head>
<body>
`;

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();

                htmlContent += `<div class="page" id="page-${i}">\n`;
                htmlContent += `  <div class="page-marker">Page ${i}</div>\n`;
                htmlContent += `  <div class="content">\n`;

                let lastY = -1;
                for (const item of textContent.items as any[]) {
                    // Basic heuristic for line breaks
                    if (lastY !== -1 && Math.abs(item.transform[5] - lastY) > 5) {
                        htmlContent += `<br/>\n`;
                    }
                    htmlContent += `    ${item.str} `;
                    lastY = item.transform[5];
                }

                htmlContent += `\n  </div>\n</div>\n`;

                if (onProgress) {
                    onProgress(Math.round((i / pdf.numPages) * 100), `Processing page ${i}...`);
                }
            }

            htmlContent += `</body>\n</html>`;

            const blob = new Blob([htmlContent], { type: 'text/html' });
            const filename = file.name.replace(/\.pdf$/i, '') + '.html';

            return {
                success: true,
                result: blob,
                filename,
                metadata: {
                    pageCount: pdf.numPages,
                    format: 'html'
                }
            };
        } catch (error: any) {
            return {
                success: false,
                error: error.message || 'Failed to convert PDF to HTML'
            };
        }
    }
}

export const createPDFToHTMLProcessor = () => new PDFToHTMLProcessor();
