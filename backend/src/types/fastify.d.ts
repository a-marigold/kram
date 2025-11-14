import type { PrismaClient } from '@prisma/client';

import type Redis from 'ioredis';

declare module 'fastify' {
    interface FastifyInstance {
        prisma: PrismaClient;

        redis: Redis;

        auth(request: FastifyRequest, reply: FastifyReply): Promise<void>;
    }
}

declare module '@fastify/jwt' {
    interface FastifyJWT {
        payload: { userName: string };
        user: { userName: string };
    }
}
