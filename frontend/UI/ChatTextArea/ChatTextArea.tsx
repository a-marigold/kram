'use client';

import { useRef } from 'react';
import type { ReactNode, TextareaHTMLAttributes } from 'react';

import { resizeTextarea } from '@/utils/ResizeTextarea';

import clsx from 'clsx';

import textStyles from './ChatTextArea.module.scss';

interface ChatTextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    state?: string;
    ariaLabel: string;
    chatName?: string;
}
export default function ChatTextArea({
    state,

    ariaLabel,

    chatName,

    ...attributes
}: ChatTextAreaProps) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    return (
        <div
            className={textStyles['chat-input-block']}
            aria-label={ariaLabel}
            onClick={() => {
                textAreaRef.current?.focus();
            }}
        >
            <textarea
                ref={textAreaRef}
                className={clsx(
                    textStyles['chat-input'],
                    textAreaRef.current &&
                        textAreaRef.current.scrollHeight >= 320 &&
                        textStyles['bounded']
                )}
                placeholder='Message'
                {...attributes}
                value={state}
                onChange={(event) => {
                    resizeTextarea(event.target);

                    attributes.onChange?.(event);
                }}
            />

            <div className={textStyles['tools-block']}>
                {chatName && (
                    <div className={textStyles['chatname-block']}>
                        <span className={textStyles['chatname']}>
                            {chatName}
                        </span>
                    </div>
                )}

                <div className={textStyles['buttons-group']}>
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
        </div>
    );
}
