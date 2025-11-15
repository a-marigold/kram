'use client';

import { Controller, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';

import { pick } from 'zod/v4-mini';
import { RegisterDataSchema } from '@none/shared';
import type { RegisterData } from '@none/shared';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';

import { ApiError } from '@none/shared';
import { checkUser } from '@/lib/api/AuthApiClient';

import AuthForm from '@/app/authorization/(components)/AuthForm';

import { createAccountInputList } from './createAccountInputList';

import PrimaryInput from '@/UI/PrimaryInput';

export default function CreateAccountForm() {
    type CreateAccountFormData = Pick<RegisterData, 'userName' | 'password'>;

    const {
        control,
        handleSubmit,
        setError,
        formState: { isSubmitting },
    } = useForm<CreateAccountFormData>({
        resolver: zodResolver(
            pick(RegisterDataSchema, { userName: true, password: true })
        ),
        defaultValues: {
            userName: '',
            password: '',
        },
    });

    const setUser = useAuthStore((state) => state.setUser);
    const router = useRouter();
    async function submit(userData: CreateAccountFormData) {
        try {
            await checkUser(userData.userName);

            setUser(userData);

            router.replace('/authorization/about-you');
        } catch (error) {
            if (error instanceof ApiError) {
                if (error.code === 409) {
                    setError('userName', { message: error.message });
                } else {
                    setError('userName', {
                        message: 'Unexcepted server error. Try again',
                    });
                    setError('password', {
                        message: 'Unexcepted server error. Try again',
                    });
                }
            }
        }
    }

    return (
        <AuthForm
            title='Create your account'
            hint='Create a password to conitnue'
            noValidate
            isLoading={isSubmitting}
            onSubmit={handleSubmit(submit)}
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
