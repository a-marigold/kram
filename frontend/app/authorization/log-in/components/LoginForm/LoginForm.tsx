'use client';

import { Controller, useForm } from 'react-hook-form';

import AuthForm from '@/app/authorization/(components)/AuthForm';

import { loginInputList } from './loginInputList';

import PrimaryInput from '@/UI/PrimaryInput';

export default function LoginForm() {
    const { control, handleSubmit } = useForm();

    return (
        <AuthForm
            title='Enter your password'
            onSubmit={handleSubmit(() => alert('logged in success!'))}
        >
            {loginInputList.map((input) => (
                <Controller
                    key={input.name}
                    control={control}
                    name={input.name}
                    rules={{ required: input.errorText }}
                    render={({ field, fieldState }) => (
                        <PrimaryInput
                            htmlId={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            aria-label={input.ariaLabel}
                            errorText={fieldState.error?.message}
                            isValid={!fieldState.error?.message}
                            onChange={field.onChange}
                        />
                    )}
                />
            ))}
        </AuthForm>
    );
}
