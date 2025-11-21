import { create } from 'zustand';

import type { Chat, Message } from '@none/shared';

type ChatNames = Pick<Chat, 'publicId' | 'name'>[];

interface ChatStore {
    chats: Record<string, Chat>;

    setChats: (newChats: Chat[]) => void;

    addMessage: (chatId: string, message: Message) => void;

    chatNames: ChatNames;

    setChatNames: (newNames: ChatNames) => void;
}

export const useChatStore = create<ChatStore>()((set) => ({
    chats: {
        pub_8f3a1b9e: {
            id: 42,
            publicId: 'pub_8f3a1b9e',
            name: 'General Discussion',
            messageList: [
                {
                    id: 1,
                    sender: 'hello',
                    chatId: 'pub_8f3a1b9e',
                    data: 'Привет! Кто-нибудь уже смотрел новую версию React?',
                },
                {
                    id: 2,
                    sender: 'Bob',
                    chatId: 'pub_8f3a1b9e',
                    data: 'Да, пробовал — компилятор реально ускоряет компонент 😄',
                },
                {
                    id: 3,
                    sender: 'hello',
                    chatId: 'pub_8f3a1b9e',
                    data: 'У кого-нибудь есть пример с useOptimistic?',
                },
                {
                    id: 4,
                    sender: 'Diana',
                    chatId: 'pub_8f3a1b9e',
                    data: 'React 19 уже в проде, топ!',
                },
            ],
        },
        pub_f12a47cc: {
            id: 88,
            publicId: 'pub_f12a47cc',
            name: 'Frontend Team',
            messageList: [
                {
                    id: 1,
                    sender: 'Max',
                    chatId: 'pub_f12a47cc',
                    data: 'Ребята, кто возьмёт задачу по оптимизации списка?',
                },
                {
                    id: 2,
                    sender: 'Nina',
                    chatId: 'pub_f12a47cc',
                    data: 'Я могу взять, но только после ревью PR.',
                },
                {
                    id: 3,
                    sender: 'Oscar',
                    chatId: 'pub_f12a47cc',
                    data: 'Добавил мемоизацию, рендеры стали в 4 раза быстрее!',
                },
                {
                    id: 4,
                    sender: 'Lara',
                    chatId: 'pub_f12a47cc',
                    data: 'UI вообще не лагает теперь 🔥',
                },
            ],
        },
        pub_45df9c10: {
            id: 157,
            publicId: 'pub_45df9c10',
            name: 'Random Chat',
            messageList: [
                {
                    id: 1,
                    sender: 'Tom',
                    chatId: 'pub_45df9c10',
                    data: 'Кто-нибудь знает хороший фильм на вечер?',
                },
                {
                    id: 2,
                    sender: 'Ilya',
                    chatId: 'pub_45df9c10',
                    data: "Посмотри 'Оппенгеймер', если не видел!",
                },
                {
                    id: 3,
                    sender: 'Sara',
                    chatId: 'pub_45df9c10',
                    data: "А я бы сериал рекомендовала — 'Severance'.",
                },
                {
                    id: 4,
                    sender: 'Victor',
                    chatId: 'pub_45df9c10',
                    data: 'А есть что-нибудь полегче? Комедия желательно 😄',
                },
            ],
        },
    },

    chatNames: [],

    setChats: (newChats) =>
        set({
            chats: Object.fromEntries(newChats.map((chat) => [chat.id, chat])),
        }),

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

    setChatNames: (newNames) => set({ chatNames: newNames }),
}));
