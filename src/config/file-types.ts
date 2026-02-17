/**
 * Accepted file extensions for the workflow file picker.
 * Includes all formats supported by the various tools.
 */
export const WORKFLOW_ACCEPTED_EXTENSIONS = [
    // PDF
    '.pdf',
    'application/pdf',

    // Documents
    '.doc', '.docx', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.ppt', '.pptx', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    '.xls', '.xlsx', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.rtf', 'application/rtf',
    '.txt', 'text/plain',
    '.html', '.htm', 'text/html',
    '.xml', 'text/xml', 'application/xml',
    '.json', 'application/json',
    '.xps', 'application/vnd.ms-xpsdocument',

    // Images
    '.jpg', '.jpeg', 'image/jpeg',
    '.png', 'image/png',
    '.webp', 'image/webp',
    '.heic', '.heif', 'image/heic', 'image/heif',
    '.bmp', 'image/bmp',
    '.tiff', '.tif', 'image/tiff',
    '.svg', 'image/svg+xml',
    '.psd', '.psb', 'image/vnd.adobe.photoshop',

    // E-books
    '.epub', 'application/epub+zip',
    '.mobi', 'application/x-mobipocket-ebook',
    '.azw', '.azw3', 'application/vnd.amazon.ebook',
    '.fb2', '.fb2.zip', 'application/x-fb2',
    '.djvu', '.djv', 'image/vnd.djvu',

    // Archives/Comics
    '.cbz', 'application/vnd.comicbook+zip',
    '.cbr', 'application/vnd.comicbook-rar',
    '.zip', 'application/zip', 'application/x-zip-compressed'
].join(',');
