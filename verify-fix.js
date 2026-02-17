
import { PDFDocument } from 'pdf-lib';
import { GridCombineProcessor } from './src/lib/pdf/processors/grid-combine.ts';

async function createPDF(pages = 1) {
    const doc = await PDFDocument.create();
    for (let i = 0; i < pages; i++) {
        doc.addPage([600, 800]);
    }
    const bytes = await doc.save();
    return new File([bytes], 'test.pdf', { type: 'application/pdf' });
}

// Mock browser File if needed (though it's in modern Node)
if (typeof File === 'undefined') {
    global.File = class extends Blob {
        constructor(parts, filename, options) {
            super(parts, options);
            this.name = filename;
            this.lastModified = Date.now();
        }
    };
}

async function run() {
    console.log('Starting verification...');
    const processor = new GridCombineProcessor();

    const file1 = await createPDF(1);
    const file2 = await createPDF(1);

    console.log('Files created. Processing...');

    const result = await processor.process({
        files: [file1, file2],
        options: {
            gridLayout: '2x1',
            pageMode: 'first-page-only'
        }
    }, (p, m) => console.log(`Progress: ${p}% ${m || ''}`));

    if (result.success) {
        console.log('SUCCESS: Generated grid PDF');
        console.log('Metadata:', JSON.stringify(result.metadata, null, 2));
    } else {
        console.error('FAILED:', result.error);
        process.exit(1);
    }
}

run().catch(err => {
    console.error('CRASH:', err);
    process.exit(1);
});
