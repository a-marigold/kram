import type { FastifyRequest, FastifyReply } from 'fastify';

import type { CheckUserData, RegisterData } from '@none/shared';
import type { ApiResponse } from '@none/shared';

import type { User } from '@prisma/client';

import { checkUserExistance, saveUserInDB } from './auth.service';

export async function checkUser(
    request: FastifyRequest<{ Querystring: Pick<CheckUserData, 'userName'> }>,
    reply: FastifyReply<{ Reply: ApiResponse }>
) {
    try {
        await checkUserExistance(request.server.prisma, request.query.userName);
    } catch (error) {
        if (error instanceof Error) {
            return reply.code(409).send({ code: 409, message: error.message });
        }
    }
}

export async function register(
    request: FastifyRequest<{ Body: RegisterData }>,
    reply: FastifyReply<{ Reply: ApiResponse | User }>
) {
    try {
        await checkUserExistance(request.server.prisma, request.body.userName);
    } catch (error) {
        if (error instanceof Error) {
            return reply.code(409).send({ code: 409, message: error.message });
        }
    }

    const createUser = await saveUserInDB(request.server.prisma, request.body);

    //! Temporary:
    return reply.code(200).send(createUser);
}
