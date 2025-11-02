'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import PrimaryLink from '@/UI/PrimaryLink';

import clsx from 'clsx';
import navStyles from './ChatList.module.scss';

const chatList = [
    {
        id: '96697d9d-2749-4ced-9162-0701abf4337a',

        name: 'Elik',
    },
    {
        id: '96697d9d-2749-4ced-9162-0701abf4337b',

        name: '10 "Г"',
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
                                title={chat.name}
                                href={`/chat/${chat.id}`}
                                isActive={currentChatId === chat.id}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
