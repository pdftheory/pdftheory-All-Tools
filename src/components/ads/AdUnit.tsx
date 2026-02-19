import React from 'react';

interface AdUnitProps {
    slotId: string;
    ezoicId?: string;
    format?: 'auto' | 'rectangle' | 'horizontal';
    className?: string;
}

export const AdUnit: React.FC<AdUnitProps> = ({ slotId, ezoicId, format = 'auto', className = '' }) => {
    const isDev = process.env.NODE_ENV === 'development';

    if (!isDev) {
        if (ezoicId) {
            return (
                <div className={`ad-container ${className} flex justify-center my-8`}>
                    <div id={`ezoic-pub-ad-placeholder-${ezoicId}`}></div>
                </div>
            );
        }
        return (
            <div className={`ad-container ${className} flex justify-center my-8 overflow-hidden`}>
                <ins className="adsbygoogle block"
                    data-ad-client="ca-pub-6644558441501035"
                    data-ad-slot={slotId}
                    data-ad-format={format}
                    data-full-width-responsive="true"></ins>
                <script dangerouslySetInnerHTML={{ 
                    __html: '(adsbygoogle = window.adsbygoogle || []).push({});' 
                }} />
            </div>
        )
    }

    return (
        <div className={`ad-container ${className} bg-gray-100 dark:bg-slate-800 border-2 border-dashed border-gray-300 dark:border-slate-700 flex flex-col items-center justify-center p-4 min-h-[100px] w-full my-8 text-center`}>
            <span className="text-gray-500 dark:text-gray-400 font-bold mb-1">
                {ezoicId ? 'Ezoic Ad Placeholder' : 'Advertisement Slot'}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500 font-mono bg-gray-200 dark:bg-slate-700 px-2 py-1 rounded">
                {ezoicId ? `ezoic-pub-ad-placeholder-${ezoicId}` : slotId}
            </span>
        </div>
    );
};
