import type { FastifyRequest, FastifyReply } from 'fastify';

// import type { User } from '@prisma/client';

// import { CheckUserDataSchema } from '@none/shared';
import type { CheckUserData, RegisterData } from '@none/shared';
import type { ApiResponse } from '@none/shared';

import { checkUserExistance, saveUserInDB } from './auth.service';

export async function checkUser(
    request: FastifyRequest<{ Params: CheckUserData }>,

    reply: FastifyReply<{ Reply: ApiResponse }>
) {
    try {
        await checkUserExistance(
            request.server.prisma,
            request.params.userName
        );
    } catch (error) {
        if (error instanceof Error) {
            return reply.code(409).send({ code: 409, message: error.message });
        }
    }
}

export async function register(
    request: FastifyRequest<{ Body: RegisterData }>,
    reply: FastifyReply<{ Reply: ApiResponse }>
) {
    try {
        await checkUserExistance(request.server.prisma, request.body.userName);
    } catch (error) {
        if (error instanceof Error) {
            return reply.code(409).send({ code: 409, message: error.message });
        }
    }

    await saveUserInDB(request.server.prisma, request.body);
}
