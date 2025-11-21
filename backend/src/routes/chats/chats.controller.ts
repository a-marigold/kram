import type { FastifyRequest, FastifyReply } from 'fastify';

import type { ApiResponse, Chat } from '@none/shared';

import { getChatsByUserName, createChatWithMembers } from './chats.service';

export async function getUserChats(
    request: FastifyRequest,
    reply: FastifyReply<{ Reply: ApiResponse | Chat[] }>
) {
    const userName = request.user.userName;

    try {
        const chats = await getChatsByUserName(request.server.prisma, userName);

        if (!chats) {
            return reply.code(404).send({
                code: 404,
                message: 'This user does not have any chat',
            });
        }

        return reply.code(200).send(chats);
    } catch {
        return reply
            .code(500)
            .send({ code: 500, message: 'Internal server error' });
    }
}

export async function createChat(
    request: FastifyRequest,

    reply: FastifyReply<{ Reply: ApiResponse }>
) {
    const userName = request.user.userName;
}
