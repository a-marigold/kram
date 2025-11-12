import type { PrismaClient } from '@prisma/client';
import type Redis from 'ioredis';

import { generateFourDigitNumber } from '@/utils/GenerateFourDigitNumber';

export async function userExists(
    prisma: PrismaClient,

    email: string
) {
    const userExist = await prisma.user.findUnique({
        where: { email: email },
    });

    if (userExist?.email.split('@')[1] === 'gmail') {
        return 'oauth';
    }
    if (userExist) {
        throw new Error('This email is already taken.');
    }

    return false;
}

export async function saveOpt(redis: Redis, email: string) {
    const code = generateFourDigitNumber();

    await redis.set(`email:${email}`, String(code));

    return code;
}
