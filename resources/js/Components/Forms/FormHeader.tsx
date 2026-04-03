import React from 'react';

interface FormHeaderProps {
    logoSrc?: string;
    title?: string;
    subtitle?: string;
    description?: string;
}

export default function FormHeader({
    logoSrc = "/logo/logo.png",
    title = "مرحباً بعودتك",
    subtitle = "سجّل دخولك للمتابعة إلى لوحة التحكم بأمان وسرعة",
    description = "يُرجى استخدام البريد الإلكتروني وكلمة المرور الخاصة بك."
}: FormHeaderProps) {
    return (
        <div className="lux-header">
            <div className="lux-logo-box">
                <img
                    src={logoSrc}
                    alt="AlSam3 Logo"
                    className="lux-logo"
                />
            </div>
            <h1 className="lux-title">{title}</h1>
            <p className="lux-subtitle">{subtitle}</p>
            <p className="lux-subtitle" style={{ opacity: 0.75, fontSize: '0.82rem', marginTop: '0.45rem' }}>
                {description}
            </p>
        </div>
    );
}
