'use client';

import { useRef, useEffect } from 'react';

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

    useEffect(() => {
        if (!chatBoxRef.current) return;

        const resizeObserver = new ResizeObserver(() => {
            changeElementPaddingLeft(chatBoxRef.current);
        });

        resizeObserver.observe(chatBoxRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <>
            <div ref={chatBoxRef} className={chatStyles['chat-box']}>
                <MessageList />
            </div>

            <ChatTextArea
                className={chatStyles['message-input']}
                ariaLabel='Input a message'
            />
        </>
    );
}
