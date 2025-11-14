import { infer as zinfer } from 'zod';
export declare const ApiResponseSchema: import("zod").ZodObject<{
    code: import("zod").ZodNumber;
    message: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export type ApiResponse = zinfer<typeof ApiResponseSchema>;
//# sourceMappingURL=ApiResponse.d.ts.map