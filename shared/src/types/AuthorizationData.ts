import { object, email, string, infer as zinfer } from 'zod';

export const RegisterDataSchema = object({
    email: email().min(1, 'Email is required'),
    password: string()
        .min(8, 'Password should be at least 8 characters')
        .max(40, 'Password is too long'),
});
export type RegisterData = zinfer<typeof RegisterDataSchema>;

export const LoginDataSchema = object({
    email: email().min(1, 'Email is required'),
    password: string().min(1, 'Password is required'),
});
export type LoginData = zinfer<typeof LoginDataSchema>;

export const AboutYouDataSchema = object({
    fullName: string().min(1, 'Name is required'),
    userName: string()
        .min(1, 'User name is required')
        .lowercase('User name must not contain capital letters'),
});
export type AboutYouData = zinfer<typeof AboutYouDataSchema>;
