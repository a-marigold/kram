'use client';

import { useRef } from 'react';

import type { MessagePropsType, ToolButtonType } from './MessageTypes';

import { toolButtonHandler } from './toolButtonHandler';

import LabelledElement from '@/UI/LabelledElement';

import messageStyles from './Message.module.scss';

export const toolButtonlist: ToolButtonType[] = [
    {
        icon: (
            <svg width={20} height={20}>
                <use href='#clipboard-icon' />
            </svg>
        ),
        ariaLabel: 'Copy message',
        labelId: 'copy-mine',

        handler: 'copy',
    },

    {
        icon: (
            <svg width={20} height={20}>
                <use href='#edit-icon' />
            </svg>
        ),
        ariaLabel: 'Edit message',
        labelId: 'edit-mine',

        handler: 'edit',
    },
];
export function MessageMine({ children }: MessagePropsType) {
    const messageRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className={`${messageStyles['message-block']} ${messageStyles['mine']}`}
        >
            <div ref={messageRef} className={messageStyles['message-mine']}>
                {children}
            </div>

            <div className={messageStyles['tool-buttons-block']}>
                {toolButtonlist.map((button, index) => (
                    <LabelledElement
                        key={index}
                        title={button.ariaLabel}
                        labelId={button.labelId}
                        position='bottom'
                    >
                        <button
                            className={messageStyles['tool-button']}
                            aria-labelledby={button.ariaLabel}
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
