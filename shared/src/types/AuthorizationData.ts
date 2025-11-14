import { object, email, string, infer as zinfer } from 'zod';

const userNameSchema = string()
    .nonempty('User name is required.')
    .regex(
        /^[A-Za-zА-Яа-я][A-Za-zА-Яа-я0-9_@#]*$/,
        'User name must not begin with number, "@", "#" and contain spaces.'
    )
    .lowercase('User name must not contain captial letters');

const passwordSchema = string()
    .min(8, 'Password should be at least 8 characters')
    .max(40, 'Password is too long');

export const CheckUserDataSchema = object({
    userName: userNameSchema,
});

export const RegisterDataSchema = object({
    userName: userNameSchema,

    password: passwordSchema,
    fullName: string().min(1, 'Name is required'),
});

export const LoginDataSchema = object({
    userName: userNameSchema,
    password: passwordSchema,
});

export type CheckUserData = zinfer<typeof CheckUserDataSchema>;
export type RegisterData = zinfer<typeof RegisterDataSchema>;
export type LoginData = zinfer<typeof LoginDataSchema>;
