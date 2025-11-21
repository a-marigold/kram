import type { FastifyInstance } from 'fastify';

import fastifyPlugin from 'fastify-plugin';
import { PrismaClient } from '@/generated/prisma/client/client';
import { PrismaPg } from '@prisma/adapter-pg';

export default fastifyPlugin(async (app: FastifyInstance) => {
    const adapter = new PrismaPg({
        connectionString: process.env.DATABASE_URL,
    });

    const prisma = new PrismaClient({ adapter });

    app.decorate('prisma', prisma);

    app.addHook('onClose', async () => {
        app.prisma.$disconnect();
    });
});
