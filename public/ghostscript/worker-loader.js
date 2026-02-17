// standard-worker-loader.js
// This mimics the standard Ghostscript Emscripten worker implementation

self.onmessage = async function (e) {
    const { pdfData, options } = e.data;

    try {
        if (!pdfData) throw new Error('No PDF data received');
        console.log('[GS-Loader] 1. Received PDF data, size:', pdfData.byteLength);

        // Ensure Uint8Array
        const dataUint8 = new Uint8Array(pdfData);

        // Build arguments strictly
        const args = [
            '-sDEVICE=pdfwrite',
            '-dCompatibilityLevel=' + (options.compatibilityLevel || '1.4'),
            '-dNOPAUSE',
            '-dBATCH',
            '-dAutoRotatePages=/None',
            '-dDetectDuplicateImages=true',
            '-dDoThumbnails=false',
            '-sOutputFile=output.pdf'
        ];
        if (options.quality) args.splice(2, 0, '-dPDFSETTINGS=' + options.quality);
        if (options.downsampleImages) {
            args.push('-dDownsampleColorImages=true');
            args.push('-dColorImageResolution=' + (options.imageResolution || 150));
        }
        args.push('input.pdf');

        // Setup Module
        self.Module = {
            preRun: [function () {
                console.log('[GS-Loader] 4. preRun: writing file');
                try {
                    self.Module.FS.writeFile('input.pdf', dataUint8);
                } catch (e) {
                    console.error('[GS-Loader] FS write error:', e);
                }
            }],
            postRun: [function () {
                console.log('[GS-Loader] 5. postRun: reading output');
                try {
                    const FS = self.Module.FS;
                    if (FS.analyzePath('output.pdf').exists) {
                        const data = FS.readFile('output.pdf');
                        const blob = new Blob([data], { type: 'application/pdf' });
                        const url = URL.createObjectURL(blob);
                        self.postMessage({ type: 'result', data: { pdfDataURL: url } });
                        // cleanup
                        FS.unlink('input.pdf');
                        FS.unlink('output.pdf');
                    } else {
                        self.postMessage({ type: 'result', data: { error: 'Ghostscript did not produce output.pdf' } });
                    }
                } catch (e) {
                    self.postMessage({ type: 'result', data: { error: 'Read error: ' + e.message } });
                }
            }],
            print: function (text) {
                self.postMessage({ type: 'progress', data: text });
            },
            printErr: function (text) {
                console.warn('[GS-Stderr]', text);
                if (text.includes('Error') || text.includes('Fatal') || text.includes('Aborted')) {
                    self.postMessage({ type: 'result', data: { error: text } });
                }
            },
            locateFile: function (path, scriptDirectory) {
                console.log('[GS-Loader] locateFile:', path);
                if (path.endsWith('.wasm')) return '/ghostscript/gs-worker.wasm';
                return scriptDirectory + path;
            },
            arguments: args,
            noExitRuntime: true // important to keep alive for async ops if needed, though we terminate anyway
        };

        // Load script
        console.log('[GS-Loader] 3. Importing gs-worker.js');
        importScripts('gs-worker.js');

    } catch (e) {
        console.error('[GS-Loader] Fatal exception:', e);
        self.postMessage({ type: 'result', data: { error: 'Loader Exception: ' + e.message } });
    }
};
