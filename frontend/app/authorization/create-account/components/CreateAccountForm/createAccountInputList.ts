import type { RegisterData } from '@none/shared/src/types/AuthorizationData';
import type { AuthInput } from '@/app/authorization/types/AuthInput';

type CreateAccountInputName = keyof RegisterData;

export const createAccountInputList: AuthInput<CreateAccountInputName>[] = [
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

        autoComplete: 'new-pasword',
        type: 'password',
    },
];
