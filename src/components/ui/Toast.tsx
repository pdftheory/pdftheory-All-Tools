'use client';

import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
    id: string;
    message: string;
    variant?: ToastVariant;
    duration?: number;
    onClose: (id: string) => void;
}

const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-green-500" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
};

const variantStyles = {
    success: 'border-green-100 bg-green-50/80 text-green-900 shadow-green-100/20',
    error: 'border-red-100 bg-red-50/80 text-red-900 shadow-red-100/20',
    warning: 'border-amber-100 bg-amber-50/80 text-amber-900 shadow-amber-100/20',
    info: 'border-blue-100 bg-blue-50/80 text-blue-900 shadow-blue-100/20',
};

export const Toast: React.FC<ToastProps> = ({
    id,
    message,
    variant = 'info',
    duration = 5000,
    onClose,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Animate in
        const timer = setTimeout(() => setIsVisible(true), 10);

        // Auto close
        if (duration !== Infinity) {
            const closeTimer = setTimeout(() => {
                setIsVisible(false);
                setTimeout(() => onClose(id), 300); // Wait for exit animation
            }, duration);
            return () => {
                clearTimeout(timer);
                clearTimeout(closeTimer);
            };
        }
        return () => clearTimeout(timer);
    }, [id, duration, onClose]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => onClose(id), 300);
    };

    return (
        <div
            className={cn(
                'group pointer-events-auto relative flex w-full max-w-sm items-center gap-3 overflow-hidden rounded-2xl border p-4 shadow-lg transition-all duration-300 ease-out',
                variantStyles[variant],
                isVisible
                    ? 'translate-x-0 opacity-100 scale-100'
                    : 'translate-x-10 opacity-0 scale-95',
                'backdrop-blur-md'
            )}
            role="alert"
        >
            <div className="flex-shrink-0">{icons[variant]}</div>
            <div className="flex-1 text-sm font-medium leading-tight">
                {message}
            </div>
            <button
                onClick={handleClose}
                className="flex-shrink-0 ml-2 rounded-lg p-1 text-current/40 hover:text-current hover:bg-current/10 transition-colors"
                aria-label="Close"
            >
                <X className="w-4 h-4" />
            </button>

            {/* Progress bar for auto-close */}
            {duration !== Infinity && (
                <div
                    className={cn(
                        'absolute bottom-0 left-0 h-0.5 bg-current/10 transition-all linear',
                        isVisible ? 'w-full' : 'w-0'
                    )}
                    style={{ transitionDuration: `${duration}ms` }}
                />
            )}
        </div>
    );
};
