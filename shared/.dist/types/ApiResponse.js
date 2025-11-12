import { object, string, number } from 'zod';
export const ApiResponseSchema = (dataSchema) => object({ message: string(), code: number(), data: dataSchema.optional() });
