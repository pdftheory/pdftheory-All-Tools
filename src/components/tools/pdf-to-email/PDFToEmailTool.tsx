'use client';

import React from 'react';
import { PDFToFormatTool } from '../PDFToFormatTool';

export function PDFToEmailTool() {
    return <PDFToFormatTool toolId="pdf-to-email" outputFormat="eml" />;
}
