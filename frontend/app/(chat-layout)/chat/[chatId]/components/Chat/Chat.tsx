'use client';

import { useState, useEffect, useRef, useLayoutEffect } from 'react';

import { getElementScrollbarWidth } from '@/utils/GetElementScrollbarWidth';

import MessageList from '../MessageList';

import ChatTextArea from '@/UI/ChatTextArea';

import chatStyles from '../../Chat.module.scss';

export default function Chat() {
    const chatBoxRef = useRef<HTMLDivElement>(null);

    function changeElementPaddingLeft(element: HTMLElement | null) {
        if (!element) return;
        element.style.paddingLeft = `${getElementScrollbarWidth(element)}px`;
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

    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        const stream = new WebSocket('http://localhost:1000/stream');

        stream.addEventListener('message', (event) => {
            setMessages(event.data);
        });
    }, []);

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
