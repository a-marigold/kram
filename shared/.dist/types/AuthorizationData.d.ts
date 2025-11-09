import { infer as zinfer } from 'zod';
export declare const RegisterDataSchema: import("zod").ZodObject<{
    email: import("zod").ZodEmail;
    password: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export declare const LoginDataSchema: import("zod").ZodObject<{
    email: import("zod").ZodEmail;
    password: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export declare const AboutYouDataSchema: import("zod").ZodObject<{
    fullName: import("zod").ZodString;
    userName: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export declare const EmailVerificationDataSchema: import("zod").ZodObject<{
    email: import("zod").ZodEmail;
    code: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export type RegisterData = zinfer<typeof RegisterDataSchema>;
export type LoginData = zinfer<typeof LoginDataSchema>;
export type AboutYouData = zinfer<typeof AboutYouDataSchema>;
export type EmailVerificationData = zinfer<typeof EmailVerificationDataSchema>;
//# sourceMappingURL=AuthorizationData.d.ts.map