// Ghostscript Worker Wrapper
// This runs inside the Web Worker

self.onmessage = async function (e) {
    const { fileUrl, options } = e.data;

    try {
        console.log('[GS-Wrapper] Starting processing for:', fileUrl);

        // 1. Fetch the input PDF
        const response = await fetch(fileUrl);
        if (!response.ok) throw new Error(`Failed to fetch PDF: ${response.status} ${response.statusText}`);

        const arrayBuffer = await response.arrayBuffer();
        const pdfData = new Uint8Array(arrayBuffer);

        console.log('[GS-Wrapper] PDF fetched, size:', pdfData.length);

        // 2. Build Ghostscript Arguments
        const args = [
            '-sDEVICE=pdfwrite',
            '-dCompatibilityLevel=' + (options.compatibilityLevel || '1.4'),
            '-dNOPAUSE',
            '-dBATCH',
            '-sOutputFile=output.pdf'
        ];

        if (options.quality) {
            args.splice(2, 0, '-dPDFSETTINGS=' + options.quality);
        }

        if (options.downsampleImages) {
            args.push('-dDownsampleColorImages=true');
            args.push('-dColorImageResolution=' + (options.imageResolution || 150));
        }

        args.push('input.pdf');

        console.log('[GS-Wrapper] Arguments:', args);

        // 3. Configure Emscripten Module
        self.Module = {
            preRun: [
                function () {
                    console.log('[GS-Wrapper] FS: Writing input.pdf');
                    try {
                        self.Module.FS.writeFile('input.pdf', pdfData);
                    } catch (e) {
                        console.error('[GS-Wrapper] FS Error:', e);
                        self.postMessage({ type: 'result', data: { error: 'FS Write Error: ' + e.message } });
                    }
                }
            ],
            postRun: [
                function () {
                    console.log('[GS-Wrapper] PostRun: Reading output.pdf');
                    try {
                        const FS = self.Module.FS;
                        if (FS.analyzePath('output.pdf').exists) {
                            const uarray = FS.readFile('output.pdf', { encoding: 'binary' });
                            const blob = new Blob([uarray], { type: 'application/pdf' });
                            const pdfDataURL = URL.createObjectURL(blob); // Note: created in worker context

                            self.postMessage({ type: 'result', data: { pdfDataURL } });

                            // Cleanup
                            try {
                                FS.unlink('input.pdf');
                                FS.unlink('output.pdf');
                            } catch (e) { }
                        } else {
                            self.postMessage({ type: 'result', data: { error: 'Output PDF was not created by Ghostscript.' } });
                        }
                    } catch (e) {
                        console.error('[GS-Wrapper] Output Read Error:', e);
                        self.postMessage({ type: 'result', data: { error: 'Output Read Error: ' + e.message } });
                    }
                }
            ],
            arguments: args,
            print: function (text) {
                // console.log('[GS-Stdout]', text);
                self.postMessage({ type: 'progress', data: text });
            },
            printErr: function (text) {
                console.warn('[GS-Stderr]', text);
                if (text.includes('Error') || text.includes('Fatal') || text.includes('Aborted')) {
                    self.postMessage({ type: 'result', data: { error: text } });
                }
            },
            // Force locating the WASM file correctly
            locateFile: function (path, scriptDirectory) {
                if (path.endsWith('.wasm')) {
                    return '/ghostscript/gs-worker.wasm';
                }
                return scriptDirectory + path;
            },
            noExitRuntime: true
        };

        // 4. Load the Ghostscript Engine
        // This will trigger execution using the Module config above
        console.log('[GS-Wrapper] Importing gs-worker.js');
        importScripts('gs-worker.js');
        console.log('[GS-Wrapper] Import complete');

    } catch (e) {
        console.error('[GS-Wrapper] Fatal Error:', e);
        self.postMessage({ type: 'result', data: { error: 'Worker Fatal Error: ' + e.message } });
    }
};
