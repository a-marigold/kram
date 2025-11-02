'use client';

import { useRef } from 'react';

import type { MessagePropsType, ToolButtonType } from './MessageTypes';

import { toolButtonHandler } from './toolButtonHandler';

import LabelledElement from '@/UI/LabelledElement';

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
        labelId: 'copy-other',
    },

    {
        icon: (
            <svg width={20} height={20}>
                <use href='#like-icon' />
            </svg>
        ),
        handler: 'like',
        ariaLabel: 'Like message',
        labelId: 'copy-other',
    },

    {
        icon: (
            <svg width={20} height={20}>
                <use href='#dislike-icon' />
            </svg>
        ),
        handler: 'dislike',
        ariaLabel: 'Dislike message',
        labelId: 'copy-other',
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
                    <LabelledElement
                        title={button.ariaLabel}
                        labelId={button.labelId}
                        position='bottom'
                    >
                        <button
                            key={index}
                            className={messageStyles['tool-button']}
                            aria-labelledby={button.labelId}
                            onClick={() => {
                                toolButtonHandler(
                                    button.handler,
                                    messageRef.current
                                );
                            }}
                        >
                            {button.icon}
                        </button>
                    </LabelledElement>
                ))}
            </div>
        </div>
    );
}
