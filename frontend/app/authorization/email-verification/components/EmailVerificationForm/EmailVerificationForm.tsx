'use client';

import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { EmailVerificationDataSchema } from 'shared';
import type { EmailVerificationData } from 'shared';

import AuthForm from '@/app/authorization/(components)/AuthForm';

import { createAccountInputList } from './emailVerificationInputList';

import PrimaryInput from '@/UI/PrimaryInput';

export default function EmailVerificationForm() {
    const { control, handleSubmit } = useForm<EmailVerificationData>({
        resolver: zodResolver(EmailVerificationDataSchema),
        defaultValues: {
            email: '__EMAIL__',
            code: '',
        },
    });

    return (
        <AuthForm
            title='Check your inbox'
            hint='Enter a verification code we sent to __EMAIL__.'
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
                        />
                    )}
                />
            ))}
        </AuthForm>
    );
}
