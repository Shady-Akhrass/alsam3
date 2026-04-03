import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import RememberMeCheckbox from './RememberMeCheckbox';
import SubmitButton from './SubmitButton';
import FormHeader from './FormHeader';
import StatusMessage from './StatusMessage';
import Skeleton, { SkeletonConfigs } from '../UI/Skeleton';

interface LoginFormWithSkeletonProps {
    errors?: Record<string, string>;
    status?: string;
    initialLoading?: boolean;
}

export default function LoginFormWithSkeleton({ 
    errors, 
    status, 
    initialLoading = false 
}: LoginFormWithSkeletonProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(initialLoading);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
    const [isInitialLoad, setIsInitialLoad] = useState(initialLoading);

    const { data, setData, post, processing, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    // Simulate initial loading
    useEffect(() => {
        if (initialLoading) {
            const timer = setTimeout(() => {
                setIsInitialLoad(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [initialLoading]);

    const validateEmail = (email: string): string | null => {
        if (!email || email.length === 0) {
            return 'البريد الإلكتروني مطلوب';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return 'البريد الإلكتروني غير صحيح';
        if (email.length > 255) return 'البريد الإلكتروني طويل جداً';
        return null;
    };

    const validatePassword = (password: string): string | null => {
        if (!password || password.length === 0) {
            return 'كلمة المرور مطلوبة';
        }
        if (password.length < 8) return 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
        if (password.length > 128) return 'كلمة المرور طويلة جداً';
        return null;
    };

    const validateField = (field: string, value: string) => {
        let error = null;
        
        if (field === 'email') {
            error = validateEmail(value);
        } else if (field === 'password') {
            error = validatePassword(value);
        }

        setFieldErrors(prev => ({
            ...prev,
            [field]: error || ''
        }));

        return error;
    };

    const handleInputChange = (field: string, value: string | boolean) => {
        setData(field as keyof typeof data, value);
        
        if (errors?.[field]) {
            setFieldErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }

        if (touchedFields.has(field) && typeof value === 'string') {
            validateField(field, value);
        }
    };

    const handleFieldFocus = (field: string) => {
        setFocusedField(field);
    };

    const handleFieldBlur = (field: string) => {
        setFocusedField(null);
        setTouchedFields(prev => new Set([...prev, field]));
        
        if (field === 'email' || field === 'password') {
            const value = data[field as keyof typeof data] as string;
            validateField(field, value);
        }
    };

    const handleClearField = (field: string) => {
        setData(field as keyof typeof data, '');
        setFieldErrors(prev => ({
            ...prev,
            [field]: ''
        }));
        setTouchedFields(prev => {
            const newSet = new Set(prev);
            newSet.delete(field);
            return newSet;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const emailError = validateEmail(data.email);
        const passwordError = validatePassword(data.password);
        
        const newFieldErrors: Record<string, string> = {};
        if (emailError) newFieldErrors.email = emailError;
        if (passwordError) newFieldErrors.password = passwordError;
        
        setFieldErrors(newFieldErrors);
        
        if (Object.keys(newFieldErrors).length === 0) {
            setIsLoading(true);
            post('/login', {
                onFinish: () => {
                    reset('password');
                    setIsLoading(false);
                    setTouchedFields(new Set());
                    setFieldErrors({});
                },
                onError: () => {
                    setIsLoading(false);
                },
            });
        }
    };

    const getDisplayError = (field: string) => {
        return errors?.[field] || fieldErrors[field] || '';
    };

    // Custom skeleton configuration for login form
    const loginSkeletonConfig = {
        blocks: [
            {
                width: '60px',
                height: '60px',
                margin: '0 auto 2rem auto',
                borderRadius: '50%',
            },
            {
                lines: [
                    { width: '80%', height: '1.5rem', margin: '0 auto 0.5rem auto' },
                    { width: '60%', height: '1rem', margin: '0 auto 2rem auto' },
                ],
            },
        ],
        lines: [
            { height: '3rem', margin: '0 0 1.5rem 0', borderRadius: '0.5rem' },
            { height: '3rem', margin: '0 0 1.5rem 0', borderRadius: '0.5rem' },
            { height: '2rem', margin: '0 0 1rem 0', borderRadius: '0.25rem' },
            { height: '3rem', margin: '0 0 0 0', borderRadius: '0.5rem' },
        ],
        layout: 'vertical' as const,
        animation: 'shimmer' as const,
        className: 'lux-form',
    };

    return (
        <Skeleton loading={isInitialLoad} {...loginSkeletonConfig}>
            <form onSubmit={handleSubmit} className="lux-form" noValidate>
                <FormHeader />
                
                <StatusMessage message={status} type="success" />

                <EmailField
                    value={data.email}
                    onChange={(value) => handleInputChange('email', value)}
                    onFocus={() => handleFieldFocus('email')}
                    onBlur={() => handleFieldBlur('email')}
                    error={getDisplayError('email')}
                    isFocused={focusedField === 'email'}
                    onClear={() => handleClearField('email')}
                />

                <PasswordField
                    value={data.password}
                    onChange={(value) => handleInputChange('password', value)}
                    onFocus={() => handleFieldFocus('password')}
                    onBlur={() => handleFieldBlur('password')}
                    error={getDisplayError('password')}
                    isFocused={focusedField === 'password'}
                    showPassword={showPassword}
                    onTogglePassword={() => setShowPassword(!showPassword)}
                />

                <RememberMeCheckbox
                    checked={data.remember}
                    onChange={(checked) => handleInputChange('remember', checked)}
                />

                <SubmitButton
                    disabled={processing}
                    isLoading={isLoading}
                />
            </form>
        </Skeleton>
    );
}
