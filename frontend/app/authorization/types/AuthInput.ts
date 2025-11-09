import type { InputHTMLAttributes } from 'react';

export interface AuthInput<Name extends string> {
    name: Name;
    placeholder: string;
    errorText: string;
    ariaLabel: string;
    type: InputHTMLAttributes<HTMLInputElement>['type'];
    autoComplete?: InputHTMLAttributes<HTMLInputElement>['autoComplete'];
}
