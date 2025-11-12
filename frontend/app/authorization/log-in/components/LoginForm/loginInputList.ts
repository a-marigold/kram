import type { LoginData } from '@none/shared';
import type { AuthInput } from '@/app/authorization/types/AuthInput';

type LoginInputName = keyof LoginData;

export const loginInputList: AuthInput<LoginInputName>[] = [
    {
        name: 'userName',
        placeholder: 'User name',
        ariaLabel: 'User name input field',
        autoComplete: 'username',
        type: 'text',
    },
    {
        name: 'password',
        placeholder: 'Password',

        ariaLabel: 'Password input field',

        autoComplete: 'current-password',
        type: 'password',
    },
];
