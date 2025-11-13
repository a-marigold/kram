import Fastify from 'fastify';

import {
    validatorCompiler,
    serializerCompiler,
} from 'fastify-type-provider-zod';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';

import fastifyJwt from '@fastify/jwt';
import prismaPlugin from './plugins/prisma';
import redisPlugin from './plugins/redis';

import { routes } from './routes';

const app = Fastify({
    logger: process.env.PRODUCTION === 'false',
}).withTypeProvider<ZodTypeProvider>();

export function buildApp() {
    app.setValidatorCompiler(validatorCompiler);

    app.setSerializerCompiler(serializerCompiler);

    app.register(fastifyJwt, {
        secret: process.env.JWT_SECRET ?? '',
    });

    app.register(prismaPlugin);
    // app.register(redisPlugin);

    app.register(routes);

    return app;
}

export type ProvideredFastifyInstance = typeof app;
