import { object, email, string, infer as zinfer } from 'zod';

export const RegisterDataSchema = object({
    email: email('Invalid email address').min(1, 'Email address is required'),

    password: string()
        .min(8, 'Password should be at least 8 characters')
        .max(40, 'Password is too long'),
});

export const LoginDataSchema = object({
    email: email('Invalid email address').min(1, 'Email address is required'),
    password: string().min(1, 'Password is required'),
});

export const AboutYouDataSchema = object({
    fullName: string().min(1, 'Name is required'),
    userName: string()
        .min(1, 'User name is required')
        .lowercase('User name must not contain capital letters'),
});

export const EmailVerificationDataSchema = object({
    email: email('Invalid email address'),
    code: string('Verification code is incorrect').min(
        4,
        'Verification code is required'
    ),
});

export type RegisterData = zinfer<typeof RegisterDataSchema>;
export type LoginData = zinfer<typeof LoginDataSchema>;
export type AboutYouData = zinfer<typeof AboutYouDataSchema>;
export type EmailVerificationData = zinfer<typeof EmailVerificationDataSchema>;
