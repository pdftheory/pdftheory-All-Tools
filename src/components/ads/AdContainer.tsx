import React from 'react';
import { AdUnit } from './AdUnit';

interface AdContainerProps {
    slotId: string;
    className?: string;
}

export const AdContainer = ({ slotId, className = '' }: AdContainerProps) => {
    return (
        <div className={`container mx-auto px-4 my-12 ${className}`}>
            <AdUnit slotId={slotId} />
        </div>
    );
};
