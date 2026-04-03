import React from 'react';
import InputField from './InputField';

interface EmailFieldProps {
    value: string;
    onChange: (value: string) => void;
    onFocus: () => void;
    onBlur: () => void;
    error?: string;
    isFocused?: boolean;
    onClear?: () => void;
}

export default function EmailField({
    value,
    onChange,
    onFocus,
    onBlur,
    error,
    isFocused = false,
    onClear,
}: EmailFieldProps) {
    const emailIcon = (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );

    return (
        <InputField
            id="email"
            type="email"
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder="example@email.com"
            autoComplete="username"
            error={error}
            isFocused={isFocused}
            icon={emailIcon}
            showClearButton={true}
            onClear={onClear}
            ariaInvalid={!!error}
            ariaDescribedBy={error ? "email-error" : undefined}
        />
    );
}
