'use client';

import { useState } from 'react';

import { findBySymbol } from '@/utils/FindBySymbol';
import { getRandomArrayElement } from '@/utils/GetRandomArrayElement';

import { badgeColorList } from '@/constants/badgeColorList';

import ChatTextArea from '@/UI/ChatTextArea';

import homeStyles from './Home.module.scss';

export default function Home() {
    const [message, setMessage] = useState('');

    const currentBadgeColors = getRandomArrayElement(badgeColorList);

    return (
        <main className={homeStyles['home-page']}>
            <div className={homeStyles['main-content']}>
                <ChatTextArea
                    ariaLabel='Input a message'
                    state={message}
                    onChange={(event) => setMessage(event.target.value)}
                    badge={{
                        text: findBySymbol(message, '@') ?? '',
                        bgColor: currentBadgeColors.bgColor,
                        fontColor: currentBadgeColors.fontColor,
                    }}
                />
            </div>
        </main>
    );
}
