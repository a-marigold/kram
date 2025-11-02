import type { Metadata } from 'next';

import MessageList from './components/MessageList/MessageList';

import ChatTextArea from '@/UI/ChatTextArea';

import chatStyles from './Chat.module.scss';

export const metadata: Metadata = {
    title: '__Chat__',

    openGraph: {
        title: '__Chat__',
    },
};

export default function Chat() {
    return (
        <div className={chatStyles['chat-page']}>
            <div className={chatStyles['chat-box']}>
                <MessageList />

                <ChatTextArea />
            </div>
        </div>
    );
}
