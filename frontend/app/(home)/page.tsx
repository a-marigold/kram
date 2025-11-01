'use client';

import { useState } from 'react';

import ChatTextArea from '@/UI/ChatTextArea';

import homeStyles from './Home.module.scss';

export default function Home() {
    const [message, setMessage] = useState('');

    function getChatName(message: string) {
        const firstWord = message.split(' ')[0];

        const lastWord = message.split(' ').at(-1);
        if (firstWord?.startsWith('#') && firstWord.length > 1) {
            return firstWord;
        } else if (lastWord?.startsWith('#') && lastWord.length > 1) {
            return lastWord;
        }

        console.log(firstWord, lastWord);
    }

    return (
        <main className={homeStyles['home']}>
            <div className={homeStyles['main-content']}>
                <ChatTextArea
                    ariaLabel='Input a message'
                    state={message}
                    onChange={(event) => setMessage(event.target.value)}
                    chatName={getChatName(message)}
                />
            </div>
        </main>
    );
}
