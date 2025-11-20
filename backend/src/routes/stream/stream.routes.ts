import type { FastifyInstance } from 'fastify';

import { stream } from './stream.controller';

export async function streamRoutes(app: FastifyInstance) {
    app.get('/stream', { websocket: true }, stream);
}
