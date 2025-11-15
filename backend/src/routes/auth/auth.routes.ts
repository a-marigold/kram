import type { FastifyInstance, RouteHandlerMethod } from 'fastify';

import {
    CheckUserDataSchema,
    ApiResponseSchema,
    LoginDataSchema,
    SafeUserSchema,
} from '@none/shared';
import { RegisterDataSchema } from '@none/shared';

import { checkUser, register, me, refresh, login } from './auth.controller';

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
                200: SafeUserSchema,
                404: ApiResponseSchema,
            },
        },
        onRequest: app.auth,
        handler: me as RouteHandlerMethod,
    });

    app.route({
        method: 'POST',
        url: '/auth/refresh',
        schema: {
            response: {
                401: ApiResponseSchema,
            },
        },
        handler: refresh as RouteHandlerMethod,
    });

    app.route({
        method: 'POST',
        url: '/auth/log-in',
        schema: {
            body: LoginDataSchema,
            response: {
                404: ApiResponseSchema,
            },
        },
        handler: login as RouteHandlerMethod,
    });
}
