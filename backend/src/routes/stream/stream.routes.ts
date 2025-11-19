import type { FastifyInstance } from 'fastify';

import { stream } from './stream.controller';

export async function streamRoutes(app: FastifyInstance) {
    app.route({
        method: 'GET',

        url: '/stream',

        websocket: true,

        handler: () => {},

        wsHandler: stream,
    });
}
