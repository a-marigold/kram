'use client';

import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { AboutYouDataSchema } from '@none/shared/src/types/AuthorizationData';
import type { AboutYouData } from '@none/shared/src/types/AuthorizationData';

import AuthForm from '@/app/authorization/(components)/AuthForm';

import { aboutYouInputs } from './aboutYouInputs';

import PrimaryInput from '@/UI/PrimaryInput';

export default function LoginForm() {
    const { control, handleSubmit, formState, watch } = useForm<AboutYouData>({
        resolver: zodResolver(AboutYouDataSchema),
        defaultValues: {
            fullName: '',
            userName: '',
        },
    });

    return (
        <AuthForm
            title='Tell about yourself'
            onSubmit={handleSubmit(() => alert('logged in success!'))}
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
                            value={field.value}
                            onChange={(event) =>
                                field.onChange(event.target.value)
                            }
                        />
                    )}
                />
            ))}
        </AuthForm>
    );
}
