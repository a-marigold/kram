import type { FastifyInstance } from 'fastify';

import { CheckEmailDataSchema } from 'shared';

import { checkEmail } from './auth.controller';

export function authRoutes(app: FastifyInstance) {
    app.route({
        method: 'POST',
        url: '/auth/check-email',
        schema: {
            body: CheckEmailDataSchema,
            response: {
                200: '_RESPONSE__SCHEMA_',
            },
        },
        handler: checkEmail,
    });
}
