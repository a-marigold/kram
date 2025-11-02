import type { MessagePropsType } from './MessagePropsType';

import messageStyles from './Message.module.scss';

export function MessageMine({ children }: MessagePropsType) {
    return (
        <div className={messageStyles['message-block']}>
            <div
                className={`${messageStyles['message-mine']} ${messageStyles['message']}`}
            >
                {children}
            </div>

            <div className={messageStyles['tools-block']}></div>
        </div>
    );
}
