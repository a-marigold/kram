'use client';

import { Controller, useForm } from 'react-hook-form';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';

import { zodResolver } from '@hookform/resolvers/zod';

import { EmailVerificationDataSchema } from @none/shared;
import type { EmailVerificationData } from @none/shared;

import AuthForm from '@/app/authorization/(components)/AuthForm';

import { createAccountInputList } from './emailVerificationInputList';

import PrimaryInput from '@/UI/PrimaryInput';

export default function EmailVerificationForm() {
    const email = useAuthStore((state) => state.user?.email);

    const { control, handleSubmit } = useForm<EmailVerificationData>({
        resolver: zodResolver(EmailVerificationDataSchema),
        defaultValues: {
            email: email || '',

            code: '',
        },
    });

    return (
        <AuthForm
            title='Check your inbox'
            hint='Enter the verification code just sent to __EMAIL__@example.com'
            noValidate
            onSubmit={handleSubmit(() => alert('Submitted!'))}
        >
            {createAccountInputList.map((input) => (
                <Controller
                    key={input.name}
                    control={control}
                    name={input.name}
                    render={({ field, fieldState }) => (
                        <PrimaryInput
                            htmlId={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            aria-label={input.ariaLabel}
                            autoComplete={input.autoComplete}
                            errorText={fieldState.error?.message}
                            isValid={!fieldState.error?.message}
                            onChange={(event) =>
                                field.onChange(event.target.value)
                            }
                            value={field.value}
                            maxLength={input.name === 'code' ? 4 : undefined}
                        />
                    )}
                />
            ))}
        </AuthForm>
    );
}
