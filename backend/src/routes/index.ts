import type { FastifyInstance } from 'fastify';

import { authRoutes } from './auth';

export async function routes(app: FastifyInstance) {
    app.register(authRoutes);
}
