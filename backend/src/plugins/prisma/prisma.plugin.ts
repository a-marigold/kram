import type { FastifyInstance } from 'fastify';

import fastifyPlugin from 'fastify-plugin';
import { PrismaClient } from '@prisma/client';

export default fastifyPlugin(async (app: FastifyInstance) => {
    const Prisma = new PrismaClient();

    app.decorate('prisma', Prisma);

    app.addHook('onClose', async () => {
        app.prisma.$disconnect();
    });
});
