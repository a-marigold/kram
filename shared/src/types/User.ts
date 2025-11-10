import { object, string, infer as zinfer } from 'zod';

export const UserSchema = object({
    fullName: string(),
    userName: string(),
    avatar: string(),

    email: string(),
    password: string(),
});
export type User = zinfer<typeof UserSchema>;
