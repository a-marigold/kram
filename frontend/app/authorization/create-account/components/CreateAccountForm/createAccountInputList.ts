import type { AuthInput } from '@/app/authorization/AuthInput';

type CreateAccountInputName = 'email-create' | 'password-create';

export const createAccountInputList: AuthInput<CreateAccountInputName>[] = [
    {
        name: 'email-create',
        placeholder: 'Email address',
        ariaLabel: 'Email address input field',

        errorText: 'Email address is required',
        type: 'email',

        autoComplete: 'email',
    },
    {
        name: 'password-create',
        placeholder: 'Password',
        ariaLabel: 'Password input field',

        errorText: 'Password is required',
        type: 'password',

        autoComplete: 'new-password',
    },
];
