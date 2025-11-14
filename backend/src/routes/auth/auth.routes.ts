import type { FastifyInstance, RouteHandlerMethod } from 'fastify';

import { CheckUserDataSchema, ApiResponseSchema } from '@none/shared';
import { RegisterDataSchema } from '@none/shared';

import { checkUser, register } from './auth.controller';

export async function authRoutes(app: FastifyInstance) {
    app.route({
        method: 'GET',
        url: '/auth/check-user/:userName',
        schema: {
            params: CheckUserDataSchema,
            response: {
                200: ApiResponseSchema,
                409: ApiResponseSchema,
            },
        },
        handler: checkUser as RouteHandlerMethod,
    });
    console.log(JSON.stringify(RegisterDataSchema, null, 2));
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
