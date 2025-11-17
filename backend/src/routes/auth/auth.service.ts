import type { PrismaClient } from '@prisma/client';

import type { FastifyJWT, JWT } from '@fastify/jwt';
import type { CookieSerializeOptions } from '@fastify/cookie';

import { ApiError } from '@none/shared';

import type { RegisterData, CookieName } from '@none/shared';

async function findByUserName(prisma: PrismaClient, userName: string) {
    const user = await prisma.user.findUnique({
        where: { userName },
    });

    return user;
}

export async function checkUserNameTaken(
    prisma: PrismaClient,
    userName: string
) {
    const userExist = await findByUserName(prisma, userName);

    if (userExist) {
        throw new ApiError(
            `User name "${userExist.userName}" has already been taken.`,
            409
        );
    }

    return false;
}

export async function saveUserInDB(
    prisma: PrismaClient,
    userData: RegisterData
) {
    const { userName, fullName, password } = userData;

    const newUser = await prisma.user.create({
        data: { userName, fullName, password },
    });

    return newUser;
}

export function generateAuthTokens(
    jwt: JWT,
    jwtPayload: FastifyJWT['payload']
): { accessToken: string; refreshToken: string } {
    const accessToken = jwt.sign(jwtPayload);
    const refreshToken = crypto.randomUUID();

    return { accessToken, refreshToken };
}

export async function checkUserExistence(
    prisma: PrismaClient,
    userName: string
) {
    const user = await findByUserName(prisma, userName);

    if (!user) {
        throw new ApiError('User with this user name not found', 404);
    }

    return user;
}

export function generateAuthCookie(
    name: CookieName,
    value: string,
    maxAge: number
): {
    name: CookieName;
    value: string;
    options: CookieSerializeOptions;
} {
    return {
        name,
        value,
        options: {
            httpOnly: true,
            sameSite: 'none',
            secure: true,
            path: '/',
            maxAge,
        },
    };
}
