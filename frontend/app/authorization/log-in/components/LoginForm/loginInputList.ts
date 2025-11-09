import type { AuthInput } from '@/app/authorization/AuthInput';

type LoginInputName = 'email-login' | 'password-login';

export const loginInputList: AuthInput<LoginInputName>[] = [
    {
        name: 'email-login',
        placeholder: 'Email address',
        ariaLabel: 'Email address input field',

        errorText: 'Email address is required',
        type: 'email',
    },
    {
        name: 'password-login',
        placeholder: 'Password',
        errorText: 'Password is required',

        ariaLabel: 'Password input field',
        type: 'password',
    },
];
