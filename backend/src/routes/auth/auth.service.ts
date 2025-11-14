import type { PrismaClient } from '@prisma/client';
import type { FastifyJWT, JWT } from '@fastify/jwt';

import type { RegisterData } from '@none/shared';

export async function checkUserExistance(
    prisma: PrismaClient,

    userName: string
) {
    const userExist = await prisma.user.findUnique({
        where: { userName: userName },
    });

    if (userExist) {
        throw new Error('This user already exists.');
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
