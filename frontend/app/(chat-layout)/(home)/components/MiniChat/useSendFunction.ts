import { useRouter } from 'next/navigation';

import { useChatStore } from '@/store/ChatStore';

import { createChat } from '@/lib/api/ChatApiClient';

import { Chat } from '@none/shared';

export function useSendFunction() {
    const addChat = useChatStore((state) => state.addChat);

    const router = useRouter();

    return async (chat: Chat) => {
        try {
            const newChat = await createChat(chat);

            addChat(newChat);

            if (newChat.publicId) {
                router.push(newChat.publicId);
            }
        } catch (error) {
            alert(error); // TODO: temporarily
        }
    };
}
