import { infer as zinfer } from 'zod';
export declare const UserSchema: import("zod").ZodObject<{
    fullName: import("zod").ZodString;
    userName: import("zod").ZodString;
    avatar: import("zod").ZodOptional<import("zod").ZodString>;
    email: import("zod").ZodOptional<import("zod").ZodString>;
    password: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export type User = zinfer<typeof UserSchema>;
//# sourceMappingURL=User.d.ts.map