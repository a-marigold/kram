import { object, email, string } from 'zod';
export const RegisterDataSchema = object({
    email: email('Invalid email address').min(2, 'Email address is required'),
    password: string()
        .min(8, 'Password should be at least 8 characters')
        .max(40, 'Password is too long'),
});
export const LoginDataSchema = object({
    email: email().min(1, 'Email address is required'),
    password: string().min(1, 'Password is required'),
});
export const AboutYouDataSchema = object({
    fullName: string().min(1, 'Name is required'),
    userName: string()
        .min(1, 'User name is required')
        .lowercase('User name must not contain capital letters'),
});
