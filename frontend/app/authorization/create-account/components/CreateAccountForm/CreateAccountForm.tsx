'use client';

import { Controller, useForm } from 'react-hook-form';

import AuthForm from '@/app/authorization/(components)/AuthForm';

import { createAccountInputList } from './createAccountInputList';

import PrimaryInput from '@/UI/PrimaryInput';

export default function CreateAccountForm() {
    const { control, handleSubmit } = useForm();

    return (
        <AuthForm
            title='Create your account'
            hint='Create a password to conitnue'
            onSubmit={handleSubmit(() => alert('Submitted!'))}
        >
            {createAccountInputList.map((input) => (
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
                            autoComplete={input.autoComplete}
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
