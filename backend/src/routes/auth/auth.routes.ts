import type {
    FastifyInstance,
    preHandlerHookHandler,
    RouteHandlerMethod,
} from 'fastify';

import {
    CheckUserDataSchema,
    ApiResponseSchema,
    UserSchema,
} from '@none/shared';
import { RegisterDataSchema } from '@none/shared';

import { checkUser, register, me } from './auth.controller';

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

    app.route({
        method: 'POST',
        url: '/auth/register',
        schema: {
            body: RegisterDataSchema,
            response: {
                409: ApiResponseSchema,
            },
        },
        handler: register as RouteHandlerMethod,
    });

    app.route({
        method: 'GET',
        url: '/auth/me',
        schema: {
            response: {
                200: UserSchema.omit({ password: true }),
            },
        },
        onRequest: app.auth,
        handler: me as RouteHandlerMethod,
    });
}
