'use client';

import { useRef } from 'react';

import type { MessagePropsType, ToolButtonType } from './MessageTypes';

import { toolButtonHandler } from './toolButtonHandler';

import messageStyles from './Message.module.scss';

export const toolButtonList: ToolButtonType[] = [
    {
        icon: (
            <svg width={20} height={20}>
                <use href='#clipboard-icon' />
            </svg>
        ),
        handler: 'copy',
        ariaLabel: 'Copy message',
    },

    {
        icon: (
            <svg width={20} height={20}>
                <use href='#like-icon' />
            </svg>
        ),
        handler: 'like',
        ariaLabel: 'EditMessage',
    },

    {
        icon: (
            <svg width={20} height={20}>
                <use href='#dislike-icon' />
            </svg>
        ),
        handler: 'dislike',
        ariaLabel: 'EditMessage',
    },
];

export function MessageOther({ children }: MessagePropsType) {
    const messageRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className={`${messageStyles['message-block']} ${messageStyles['other']}`}
        >
            <div ref={messageRef} className={messageStyles['message-other']}>
                {children}
            </div>

            <div className={messageStyles['tool-buttons-block']}>
                {toolButtonList.map((button, index) => (
                    <button
                        key={index}
                        className={messageStyles['tool-button']}
                        onClick={() => {
                            toolButtonHandler(
                                button.handler,
                                messageRef.current
                            );
                        }}
                    >
                        {button.icon}
                    </button>
                ))}
            </div>
        </div>
    );
}
