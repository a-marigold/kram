import { object, string, uuid, array, infer as zinfer } from 'zod';

export const MessageSchema = object({
    sender: string(),
    chatId: uuid(),

    data: string(),
});

export const ChatSchema = object({
    id: uuid(),
    name: string(),
    messageList: array(MessageSchema),
});

export type Chat = zinfer<typeof ChatSchema>;
export type Message = zinfer<typeof MessageSchema>;
