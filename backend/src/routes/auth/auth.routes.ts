import type { FastifyInstance, RouteHandlerMethod } from 'fastify';

import zodToJsonSchema from 'zod-to-json-schema';

import { CheckUserDataSchema, ApiResponseSchema } from '@none/shared';
import { RegisterDataSchema } from '@none/shared';

import { checkUser, register } from './auth.controller';

export async function authRoutes(app: FastifyInstance) {
    app.route({
        method: 'GET',
        url: '/auth/check-user/:userName',
        schema: {
            response: {
                200: zodToJsonSchema(ApiResponseSchema),
                409: zodToJsonSchema(ApiResponseSchema),
            },
        },
        handler: checkUser as RouteHandlerMethod,
    });

    app.route({
        method: 'POST',
        url: '/auth/register',
        schema: {
            body: zodToJsonSchema(RegisterDataSchema),
            response: {
                200: zodToJsonSchema(ApiResponseSchema),
                409: zodToJsonSchema(ApiResponseSchema),
            },
        },
        handler: register as RouteHandlerMethod,
    });
}
