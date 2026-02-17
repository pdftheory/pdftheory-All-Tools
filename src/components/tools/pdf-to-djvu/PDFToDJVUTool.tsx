'use client';

import React from 'react';
import { PDFToFormatTool } from '../PDFToFormatTool';

export function PDFToDJVUTool() {
    return <PDFToFormatTool toolId="pdf-to-djvu" outputFormat="djvu" />;
}
