import React from 'react';
import InputField from './InputField';

interface PasswordFieldProps {
    value: string;
    onChange: (value: string) => void;
    onFocus: () => void;
    onBlur: () => void;
    error?: string;
    isFocused?: boolean;
    showPassword: boolean;
    onTogglePassword: () => void;
}

export default function PasswordField({
    value,
    onChange,
    onFocus,
    onBlur,
    error,
    isFocused = false,
    showPassword,
    onTogglePassword,
}: PasswordFieldProps) {
    const passwordIcon = (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
    );

    return (
        <div className="lux-input-group">
            <label htmlFor="password" className="lux-label">
                كلمة المرور
                {isFocused && <span className="lux-label-indicator">*</span>}
            </label>
            <div className={`lux-input-wrapper ${isFocused ? 'focused' : ''} ${error ? 'error' : ''}`}>
                <div className="lux-icon">
                    {passwordIcon}
                </div>
                <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className="lux-input"
                    placeholder={showPassword ? "أدخل كلمة المرور" : "••••••••"}
                    autoComplete="current-password"
                    aria-describedby={error ? "password-error" : undefined}
                    aria-invalid={!!error}
                />
                <button
                    type="button"
                    onClick={onTogglePassword}
                    className="lux-btn-icon"
                    tabIndex={-1}
                    aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                    title={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                >
                    {showPassword ? (
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    )}
                </button>
            </div>
            {error && (
                <span id="password-error" className="lux-error" role="alert">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {error}
                </span>
            )}
        </div>
    );
}
