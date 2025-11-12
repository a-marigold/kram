import { infer as zinfer } from 'zod';
export declare const RegisterDataSchema: import("zod").ZodObject<{
    userName: import("zod").ZodString;
    password: import("zod").ZodString;
    fullName: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export declare const LoginDataSchema: import("zod").ZodObject<{
    userName: import("zod").ZodString;
    password: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export type RegisterData = zinfer<typeof RegisterDataSchema>;
export type LoginData = zinfer<typeof LoginDataSchema>;
//# sourceMappingURL=AuthorizationData.d.ts.map