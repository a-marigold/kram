import type { FastifyRequest, FastifyReply } from 'fastify';

import { ApiError } from '@none/shared';
import type { ApiResponse, Chat } from '@none/shared';

import { checkUserExistence } from '../auth';
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
    request: FastifyRequest<{ Body: Chat }>,

    reply: FastifyReply<{ Reply: ApiResponse }>
) {
    const userName = request.user.userName;

    const chat = request.body;

    try {
        for await (const member of chat.members) {
            await checkUserExistence(request.server.prisma, member.userName);
        }

        const findInitiatorUser = chat.members.find(
            (member) => member.userName === userName
        );

        if (!findInitiatorUser) {
            throw new ApiError('Initiator not found in members', 404);
        }

        await createChatWithMembers(request.server.prisma, chat);
    } catch (error) {
        if (error instanceof ApiError) {
            return reply
                .code(error.code)
                .send({ code: error.code, message: error.message });
        }
        return reply
            .code(500)
            .send({ code: 500, message: 'Internal server error' });
    }
}
