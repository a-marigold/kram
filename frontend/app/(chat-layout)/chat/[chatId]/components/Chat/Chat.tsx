'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';
import { useChatStore } from '@/store/ChatStore';

import { getElementScrollbarWidth } from '@/utils/GetElementScrollbarWidth';

import MessageList from '../MessageList';

import ChatTextArea from '@/UI/ChatTextArea';

import chatStyles from '../../Chat.module.scss';

export default function Chat() {
    const chatBoxRef = useRef<HTMLDivElement>(null);

    function changeElementPaddingLeft(element: HTMLElement | null) {
        if (!element) return;

        element.style.paddingLeft = `${getElementScrollbarWidth(element)}px`; // Come up with something better than this
    }

    useLayoutEffect(() => {
        if (!chatBoxRef.current) return;

        const resizeObserver = new ResizeObserver(() => {
            changeElementPaddingLeft(chatBoxRef.current);
        });

        resizeObserver.observe(chatBoxRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

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
            <div ref={chatBoxRef} className={chatStyles['chat-box']}>
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
