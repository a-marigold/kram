'use client';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { LoginDataSchema } from 'shared';
import type { LoginData } from 'shared';

import AuthForm from '@/app/authorization/(components)/AuthForm';

import { loginInputList } from './loginInputList';

import PrimaryInput from '@/UI/PrimaryInput';

export default function LoginForm() {
    const { control, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(LoginDataSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    return (
        <AuthForm
            title='Enter your password'
            noValidate
            onSubmit={handleSubmit(() => alert('logged in success!'))}
        >
            {loginInputList.map((input) => (
                <Controller
                    key={input.name}
                    control={control}
                    name={input.name}
                    render={({ field, fieldState }) => (
                        <PrimaryInput
                            htmlId={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            autoComplete={input.autoComplete}
                            aria-label={input.ariaLabel}
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
