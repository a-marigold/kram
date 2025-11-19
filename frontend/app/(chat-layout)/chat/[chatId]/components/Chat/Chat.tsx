'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';
import { useChatStore } from '@/store/ChatStore';

import MessageList from '../MessageList';

import ChatTextArea from '@/UI/ChatTextArea';

import chatStyles from '../../Chat.module.scss';

export default function Chat() {
    const [message, setMessage] = useState('');

    const userName = useAuthStore((state) => state.user?.userName);

    const addMessage = useChatStore((state) => state.addMessage);

    const chatId = usePathname().split('/').filter(Boolean).at(-1);

    function handleAddMessage() {
        if (userName && chatId) {
            addMessage(chatId, { chatId, sender: userName, data: message });
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
            />
        </>
    );
}
