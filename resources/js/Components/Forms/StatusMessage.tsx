import React from 'react';

interface StatusMessageProps {
    message?: string;
    type?: 'success' | 'error' | 'info';
}

export default function StatusMessage({ message, type = 'success' }: StatusMessageProps) {
    if (!message) return null;

    return (
        <div className="lux-status">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                {type === 'success' && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                )}
                {type === 'error' && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                )}
                {type === 'info' && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                )}
            </svg>
            {message}
        </div>
    );
}
