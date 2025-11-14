import type { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';

import type { ApiResponse } from '@none/shared';
import fastifyPlugin from 'fastify-plugin';

export default fastifyPlugin((app: FastifyInstance) => {
    app.decorate(
        'auth',
        async (
            request: FastifyRequest,
            reply: FastifyReply<{ Reply: ApiResponse }>
        ) => {
            try {
                await request.jwtVerify({ onlyCookie: true });
            } catch {
                return reply
                    .code(401)
                    .send({ code: 401, message: 'Unauthorized' });
            }
        }
    );
});
