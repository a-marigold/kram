import { object, string } from 'zod';
export const RegisterDataSchema = object({
    userName: string()
        .min(1, 'User name is required')
        .lowercase('User name must not contain capital letters'),
    password: string()
        .min(8, 'Password should be at least 8 characters')
        .max(40, 'Password is too long'),
    fullName: string().min(1, 'Name is required'),
});
export const LoginDataSchema = object({
    userName: string().min(1, 'User name  is required'),
    password: string().min(1, 'Password is required'),
});
