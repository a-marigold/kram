import type { FastifyRequest, FastifyReply } from 'fastify';

import type { CheckUserData, RegisterData, User } from '@none/shared';
import type { ApiResponse } from '@none/shared';

import {
    checkUserNameTaken,
    saveUserInDB,
    generateAuthTokens,
    checkUserExistence,
} from './auth.service';

export async function checkUser(
    request: FastifyRequest<{ Params: CheckUserData }>,

    reply: FastifyReply<{ Reply: ApiResponse }>
) {
    try {
        await checkUserNameTaken(
            request.server.prisma,
            request.params.userName
        );

        return reply.code(200).send();
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
        await checkUserNameTaken(request.server.prisma, request.body.userName);
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

        { userName }
    );

    reply.setCookie('access', accessToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        path: '/',

        maxAge: 12 * 60,
    });

    reply.setCookie('refresh', refreshToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,

        path: '/',

        maxAge: 12 * 3600,
    });

    return reply.code(204).send();
}

export async function me(
    request: FastifyRequest,
    reply: FastifyReply<{ Reply: ApiResponse | Omit<User, 'password'> }>
) {
    try {
        const { userName, fullName, email, avatar } = await checkUserExistence(
            request.server.prisma,
            request.user.userName
        );

        const prepareUser: Omit<User, 'password'> = {
            userName,
            fullName,
            email: email || undefined,
            avatar: avatar || undefined,
        };

        return reply.code(200).send(prepareUser);
    } catch (error) {
        if (error instanceof Error) {
            return reply.code(404).send({ code: 404, message: error.message });
        }
    }
}
