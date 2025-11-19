import type { FastifyInstance } from 'fastify';

import { authRoutes } from './auth';
import { cronRoutes } from './cron';
import { streamRoutes } from './stream/stream.routes';

export async function routes(app: FastifyInstance) {
    app.register(authRoutes);
    app.register(cronRoutes);
    app.register(streamRoutes);
}
