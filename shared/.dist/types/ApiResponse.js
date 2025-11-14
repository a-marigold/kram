import { object, string, number } from 'zod';
// export const ApiResponseSchema = <T extends ZodObject>(dataSchema: T) =>
//     object({ message: string(), code: number(), data: dataSchema.optional() });
export const ApiResponseSchema = object({ code: number(), message: string() });
