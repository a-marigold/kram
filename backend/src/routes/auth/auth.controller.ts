import type { FastifyRequest, FastifyReply } from 'fastify';

// import { CheckUserDataSchema } from '@none/shared';
import type { User } from '@prisma/client';
import type { CheckUserData, RegisterData } from '@none/shared';
import type { ApiResponse } from '@none/shared';

import {
    checkUserExistance,
    saveUserInDB,
    generateAuthTokens,
} from './auth.service';

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

    const { userName } = await saveUserInDB(
        request.server.prisma,

        request.body
    );

    const { accessToken, refreshToken } = generateAuthTokens(
        request.server.jwt,
        userName
    );

    reply.setCookie('access', accessToken, {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        domain: '',

        maxAge: 12 * 60,
    });

    reply.setCookie('refresh', refreshToken, {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        domain: '',

        maxAge: 12 * 3600,
    });

    return reply.code(204).send();
}

export async function me(
    request: FastifyRequest,
    reply: FastifyReply<{ Body: ApiResponse | User }>
) {}
