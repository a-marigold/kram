import type { FastifyRequest, FastifyReply } from 'fastify';

import type { ApiResponse } from 'shared';

export async function checkEmail(
    request: FastifyRequest,
    reply: FastifyReply<{ Reply: ApiResponse }>
) {
    return reply.code(200).send();
}
