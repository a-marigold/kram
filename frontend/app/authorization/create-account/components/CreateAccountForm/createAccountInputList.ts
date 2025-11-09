import type { RegisterData } from '@none/shared/dist/AuthorizationData';
import type { AuthInput } from '@/app/authorization/types/AuthInput';

type CreateAccountInputName = keyof RegisterData;

export const createAccountInputList: AuthInput<CreateAccountInputName>[] = [
    {
        name: 'email',
        placeholder: 'Email address',
        ariaLabel: 'Email address input field',

        type: 'email',
    },
    {
        name: 'password',
        placeholder: 'Password',
        ariaLabel: 'Password input field',

        type: 'password',

        autoComplete: 'new-password',
    },
];
