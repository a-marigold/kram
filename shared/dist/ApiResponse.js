import { object, string, number } from 'zod';
export const ApiResponseSchema = object({ message: string(), code: number() });
