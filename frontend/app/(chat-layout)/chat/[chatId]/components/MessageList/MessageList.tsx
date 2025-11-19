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
            {chatMessages?.map((message, __INDEX__) =>
                message.sender === userName ? (
                    <MessageMine key={__INDEX__}>{message.data}</MessageMine>
                ) : (
                    <MessageOther key={__INDEX__}>{message.data}</MessageOther>
                )
            )}
        </div>
    );
}
