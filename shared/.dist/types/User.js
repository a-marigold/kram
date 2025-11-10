import { object, string } from 'zod';
export const UserSchema = object({
    fullName: string(),
    userName: string(),
    avatar: string(),
    email: string(),
    password: string(),
});
