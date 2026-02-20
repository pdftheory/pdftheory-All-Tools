'use client';

import React from 'react';

/**
 * Legacy provider kept as a no-op to avoid import errors.
 * Ezoic has been replaced by Google AdSense Auto Ads.
 * The AdSense script is loaded in layout.tsx.
 */
export const EzoicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <>{children}</>;
};
