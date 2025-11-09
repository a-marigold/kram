type CreateAccountInput = 'email' | 'password';

export const createAccountInputList: {
    name: CreateAccountInput;
    placeholder: string;
    errorText: string;
    ariaLabel: string;
}[] = [
    {
        name: 'email',
        placeholder: 'Email address',
        errorText: 'Email address is required',
        ariaLabel: 'Email address input field',
    },
    {
        name: 'password',
        placeholder: 'Password',
        errorText: 'Password is required',
        ariaLabel: 'Password input field',
    },
];
