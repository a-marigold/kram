'use client';

import type { ReactNode } from 'react';

import type { FormHTMLAttributes } from 'react';

import AccessButton from '@/UI/AccessButton';

import authStyles from './AuthForm.module.scss';

interface AuthFormProps {
    title: string;
    hint?: string;

    onSubmit: FormHTMLAttributes<HTMLFormElement>['onSubmit'];

    children: ReactNode;
}
export default function AuthForm({
    title,
    hint,
    onSubmit,
    children,
}: AuthFormProps) {
    return (
        <div className={authStyles['auth-form-box']}>
            <div className={authStyles['title-block']}>
                <h1 className={authStyles['title']}>{title}</h1>
                {hint && <p className={authStyles['hint']}>{hint}</p>}
            </div>

            <form onSubmit={onSubmit} className={authStyles['auth-form']}>
                {children}

                <AccessButton
                    title='Continue'
                    type='submit'
                    aria-label='Proceed to the next authorization step'
                />
            </form>
        </div>
    );
}
