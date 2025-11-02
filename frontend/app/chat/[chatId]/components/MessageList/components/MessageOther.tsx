import type { MessagePropsType } from './MessagePropsType';

import messageStyles from './Message.module.scss';

export const toolButtonList = [
    {
        icon: (
            <svg width={20} height={20}>
                <use href='#clipboard-icon' />
            </svg>
        ),

        ariaLabel: 'Copy message',
    },

    {
        icon: (
            <svg width={20} height={20}>
                <use href='#like-icon' />
            </svg>
        ),

        ariaLabel: 'EditMessage',
    },

    {
        icon: (
            <svg width={20} height={20}>
                <use href='#dislike-icon' />
            </svg>
        ),

        ariaLabel: 'EditMessage',
    },
];

export function MessageOther({ children }: MessagePropsType) {
    return (
        <div className={messageStyles['message-block']}>
            <div
                className={`${messageStyles['message-other']} ${messageStyles['message']}`}
            >
                {children}
            </div>

            <div className={messageStyles['tools-block']}></div>
        </div>
    );
}
