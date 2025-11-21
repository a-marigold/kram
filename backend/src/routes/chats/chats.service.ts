import type { PrismaClient } from '@prisma/client';

import type { Chat } from '@none/shared';

export async function getChatsByUserName(
    prisma: PrismaClient,

    userName: string
) {
    const user = await prisma.user.findUnique({
        where: { userName },

        include: {
            chats: {
                include: {
                    members: true,
                    messageList: true,
                },
            },
        },
    });

    const userChats: Chat[] | undefined = user?.chats.map(
        ({ publicId, id, name, members, messageList }) => ({
            publicId,
            id,
            name,
            messageList: messageList.map((message) => ({
                ...message,
                createdAt: message.createdAt.getTime(),
            })),
            members: members.map(({ fullName, userName, avatar }) => ({
                fullName,
                userName,
                avatar: avatar || undefined,
            })),
        })
    );

    return userChats;
}
export async function createChatWithMembers(
    prisma: PrismaClient,

    chat: Chat
) {
    return await prisma.chat.create({
        data: {
            publicId: crypto.randomUUID(),
            name: chat.name,
            members: {
                connect: chat.members.map((member) => ({
                    userName: member.userName,
                })),
            },
        },
    });
}
