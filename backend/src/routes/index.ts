import type { FastifyInstance } from 'fastify';

import { authRoutes } from './auth';
import { cronRoutes } from './cron';

export async function routes(app: FastifyInstance) {
    app.register(authRoutes);
    app.register(cronRoutes);
}
