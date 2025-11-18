'use client';

import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { RegisterDataSchema } from '@none/shared';
import type { RegisterData } from '@none/shared';

import { ApiError } from '@none/shared';
import { register } from '@/lib/api/AuthApiClient';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';

import AuthForm from '@/app/authorization/(components)/AuthForm';
import { aboutYouInputs } from './aboutYouInputs';

import PrimaryInput from '@/UI/PrimaryInput';

export default function LoginForm() {
    type LoginFormData = Pick<RegisterData, 'fullName'>;

    const {
        control,
        handleSubmit,
        setError,
        formState: { isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(RegisterDataSchema.pick({ fullName: true })),
        defaultValues: {
            fullName: '',
        },
    });

    const user = useAuthStore((state) => state.user);
    const setUser = useAuthStore((state) => state.setUser);

    const router = useRouter();

    const queryClient = useQueryClient();

    async function submit(userData: LoginFormData) {
        if (!user?.userName || !user.password) {
            return setError('fullName', {
                message: 'User name and password are required!',
            });
        }

        const prepareUser: RegisterData = {
            fullName: userData.fullName,

            userName: user.userName,

            password: user.password,
        };

        try {
            await register(prepareUser);
            setUser({});

            queryClient.invalidateQueries({ queryKey: ['auth'] });

            router.push('/');
        } catch (error) {
            if (error instanceof ApiError) {
                if (error.code === 409) {
                    setError('fullName', { message: error.message });
                } else {
                    setError('fullName', {
                        message: 'Unexcepted server error. Try again',
                    });
                }
            }
        }
    }

    return (
        <AuthForm
            title='Tell about yourself'
            isLoading={isSubmitting}
            onSubmit={handleSubmit(submit)}
        >
            {aboutYouInputs.map((input) => (
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
