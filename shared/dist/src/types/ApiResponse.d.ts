import { infer as zinfer } from 'zod';
export declare const ApiResponseSchema: import("zod").ZodObject<{
    message: import("zod").ZodString;
    code: import("zod").ZodNumber;
}, import("zod/v4/core").$strip>;
export type ApiResponse = zinfer<typeof ApiResponseSchema>;
