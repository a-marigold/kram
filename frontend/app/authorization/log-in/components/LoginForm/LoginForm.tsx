'use client';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { ApiError } from '@none/shared';
import { loginWithUserName } from '@/lib/api/AuthApiClient';

import { LoginDataSchema } from '@none/shared';
import type { LoginData } from '@none/shared';

import AuthForm from '@/app/authorization/(components)/AuthForm';

import { loginInputList } from './loginInputList';

import PrimaryInput from '@/UI/PrimaryInput';

export default function LoginForm() {
    const { control, handleSubmit, setError } = useForm<LoginData>({
        resolver: zodResolver(LoginDataSchema),
        defaultValues: {
            userName: '',
            password: '',
        },
    });

    async function submit(userData: LoginData) {
        try {
            await loginWithUserName(userData.userName, userData.password);
        } catch (error) {
            if (error instanceof ApiError) {
                if (error.code === 404) {
                    setError('userName', { message: error.message });
                } else if (error.code === 403) {
                    setError('password', { message: error.message });
                }
            }
        }
    }

    return (
        <AuthForm
            title='Enter your password'
            noValidate
            onSubmit={handleSubmit(submit)}
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
