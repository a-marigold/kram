import type { AuthInput } from '@/app/authorization/types/AuthInput';

import type { AboutYouData } from 'shared';

type AboutYouInputName = keyof AboutYouData;

export const aboutYouInputs: AuthInput<AboutYouInputName>[] = [
    {
        name: 'fullName',
        placeholder: 'Full name',
        ariaLabel: 'Full names input field',

        type: 'text',
    },
    {
        name: 'userName',

        placeholder: 'User name',
        ariaLabel: 'User name input field',
        type: 'text',
    },
];
