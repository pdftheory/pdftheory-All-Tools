/**
 * PDF Compression Processor
 * Requirements: 5.1
 * 
 * Implements PDF compression functionality using PyMuPDF (via Pyodide).
 * Supports multiple compression levels:
 * - Standard: Balanced quality/size with image optimization
 * - Legacy: Safe, lossless garbage collection only
 * - Extreme: Maximum compression using page rasterization
 */

import type {
    ProcessInput,
    ProcessOutput,
    ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';

/**
 * Compression quality levels
 */

/**
 * Compression quality levels
 * - standard: Balanced (Recommended)
 * - high: Maximum compression (removes blanks/duplicates)
 * - low: Minimal compression (preserves quality)
 */
export type CompressionQuality = 'standard' | 'high' | 'low';

/**
 * Compress PDF options
 */
export interface CompressPDFOptions {
    /** Compression quality level */
    quality: CompressionQuality;
    /** Image quality for JPEG compression (0-100) */
    imageQuality?: number;
    /** Target DPI for image downsampling */
    targetDpi?: number;
    /** Whether to optimize images */
    optimizeImages?: boolean;
    /** Remove blank pages */
    removeBlankPages?: boolean;
    /** Remove duplicate pages */
    removeDuplicatePages?: boolean;
    /** Flatten form fields */
    flattenForms?: boolean;
    /** Remove metadata */
    removeMetadata?: boolean;
}

/**
 * Default compression options
 */
const DEFAULT_COMPRESS_OPTIONS: CompressPDFOptions = {
    quality: 'standard',
    imageQuality: 75,
    targetDpi: 150,
    optimizeImages: true,
    removeBlankPages: true,
    removeDuplicatePages: true,
    flattenForms: false,
    removeMetadata: false,
};

/**
 * Compress PDF Processor
 * Compresses PDF files using advanced PyMuPDF optimization
 */
export class CompressPDFProcessor extends BasePDFProcessor {
    /**
     * Process PDF file and compress it
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;

        // Map legacy options if necessary or just apply defaults
        const rawOptions = options as Partial<CompressPDFOptions>;

        // Define profiles based on quality selection if specific flags aren't provided
        let profileOptions: Partial<CompressPDFOptions> = {};

        if (rawOptions.quality === 'high') {
            profileOptions = {
                imageQuality: 50,
                targetDpi: 120,
                removeBlankPages: true,
                removeDuplicatePages: true,
                flattenForms: true,
                removeMetadata: true
            };
        } else if (rawOptions.quality === 'low') {
            profileOptions = {
                imageQuality: 90,
                targetDpi: 300,
                removeBlankPages: false,
                removeDuplicatePages: false,
                flattenForms: false,
                removeMetadata: false
            };
        } else {
            // Standard/Recommended
            profileOptions = {
                imageQuality: 75,
                targetDpi: 150,
                removeBlankPages: true,
                removeDuplicatePages: true,
                flattenForms: false,
                removeMetadata: false
            };
        }

        const compressOptions: CompressPDFOptions = {
            ...DEFAULT_COMPRESS_OPTIONS,
            ...profileOptions,
            ...rawOptions, // specific overrides take precedence
        };

        // Validate we have exactly 1 file
        if (files.length !== 1) {
            return this.createErrorOutput(
                PDFErrorCode.INVALID_OPTIONS,
                'Please provide exactly one PDF file to compress.',
                `Received ${files.length} file(s).`
            );
        }

        const file = files[0];
        const originalSize = file.size;

        try {
            this.updateProgress(5, 'Loading compression engine...');

            const { loadPyMuPDF } = await import('../pymupdf-loader');
            const pymupdf = await loadPyMuPDF();

            if (this.checkCancelled()) return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Operation cancelled.');

            this.updateProgress(20, 'Reading PDF file...');

            const arrayBuffer = await file.arrayBuffer();
            const pdfData = new Uint8Array(arrayBuffer);
            pymupdf.pyodide.FS.writeFile('/input.pdf', pdfData);

            this.updateProgress(30, 'Analyzing content...');

            if (this.checkCancelled()) return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Operation cancelled.');

            // Ensure Pillow is available for image optimization
            try {
                await pymupdf.pyodide.runPythonAsync(`
                    try:
                        from PIL import Image
                    except ImportError:
                        raise ImportError("Pillow not found")
                `);
            } catch {
                // Pillow missing, try to load it manually
                console.warn('Pillow not found in Pyodide, attempting fallback load...');
                try {
                    const basePath = `${window.location.origin}/pymupdf-wasm/`;
                    await pymupdf.pyodide.loadPackage(`${basePath}pillow-11.2.1-cp313-cp313-pyodide_2025_0_wasm32.whl`);
                } catch (e) {
                    console.error('Failed to fallback load Pillow:', e);
                }
            }

            // Prepare Python variables
            const pythonParams = {
                remove_blank: compressOptions.removeBlankPages ? 'True' : 'False',
                remove_dupes: compressOptions.removeDuplicatePages ? 'True' : 'False',
                compress_images: compressOptions.optimizeImages ? 'True' : 'False',
                img_dpi: compressOptions.targetDpi || 150,
                jpeg_quality: compressOptions.imageQuality || 75,
                remove_meta: compressOptions.removeMetadata ? 'True' : 'False',
                flatten: compressOptions.flattenForms ? 'True' : 'False',
            };

            // Run the advanced compression script
            const result = await pymupdf.pyodide.runPythonAsync(`
import pymupdf
import base64
import hashlib
import io

try:
    from PIL import Image
    PILLOW_AVAILABLE = True
except ImportError:
    PILLOW_AVAILABLE = False

def is_page_blank(page):
    """Check if a page is essentially blank"""
    try:
        # Check text (allow very small amount of noise)
        text = page.get_text().strip()
        if len(text) > 10: return False
        
        # Check drawings (lines, rectangles, etc)
        if len(page.get_drawings()) > 2: return False
        
        # Check images
        if len(page.get_images()) > 0: return False
        
        return True
    except:
        return False

def get_page_hash(page):
    """Generate content hash for duplicate detection"""
    try:
        content = [
            page.get_text().strip(),
            str(len(page.get_images())),
            str(len(page.get_drawings()))
        ]
        # Add signatures of first 5 images
        for img in page.get_images()[:5]:
            content.append(str(img[1:4]))
            
        return hashlib.md5("|".join(content).encode()).hexdigest()
    except:
        return None

def optimize_image(doc, xref, dpi, quality):
    """Optimize a single image"""
    if not PILLOW_AVAILABLE: return False
    try:
        img_info = doc.extract_image(xref)
        if not img_info: return False
        
        image_bytes = img_info["image"]
        
        # Skip very small images (1KB)
        if len(image_bytes) < 1024: return False
        
        img = Image.open(io.BytesIO(image_bytes))
        
        # Check if resize needed
        max_dim = dpi * 11 # Approx for A4
        if img.width > max_dim or img.height > max_dim:
            ratio = min(max_dim/img.width, max_dim/img.height)
            new_size = (int(img.width * ratio), int(img.height * ratio))
            img = img.resize(new_size, Image.Resampling.LANCZOS)
        
        output = io.BytesIO()
        
        # Convert to RGB/JPEG if applicable
        if img_info["ext"] in ['jpx', 'jpg', 'jpeg'] or img.mode == 'RGB':
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            img.save(output, format='JPEG', quality=quality, optimize=True)
        else:
            # Keep other formats but optimize
            img.save(output, format=img.format or 'PNG', optimize=True)
            
        new_bytes = output.getvalue()
        
        if len(new_bytes) < len(image_bytes):
            doc.update_stream(xref, new_bytes)
            return True
        return False
    except:
        return False

# Main Process
input_pdf = pymupdf.open('/input.pdf')
output_doc = pymupdf.open()

# Settings
REMOVE_BLANK = ${pythonParams.remove_blank}
REMOVE_DUPES = ${pythonParams.remove_dupes}
COMPRESS_IMGS = ${pythonParams.compress_images}
TARGET_DPI = ${pythonParams.img_dpi}
JPEG_QUAL = ${pythonParams.jpeg_quality}
REMOVE_META = ${pythonParams.remove_meta}

pages_to_keep = []
seen_hashes = set()

# Pass 1: Analyze and Filter Pages
for i in range(len(input_pdf)):
    page = input_pdf[i]
    
    if REMOVE_BLANK and is_page_blank(page):
        continue
        
    if REMOVE_DUPES:
        phash = get_page_hash(page)
        if phash and phash in seen_hashes:
            continue
        if phash: seen_hashes.add(phash)
        
    pages_to_keep.append(i)

# Pass 2: Rebuild Document
for i in pages_to_keep:
    output_doc.insert_pdf(input_pdf, from_page=i, to_page=i)

# Pass 3: Optimize Content
count_found = 0
count_opt = 0

if COMPRESS_IMGS and PILLOW_AVAILABLE:
    for i in range(len(output_doc)):
        page = output_doc[i]
        for img in page.get_images():
            count_found += 1
            if optimize_image(output_doc, img[0], TARGET_DPI, JPEG_QUAL):
                count_opt += 1

if REMOVE_META:
    output_doc.set_metadata({})

# Save with maximum compression settings
output_doc.save('/output.pdf', garbage=4, deflate=True, clean=True)
output_doc.close()
input_pdf.close()

with open('/output.pdf', 'rb') as f:
    pdf_b64 = base64.b64encode(f.read()).decode('utf-8')

import json
debug_info = {
    "pillow_available": PILLOW_AVAILABLE,
    "remove_blank": REMOVE_BLANK,
    "remove_dupes": REMOVE_DUPES,
    "compress_images": COMPRESS_IMGS,
    "dpi": TARGET_DPI,
    "quality": JPEG_QUAL,
    "images_found": count_found,
    "images_optimized": count_opt
}

json.dumps(debug_info) + "|||" + pdf_b64
`);

            this.updateProgress(90, 'Finalizing...');

            // Cleanup
            try {
                pymupdf.pyodide.FS.unlink('/input.pdf');
                pymupdf.pyodide.FS.unlink('/output.pdf');
            } catch { }

            const [debugJson, resultB64] = result.split('|||');

            // Log PROMINENTLY for debugging
            console.warn('--------------------------------------------------');
            console.warn('COMPRESSION DEBUG INFO:');
            console.warn(debugJson); // Log raw string first
            try {
                console.warn(JSON.stringify(JSON.parse(debugJson), null, 2));
            } catch (e) {
                console.warn('Failed to parse debug JSON:', e);
            }
            console.warn('--------------------------------------------------');

            const binary = atob(resultB64);
            const bytes = new Uint8Array(binary.length);
            for (let i = 0; i < binary.length; i++) {
                bytes[i] = binary.charCodeAt(i);
            }

            const compressedSize = bytes.length;
            const blob = new Blob([bytes], { type: 'application/pdf' });

            // Calculate ratio
            const ratio = originalSize > 0
                ? ((originalSize - compressedSize) / originalSize) * 100
                : 0;

            const outputFilename = generateCompressedFilename(file.name);

            return this.createSuccessOutput(blob, outputFilename, {
                originalSize,
                compressedSize,
                compressionRatio: ratio.toFixed(1),
                quality: compressOptions.quality,
            });

        } catch (error) {
            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                'Failed to compress PDF file.',
                error instanceof Error ? error.message : 'Unknown error'
            );
        }
    }

    /**
     * Get accepted file types for compress processor
     */
    protected getAcceptedTypes(): string[] {
        return ['application/pdf'];
    }
}

/**
 * Generate a filename for the compressed PDF
 */
function generateCompressedFilename(originalName: string): string {
    const lastDot = originalName.lastIndexOf('.');
    const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
    return `${baseName}_compressed.pdf`;
}

/**
 * Create a new instance of the compress processor
 */
export function createCompressProcessor(): CompressPDFProcessor {
    return new CompressPDFProcessor();
}

/**
 * Compress a PDF file (convenience function)
 */
export async function compressPDF(
    file: File,
    options?: Partial<CompressPDFOptions>,
    onProgress?: ProgressCallback
): Promise<ProcessOutput> {
    const processor = createCompressProcessor();
    return processor.process(
        {
            files: [file],
            options: options || {},
        },
        onProgress
    );
}
