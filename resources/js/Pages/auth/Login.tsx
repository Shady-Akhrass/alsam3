import React from 'react';
import { Head } from '@inertiajs/react';
import LoginForm from '../../Components/Forms/LoginForm';

interface Props {
    errors?: Record<string, string>;
    status?: string;
}

export default function Login({ errors, status }: Props) {
    return (
        <div className="lux-container">
            <Head title="تسجيل الدخول" />

            {/* Cinematic Animated Background */}
            <div className="lux-bg-elements">
                <div className="lux-orb lux-orb-1"></div>
                <div className="lux-orb lux-orb-2"></div>
                <div className="lux-noise"></div>
            </div>

            {/* Premium Glass Card */}
            <div className="lux-card-wrapper">
                <div className="lux-card">
                    <LoginForm errors={errors} status={status} />
                    
                    {/* Footer */}
                    <div className="lux-footer">
                    </div>
                </div>
            </div>
        </div>
    );
}