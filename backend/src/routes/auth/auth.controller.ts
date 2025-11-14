import type { FastifyRequest, FastifyReply } from 'fastify';

import type { CheckUserData, RegisterData, User } from '@none/shared';
import type { ApiResponse } from '@none/shared';

import {
    checkUserNameTaken,
    saveUserInDB,
    generateAuthTokens,
    checkUserExistence,
    generateAuthCookie,
} from './auth.service';

import { Cookie } from '@/types/Cookies';
import type { Cookies } from '@/types/Cookies';

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

    const {
        name: accessName,
        value: accessValue,
        options: accessOptions,
    } = generateAuthCookie(Cookie.AccessToken, accessToken, 12 * 60);
    reply.setCookie(accessName, accessValue, accessOptions);

    const {
        name: refreshName,
        value: refreshValue,
        options: refreshOptions,
    } = generateAuthCookie(Cookie.RefreshToken, refreshToken, 12 * 3600);
    reply.setCookie(refreshName, refreshValue, refreshOptions);

    await request.server.redis.set(
        `refresh:${refreshToken}`,
        userName,
        'EX',
        12 * 3600
    );

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

export async function refresh(
    request: FastifyRequest,
    reply: FastifyReply<{ Reply: ApiResponse }>
) {
    const { refreshToken } = request.cookies as Cookies;

    if (!refreshToken) {
        return reply.code(401).send({ code: 401, message: 'Unauthorized' });
    }

    const userName = await request.server.redis.get(refreshToken);

    if (!userName) {
        return reply
            .code(401)
            .send({ code: 401, message: 'Refresh token not found' });
    }

    const newAccessToken = request.server.jwt.sign({ userName });

    const {
        name: accessName,
        value: accessValue,
        options: accessOptions,
    } = generateAuthCookie(Cookie.AccessToken, newAccessToken, 12 * 60);

    reply.setCookie(accessName, accessValue, accessOptions);

    return reply.code(204).send();
}
