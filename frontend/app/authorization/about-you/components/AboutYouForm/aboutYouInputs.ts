import type { AuthInput } from '@/app/authorization/types/AuthInput';

import type { RegisterData } from '@none/shared';

type AboutYouInputName = keyof Pick<RegisterData, 'fullName'>;

export const aboutYouInputs: AuthInput<AboutYouInputName>[] = [
    {
        name: 'fullName',
        placeholder: 'Full name',
        ariaLabel: 'Full names input field',

        type: 'text',
    },
];
