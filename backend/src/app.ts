import Fastify from 'fastify';

import fastifyJwt from '@fastify/jwt';

import fastifyCors from '@fastify/cors';

import prismaPlugin from './plugins/prisma';

// import redisPlugin from './plugins/redis'; // TODO: delete redis connection and plugin

import { routes } from './routes';

export function buildApp() {
    const app = Fastify({
        logger: process.env.PRODUCTION === 'false',
    });

    app.register(fastifyCors, {
        origin: ['https://none.vercel.app', 'http://localhost:3000'],
        methods: ['GET', 'POST', 'PATCH'],
        credentials: true,
    });

    app.register(fastifyJwt, {
        secret: process.env.JWT_SECRET ?? '',
    });

    app.register(prismaPlugin);
    // app.register(redisPlugin);

    app.register(routes);

    return app;
}
