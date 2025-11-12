import type { LoginData } from '@none/shared';
import type { AuthInput } from '@/app/authorization/types/AuthInput';

type LoginInputName = keyof LoginData;

export const loginInputList: AuthInput<LoginInputName>[] = [
    {
        name: 'email',
        placeholder: 'Email address',
        ariaLabel: 'Email address input field',
        autoComplete: 'email',
        type: 'email',
    },
    {
        name: 'password',
        placeholder: 'Password',

        ariaLabel: 'Password input field',

        autoComplete: 'current-password',
        type: 'password',
    },
];
