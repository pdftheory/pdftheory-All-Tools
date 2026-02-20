import React from 'react';

interface AdUnitProps {
    slotId: string;
    format?: 'auto' | 'rectangle' | 'horizontal';
    className?: string;
}

/**
 * AdUnit component for Google AdSense Auto Ads.
 *
 * In PRODUCTION: renders nothing — Google Auto Ads injects ads automatically
 * based on the <script> tag in layout.tsx. No manual slot placement needed.
 *
 * In DEVELOPMENT: renders a visible placeholder so you can see where ads
 * would appear in the layout.
 */
export const AdUnit: React.FC<AdUnitProps> = ({ slotId, format = 'auto', className = '' }) => {
    const isDev = process.env.NODE_ENV === 'development';

    if (!isDev) {
        // Production: Google Auto Ads handles everything — render nothing
        return null;
    }

    // Development: show a clear placeholder so layout is visible
    return (
        <div
            className={`ad-container ${className} bg-gray-100 dark:bg-slate-800 border-2 border-dashed border-gray-300 dark:border-slate-700 flex flex-col items-center justify-center p-4 min-h-[100px] w-full my-8 text-center`}
        >
            <span className="text-gray-500 dark:text-gray-400 font-bold mb-1">
                Ad Slot (Auto Ads — Google Managed)
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500 font-mono bg-gray-200 dark:bg-slate-700 px-2 py-1 rounded">
                {slotId} · {format}
            </span>
        </div>
    );
};
