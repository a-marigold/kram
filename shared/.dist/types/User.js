import { object, string } from 'zod';
export const UserSchema = object({
    fullName: string(),
    userName: string(),
    avatar: string().optional(),
    email: string().optional(),
    password: string(),
});
