import type { EmailVerificationData } from 'shared';

import type { AuthInput } from '@/app/authorization/types/AuthInput';

type CreateAccountInputName = keyof Pick<EmailVerificationData, 'code'>;

export const createAccountInputList: AuthInput<CreateAccountInputName>[] = [
    {
        name: 'code',
        placeholder: 'Code',
        ariaLabel: 'Verification code input field',

        autoComplete: 'one-time-code',
        type: 'number',
    },
];
