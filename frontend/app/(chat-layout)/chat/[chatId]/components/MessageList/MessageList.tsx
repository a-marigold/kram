'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';
import { useChatStore } from '@/store/ChatStore';

import { stream } from '@/lib/stream';
import { validateChatMessage } from '@/utils/StreamHelpers';

import { MessageMine, MessageOther } from './components';

import messageStyles from './MessageList.module.scss';

export default function MessageList() {
    const chatId = usePathname().split('/').filter(Boolean).at(-1);

    const userName = useAuthStore((state) => state.user?.userName);
    const chatMessages = useChatStore(
        (state) => state.chats[chatId || '']?.messageList
    );
    const addMessage = useChatStore((state) => state.addMessage);

    useEffect(() => {
        stream.onmessage((message) => {
            console.log(message);
            if (
                message.type === 'newChatMessage' &&
                validateChatMessage(message.data) &&
                chatId
            ) {
                addMessage(chatId, message.data);
            }
        });
    }, []);

    return (
        <div className={messageStyles['message-list']}>
            {chatMessages?.map((message) =>
                message.sender === userName || message.sender === 'hello' ? ( // TODO: temporarily ! ! !
                    <MessageMine key={message.id}>{message.data}</MessageMine>
                ) : (
                    <MessageOther key={message.id}>{message.data}</MessageOther>
                )
            )}
        </div>
    );
}
