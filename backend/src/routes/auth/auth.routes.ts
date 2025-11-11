import type { RouteHandlerMethod } from 'fastify';
import type { ProvideredFastifyInstance } from '@/app';

import { ApiResponseSchema } from '@none/shared';
import { CheckEmailDataSchema } from '@none/shared';

import { checkEmail } from './auth.controller';

export function authRoutes(app: ProvideredFastifyInstance) {
    app.route({
        method: 'POST',
        url: '/auth/check-email',
        schema: {
            body: CheckEmailDataSchema,
            response: {
                200: ApiResponseSchema,
            },
        },
        handler: checkEmail as RouteHandlerMethod,
    });
}
