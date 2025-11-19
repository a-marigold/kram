'use client';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';
import { useChatStore } from '@/store/ChatStore';

import { MessageMine, MessageOther } from './components';

import messageStyles from './MessageList.module.scss';

export default function MessageList() {
    const userName = useAuthStore((state) => state.user?.userName);
    const chatMessages = useChatStore((state) => state.chats[1]?.messageList);

    return (
        <div className={messageStyles['message-list']}>
            {chatMessages?.map((message) =>
                message.sender === userName || message.sender === 'k' ? (
                    <MessageMine key={message.id}>{message.data}</MessageMine>
                ) : (
                    <MessageOther key={message.id}>{message.data}</MessageOther>
                )
            )}
        </div>
    );
}
