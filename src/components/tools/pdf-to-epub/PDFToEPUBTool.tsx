'use client';

import React from 'react';
import { PDFToFormatTool } from '../PDFToFormatTool';

export function PDFToEPUBTool() {
    return <PDFToFormatTool toolId="pdf-to-epub" outputFormat="epub" />;
}
