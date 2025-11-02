import type { MessagePropsType } from './MessagePropsType';

import messageStyles from './Message.module.scss';

export const toolButtonlist = [
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
                <use href='#edit-icon' />
            </svg>
        ),

        ariaLabel: 'Edit message',
    },
];

export function MessageMine({ children }: MessagePropsType) {
    return (
        <div className={messageStyles['message-block']}>
            <div
                className={`${messageStyles['message-mine']} ${messageStyles['message']}`}
            >
                {children}
            </div>

            <div className={messageStyles['tool-buttons-block']}>
                {toolButtonlist.map((button, index) => (
                    <button
                        key={index}
                        className={messageStyles['tool-button']}
                        aria-label={button.ariaLabel}
                    >
                        {button.icon}
                    </button>
                ))}
            </div>
        </div>
    );
}
