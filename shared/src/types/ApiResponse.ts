import { object, string, number, infer as zinfer } from 'zod';
import type { ZodObject } from 'zod';

export const ApiResponseSchema = <T extends ZodObject>(dataSchema: T) =>
    object({ message: string(), code: number(), data: dataSchema.optional() });

export type ApiResponse = zinfer<typeof ApiResponseSchema>;
