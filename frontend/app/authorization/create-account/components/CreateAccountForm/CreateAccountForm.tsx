'use client';

import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { RegisterDataSchema } from '@none/shared/AuthorizationData';
import type { RegisterData } from '@none/shared/AuthorizationData';

import AuthForm from '@/app/authorization/(components)/AuthForm';

import { createAccountInputList } from './createAccountInputList';

import PrimaryInput from '@/UI/PrimaryInput';

export default function CreateAccountForm() {
    const { control, handleSubmit, watch } = useForm<RegisterData>({
        resolver: zodResolver(RegisterDataSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    console.log(watch('email'), watch('password'));

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
