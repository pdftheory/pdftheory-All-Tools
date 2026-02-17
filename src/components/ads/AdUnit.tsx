import React from 'react';

interface AdUnitProps {
    slotId: string;
    format?: 'auto' | 'rectangle' | 'horizontal';
    className?: string;
}

export const AdUnit: React.FC<AdUnitProps> = ({ slotId, format = 'auto', className = '' }) => {
    // In a real implementation, you would use a library like react-adsense or insert the script tag.
    // For now, we display a placeholder.

    const isDev = process.env.NODE_ENV === 'development';

    if (!isDev) {
        // In production, render the actual ad code
        return (
            <div className={`ad-container ${className} flex justify-center my-8 overflow-hidden`}>
                <ins className="adsbygoogle block"
                    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense Client ID
                    data-ad-slot={slotId}
                    data-ad-format={format}
                    data-full-width-responsive="true"></ins>
                <script>
                    {`(adsbygoogle = window.adsbygoogle || []).push({});`}
                </script>
            </div>
        )
    }

    // In development, show a clear placeholder
    return (
        <div className={`ad-container ${className} bg-gray-100 dark:bg-slate-800 border-2 border-dashed border-gray-300 dark:border-slate-700 flex flex-col items-center justify-center p-4 min-h-[100px] w-full my-8 text-center`}>
            <span className="text-gray-500 dark:text-gray-400 font-bold mb-1">Advertisement Slot</span>
            <span className="text-xs text-gray-400 dark:text-gray-500 font-mono bg-gray-200 dark:bg-slate-700 px-2 py-1 rounded">{slotId}</span>
        </div>
    );
};
