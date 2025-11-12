import type { RouteHandlerMethod } from 'fastify';
import type { ProvideredFastifyInstance } from '@/app';

import { CheckUserDataSchema, ApiResponseSchema } from '@none/shared';
import { RegisterDataSchema } from '@none/shared';

import { checkUser, register } from './auth.controller';

export function authRoutes(app: ProvideredFastifyInstance) {
    app.route({
        method: 'GET',
        url: '/auth/check-user',
        schema: {
            body: CheckUserDataSchema,
            response: {
                200: ApiResponseSchema,
                409: ApiResponseSchema,
            },
        },
        handler: checkUser as RouteHandlerMethod,
    });

    app.route({
        method: 'POST',
        url: '/auth/register',
        schema: {
            body: RegisterDataSchema,
            response: {
                200: ApiResponseSchema,
                409: ApiResponseSchema,
            },
        },
        handler: register as RouteHandlerMethod,
    });
}
