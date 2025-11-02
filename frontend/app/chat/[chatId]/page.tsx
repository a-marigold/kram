import type { Metadata } from 'next';

import Chat from './components/Chat/Chat';

import chatStyles from './Chat.module.scss';

export const metadata: Metadata = {
    title: '__Chat__',

    openGraph: {
        title: '__Chat__',
    },
};

export default function ChatPage() {
    return (
        <div className={chatStyles['chat-page']}>
            <Chat />
        </div>
    );
}
