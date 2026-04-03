import React from 'react';

interface InputFieldProps {
    id: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
    onFocus: () => void;
    onBlur: () => void;
    placeholder: string;
    autoComplete: string;
    error?: string;
    isFocused?: boolean;
    icon: React.ReactNode;
    showClearButton?: boolean;
    onClear?: () => void;
    ariaInvalid?: boolean;
    ariaDescribedBy?: string;
}

export default function InputField({
    id,
    type,
    value,
    onChange,
    onFocus,
    onBlur,
    placeholder,
    autoComplete,
    error,
    isFocused = false,
    icon,
    showClearButton = false,
    onClear,
    ariaInvalid = false,
    ariaDescribedBy,
}: InputFieldProps) {
    return (
        <div className="lux-input-group">
            <label htmlFor={id} className="lux-label">
                {id === 'email' ? 'البريد الإلكتروني' : 'كلمة المرور'}
                {isFocused && <span className="lux-label-indicator">*</span>}
            </label>
            <div className={`lux-input-wrapper ${isFocused ? 'focused' : ''} ${error ? 'error' : ''}`}>
                <div className="lux-icon">
                    {icon}
                </div>
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className="lux-input"
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    aria-describedby={ariaDescribedBy}
                    aria-invalid={ariaInvalid}
                />
                {showClearButton && value && (
                    <button 
                        type="button"
                        className="lux-input-clear"
                        onClick={onClear}
                        aria-label={id === 'email' ? "مسح البريد الإلكتروني" : "مسح كلمة المرور"}
                    >
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>
            {error && (
                <span id={`${id}-error`} className="lux-error" role="alert">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {error}
                </span>
            )}
        </div>
    );
}
