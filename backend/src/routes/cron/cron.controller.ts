import type { FastifyRequest, FastifyReply } from 'fastify';

import type { ApiResponse } from '@none/shared';

export async function wake(
    request: FastifyRequest,

    reply: FastifyReply<{ Reply: ApiResponse }>
) {
    const cronSecret = request.headers['cron-secret'];

    if (!cronSecret || cronSecret !== process.env.CRON_SECRET) {
        return reply.code(403).send({ code: 403, message: 'Forbidden' });
    }

    try {
        await request.server.prisma.user.findMany();
    } catch (error) {
        if (error instanceof Error) {
            return reply
                .code(500)
                .send({ code: 500, message: `Prisma error: ${error.message}` });
        }

        return reply
            .code(500)
            .send({ code: 500, message: 'Uknown prisma error' });
    }

    try {
        await request.server.redis.set('cron:wake', 1);

        await request.server.redis.del('cron:wake');
    } catch (error) {
        if (error instanceof Error) {
            return reply
                .code(500)
                .send({ code: 500, message: `Redis error: ${error.message}` });
        }

        return reply
            .code(500)
            .send({ code: 500, message: 'Unknown redis error' });
    }

    return reply.code(200).send({ code: 200, message: 'Waked up' });
}
