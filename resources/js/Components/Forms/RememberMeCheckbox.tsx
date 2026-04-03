import React from 'react';

interface RememberMeCheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export default function RememberMeCheckbox({ checked, onChange }: RememberMeCheckboxProps) {
    return (
        <div className="lux-options">
            <label className="lux-checkbox-label">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className="lux-checkbox"
                />
                <span className="lux-checkbox-text">تذكر بيانات الدخول</span>
            </label>
            <a href="/forgot-password" className="lux-forgot-link" tabIndex={0}>
                نسيت كلمة المرور؟
            </a>
        </div>
    );
}
