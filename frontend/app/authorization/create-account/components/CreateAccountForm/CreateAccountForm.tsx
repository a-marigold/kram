'use client';

import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { pick } from 'zod/v4-mini';
import { RegisterDataSchema } from '@none/shared';
import type { RegisterData } from '@none/shared';

import AuthForm from '@/app/authorization/(components)/AuthForm';

import { createAccountInputList } from './createAccountInputList';

import PrimaryInput from '@/UI/PrimaryInput';

export default function CreateAccountForm() {
    const { control, handleSubmit } = useForm<
        Pick<RegisterData, 'userName' | 'password'>
    >({
        resolver: zodResolver(
            pick(RegisterDataSchema, { userName: true, password: true })
        ),
        defaultValues: {
            userName: '',
            password: '',
        },
    });

    return (
        <AuthForm
            title='Create your account'
            hint='Create a password to conitnue'
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
