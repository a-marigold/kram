import { infer as zinfer } from 'zod';

import { ApiResponseSchema } from '@/types/ApiResponse';

import { CheckEmailDataSchema } from '@/types/AuthorizationData';

export const CheckEmailResponseSchema = ApiResponseSchema(CheckEmailDataSchema);

export type CheckEmailResponse = zinfer<typeof CheckEmailResponseSchema>;
