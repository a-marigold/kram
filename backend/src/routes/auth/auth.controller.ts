import type { FastifyRequest, FastifyReply } from 'fastify';

import type { User } from '@prisma/client';

import { CheckUserDataSchema } from '@none/shared';
import type { CheckUserData, RegisterData } from '@none/shared';
import type { ApiResponse } from '@none/shared';

import { checkUserExistance, saveUserInDB } from './auth.service';

export async function checkUser(
    request: FastifyRequest<{ Params: CheckUserData }>,
    reply: FastifyReply<{ Reply: ApiResponse }>
) {
    const parseUser = CheckUserDataSchema.safeParse(request.params);
    if (!parseUser.success) {
        return reply
            .code(400)
            .send({ code: 400, message: parseUser.error.message });
    }

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
