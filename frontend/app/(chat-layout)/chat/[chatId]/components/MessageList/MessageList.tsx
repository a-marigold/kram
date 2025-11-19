'use client';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';
import { useChatStore } from '@/store/ChatStore';

import { MessageMine, MessageOther } from './components';

import messageStyles from './MessageList.module.scss';

const messages = [
    {
        sender: 's',

        chatId: 'CHAT-ID12123316',

        data: 'ke',
    },

    {
        sender: 's',
        chatId: 'CHAT-ID12123316',
        data: 'ke',
    },
    {
        sender: 's',
        chatId: 'CHAT-ID12123316',
        data: 'ke',
    },
    {
        sender: 's',
        chatId: 'CHAT-ID12123316',
        data: 'ke',
    },
    {
        sender: 's',
        chatId: 'CHAT-ID12123316',
        data: 'ke',
    },
    {
        sender: 's',
        chatId: 'CHAT-ID12123316',
        data: 'ke',
    },
    {
        sender: 's',
        chatId: 'CHAT-ID12123316',
        data: 'ke',
    },
    {
        sender: 's',
        chatId: 'CHAT-ID12123316',
        data: 'ke',
    },
    {
        sender: 's',
        chatId: 'CHAT-ID12123316',
        data: 'ke',
    },
    {
        sender: 's',
        chatId: 'CHAT-ID12123316',
        data: 'ke',
    },
    {
        sender: 's',
        chatId: 'CHAT-ID12123316',
        data: 'ke',
    },
];

export default function MessageList() {
    const userName = useAuthStore((state) => state.user?.userName);
    const chatMessages = useChatStore((state) => state.chats[1]?.messageList);

    return (
        <div className={messageStyles['message-list']}>
            {messages.map((message, __INDEX__) =>
                message.sender === userName ? (
                    <MessageMine key={__INDEX__}>{message.data}</MessageMine>
                ) : (
                    <MessageOther key={__INDEX__}>{message.data}</MessageOther>
                )
            )}
        </div>
    );
}
