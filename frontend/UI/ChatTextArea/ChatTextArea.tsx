'use client';

import { useState, useRef } from 'react';
import type { TextareaHTMLAttributes } from 'react';

import { resizeTextarea } from '@/utils/ResizeTextarea';

import LabelledElement from '@/UI/LabelledElement';

import clsx from 'clsx';
import textStyles from './ChatTextArea.module.scss';

interface ChatTextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    state?: string;
    ariaLabel: string;
    badge?: {
        text: string;
        bgColor: string;
        fontColor: string;
    };
}
export default function ChatTextArea({
    state,

    ariaLabel,

    badge,

    className,

    ...attributes
}: ChatTextAreaProps) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const [isBounded, setIsBounded] = useState(false);

    return (
        <div
            className={clsx(textStyles['chat-input-block'], className)}
            aria-label={ariaLabel}
            onClick={() => {
                textAreaRef.current?.focus();
            }}
        >
            <textarea
                ref={textAreaRef}
                placeholder='Message'
                {...attributes}
                className={clsx(
                    textStyles['chat-input'],
                    isBounded && textStyles['bounded']
                )}
                value={state}
                onChange={(event) => {
                    resizeTextarea(event.target);

                    if (event.target.scrollHeight >= 319) {
                        setIsBounded(true);
                    }

                    attributes.onChange?.(event);
                }}
            />

            <div className={textStyles['tools-block']}>
                {badge?.text && (
                    <div className={textStyles['badge-block']}>
                        <span
                            className={textStyles['badge']}
                            style={{
                                backgroundColor: badge.bgColor,
                                color: badge.fontColor,
                            }}
                        >
                            {badge.text}
                        </span>
                    </div>
                )}

                <div className={textStyles['buttons-group']}>
                    <LabelledElement
                        title='Enable the microphone'
                        labelId='microphone-button'
                        position='top'
                    >
                        <button
                            className={textStyles['empty-filled-button']}
                            aria-labelledby='microphone-button'
                        >
                            <svg
                                width={20}
                                height={20}
                                color='var(--font-color)'
                            >
                                <use href='#microphone-icon' />
                            </svg>
                        </button>
                    </LabelledElement>

                    <LabelledElement
                        title='Enable the microphone'
                        labelId='send-message-button'
                        position='top'
                    >
                        <button
                            className={textStyles['send-button']}
                            color='var(--dark-foreground-color)'
                            disabled={!state?.length}
                            aria-labelledby='send-message-button'
                        >
                            <svg width={20} height={20}>
                                <use href='#send-arrow-icon' />
                            </svg>
                        </button>
                    </LabelledElement>
                </div>
            </div>
        </div>
    );
}
