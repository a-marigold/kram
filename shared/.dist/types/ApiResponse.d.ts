import { infer as zinfer } from 'zod';
import type { ZodObject } from 'zod';
export declare const ApiResponseSchema: <T extends ZodObject>(dataSchema: T) => ZodObject<{
    message: import("zod").ZodString;
    code: import("zod").ZodNumber;
    data: import("zod").ZodOptional<T>;
}, import("zod/v4/core").$strip>;
export type ApiResponse = zinfer<typeof ApiResponseSchema>;
//# sourceMappingURL=ApiResponse.d.ts.map