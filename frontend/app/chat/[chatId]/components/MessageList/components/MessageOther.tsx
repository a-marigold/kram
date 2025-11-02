import type { MessagePropsType } from './MessagePropsType';

import messageStyles from './Message.module.scss';

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
