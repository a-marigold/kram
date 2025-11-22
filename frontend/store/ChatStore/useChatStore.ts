import { create } from 'zustand';

import type { Chat, Message } from '@none/shared';

type ChatNames = Pick<Chat, 'publicId' | 'name' | 'members'>[];

interface ChatStore {
    chats: Record<string, Chat>;

    setChats: (newChats: Chat[]) => void;

    addChat: (newChat: Chat) => void;

    addMessage: (chatId: string, message: Message) => void;

    chatNames: ChatNames;

    setChatNames: (newChat: ChatNames) => void;
}

export const useChatStore = create<ChatStore>()((set) => ({
    chats: {},

    chatNames: [],

    setChats: (newChats) =>
        set({
            chats: Object.fromEntries(newChats.map((chat) => [chat.id, chat])),
        }),

    addChat: (newChat) =>
        set((state) => ({ chats: { ...state.chats, newChat } })),

    addMessage: (chatId, message) =>
        set((state) => ({
            chats: {
                ...state.chats,

                [chatId]: {
                    ...state.chats[chatId],
                    messageList: [
                        ...(state.chats[chatId]?.messageList || []),
                        message,
                    ],
                },
            },
        })),

    setChatNames: (newChats) => set({ chatNames: newChats }),
}));
