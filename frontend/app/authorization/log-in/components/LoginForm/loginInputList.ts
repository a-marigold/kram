type LoginInputName = 'email' | 'password';

export const loginInputList: {
    name: LoginInputName;
    placeholder: string;
    errorText: string;
    ariaLabel: string;
    type: 'email' | 'password';
}[] = [
    {
        name: 'email',
        placeholder: 'Email address',
        ariaLabel: 'Email address input field',

        errorText: 'Email address is required',
        type: 'email',
    },
    {
        name: 'password',
        placeholder: 'Password',
        errorText: 'Password is required',

        ariaLabel: 'Password input field',
        type: 'password',
    },
];
