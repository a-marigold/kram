import { object, string, uuid, infer as zinfer } from 'zod';

export const ChatSchema = object({
    id: uuid(),
    name: string(),
});

export const MessageSchema = object({
    sender: string(),
    chatId: uuid(),

    data: string(),
});

export type Chat = zinfer<typeof ChatSchema>;
export type Message = zinfer<typeof MessageSchema>;
