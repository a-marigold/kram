import { object, string, number, infer as zinfer } from 'zod';

export const ApiResponseSchema = object({ message: string(), code: number() });

export type ApiResponse = zinfer<typeof ApiResponseSchema>;
