import type { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import Redis from 'ioredis';

export default fastifyPlugin(async (app: FastifyInstance) => {
    const redis = new Redis(process.env.REDIS_URL || '');

    app.decorate('redis', redis);

    app.addHook('onClose', async () => {
        app.redis.quit();
    });
});
