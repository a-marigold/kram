'use client';

import { useState } from 'react';

import { findBySymbol } from '@/utils/FindBySymbol';

import ChatTextArea from '@/UI/ChatTextArea';

import homeStyles from './Home.module.scss';

export default function Home() {
    const [message, setMessage] = useState('');

    return (
        <main className={homeStyles['home']}>
            <div className={homeStyles['main-content']}>
                <ChatTextArea
                    ariaLabel='Input a message'
                    state={message}
                    onChange={(event) => setMessage(event.target.value)}
                    badge={findBySymbol(message, '@')}
                />
            </div>
        </main>
    );
}
