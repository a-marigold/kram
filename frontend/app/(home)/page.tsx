'use client';

import { useState } from 'react';

import ChatTextArea from '@/UI/ChatTextArea';

import homeStyles from './Home.module.scss';

export default function Home() {
    const [value, setValue] = useState('');

    return (
        <main className={homeStyles['home']}>
            <div className={homeStyles['main-content']}>
                <p>{value}</p>
                <ChatTextArea
                    ariaLabel='Input a message'
                    state={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </div>
        </main>
    );
}
