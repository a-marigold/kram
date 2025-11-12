import type { RegisterData } from '@none/shared';
import type { AuthInput } from '@/app/authorization/types/AuthInput';

type CreateAccountInputName = keyof Pick<RegisterData, 'userName' | 'password'>;

export const createAccountInputList: AuthInput<CreateAccountInputName>[] = [
    {
        name: 'userName',
        placeholder: 'User name',
        ariaLabel: 'User name input field',

        autoComplete: 'name',
        type: 'text',
    },
    {
        name: 'password',
        placeholder: 'Password',
        ariaLabel: 'Password input field',

        autoComplete: 'new-pasword',
        type: 'password',
    },
];
