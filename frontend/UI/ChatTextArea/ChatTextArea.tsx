'use client';

import type { TextareaHTMLAttributes } from 'react';

import clsx from 'clsx';
import textStyles from './ChatTextArea.module.scss';

interface ChatTextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    state?: string;
    ariaLabel: string;
}
export default function ChatTextArea({
    state,

    ariaLabel,

    ...attributes
}: ChatTextAreaProps) {
    return (
        <div className={textStyles['chat-input-block']} aria-label={ariaLabel}>
            <textarea
                className={textStyles['chat-input']}
                {...attributes}
                value={state}
                onChange={(event) => {
                    event.target.style.height = `${event.target.scroll}px`;

                    attributes.onChange?.(event);
                }}
            />

            <div className={textStyles['buttons-block']}>
                <button
                    className={textStyles['empty-filled-button']}
                    aria-label='Enable the microphone'
                >
                    <svg width={20} height={20} color='var(--font-color)'>
                        <use href='#microphone-icon' />
                    </svg>
                </button>

                <button
                    className={textStyles['send-button']}
                    color='var(--dark-foreground-color)'
                    disabled={!state?.length}
                    aria-label='Send message'
                >
                    <svg width={20} height={20}>
                        <use href='#send-arrow-icon' />
                    </svg>
                </button>
            </div>
        </div>
    );
}
