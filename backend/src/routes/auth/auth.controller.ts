import type { FastifyRequest, FastifyReply } from 'fastify';

import type { CheckEmailData } from '@none/shared';
import type { ApiResponse } from '@none/shared';

export async function checkEmail(
    request: FastifyRequest<{ Body: CheckEmailData }>,
    reply: FastifyReply<{ Reply: ApiResponse }>
) {
    return reply.code(200).send();
}

export async function register(
    request: FastifyRequest<>,
    reply: FastifyReply
) {}
