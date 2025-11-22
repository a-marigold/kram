'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';
import { useChatStore } from '@/store/ChatStore';

import { stream } from '@/lib/stream';
import type { Message } from '@none/shared';

import MessageList from '../MessageList';
import ChatTextArea from '@/UI/ChatTextArea';
import chatStyles from '../../Chat.module.scss';

export default function Chat() {
    const [message, setMessage] = useState('');

    // const userName = useAuthStore((state) => state.user?.userName);
    const userName = 'hello'; // ! ! !

    const addMessage = useChatStore((state) => state.addMessage);

    const chatId = usePathname().split('/').filter(Boolean).at(-1);

    function handleAddMessage() {
        if (userName && chatId) {
            const newMessage: Message = {
                createdAt: Date.now(),
                chatId,
                sender: userName,
                data: message,
            };

            addMessage(chatId, newMessage);

            stream.send('newChatMessage', newMessage);
        }
    }

    return (
        <>
            <div className={chatStyles['chat-box']}>
                <MessageList />
            </div>

            <ChatTextArea
                className={chatStyles['message-input']}
                ariaLabel='Input a message'
                state={message}
                onChange={(event) => setMessage(event.target.value)}
                sendFunction={handleAddMessage}
            />
        </>
    );
}
