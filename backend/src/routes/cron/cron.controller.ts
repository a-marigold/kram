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

    await request.server.prisma.user.findMany();

    await request.server.redis.set('cron:wake', 1);

    await request.server.redis.del('cron:wake');

    return reply.code(200).send({ code: 200, message: 'Waked up' });
}
