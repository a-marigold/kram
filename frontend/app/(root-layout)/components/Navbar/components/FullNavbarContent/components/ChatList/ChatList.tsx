'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import PrimaryLink from '@/UI/PrimaryLink';

import clsx from 'clsx';
import navStyles from './ChatList.module.scss';

const chatList = [
    {
        id: 'CHAT-ID10',

        name: 'example',
    },
    {
        id: 'CHAT-ID16',

        name: 'example2',
    },
];

export default function ChatList() {
    const pathname = usePathname();

    const currentChatId = pathname.split('/').filter(Boolean).at(-1);

    const [showChatList, setShowChatList] = useState(true);

    return (
        <div
            className={clsx(navStyles['chats-box'])}
            onClick={() => {
                setShowChatList((prev) => !prev);
            }}
        >
            <div className={navStyles['title-block']}>
                <h1 className={navStyles['title']}>Your chats</h1>

                <svg
                    width={12}
                    height={12}
                    className={clsx(
                        navStyles['arrow-icon'],

                        !showChatList && navStyles['active']
                    )}
                >
                    <use href='#arrow-icon' />
                </svg>
            </div>
            {showChatList && (
                <ul
                    className={navStyles['chat-list']}
                    onClick={(event) => event.stopPropagation()}
                >
                    {chatList.map((chat, index) => (
                        <li key={index} className={navStyles['chat-link']}>
                            <PrimaryLink
                                replace
                                shallow
                                title={chat.name}
                                href={`/chat/${chat.id}`}
                                isActive={currentChatId === chat.id}
                                aria-label={`Open ${chat.name} chat`}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
