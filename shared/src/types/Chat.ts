import { object, string, uuid, array, number, infer as zinfer } from 'zod';

export const MessageSchema = object({
    id: number().optional(),

    sender: string(),

    chatId: uuid(),

    data: string(),
});

export const ChatSchema = object({
    id: number(),

    publicId: uuid(),

    name: string(),

    messageList: array(MessageSchema),
});

export type Chat = zinfer<typeof ChatSchema>;

export type Message = zinfer<typeof MessageSchema>;
