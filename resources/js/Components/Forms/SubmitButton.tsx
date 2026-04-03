import React from 'react';

interface SubmitButtonProps {
    disabled?: boolean;
    isLoading?: boolean;
    onClick?: () => void;
}

export default function SubmitButton({ 
    disabled = false, 
    isLoading = false,
    onClick 
}: SubmitButtonProps) {
    return (
        <button
            type="submit"
            disabled={disabled || isLoading}
            className="lux-button"
            aria-busy={isLoading}
            onClick={onClick}
        >
            {isLoading ? (
                <>
                    <div className="lux-spinner"></div>
                    جاري الدخول...
                </>
            ) : (
                <>
                    تسجيل الدخول
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </>
            )}
        </button>
    );
}
