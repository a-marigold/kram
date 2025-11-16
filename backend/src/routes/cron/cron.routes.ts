import type { FastifyInstance, RouteHandlerMethod } from 'fastify';

import { ApiResponseSchema } from '@none/shared';

import { wake } from './cron.controller';

export async function cronRoutes(app: FastifyInstance) {
    app.route({
        method: 'GET',
        url: '/cron/wake',
        schema: {
            response: {
                200: ApiResponseSchema,
                403: ApiResponseSchema,
            },
        },
        handler: wake as RouteHandlerMethod,
    });
}
