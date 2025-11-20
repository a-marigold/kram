'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import PrimaryLink from '@/UI/PrimaryLink';

import navStyles from './ChatList.module.scss';

const chatList = [
    {
        id: '6d436c8c-5e65-45a3-90e4-d066b4b0f5a2',

        name: 'example',
    },
    {
        id: 'bb8d83bd-5cd6-4ce0-abf1-035b7c904cee',

        name: 'example2',
    },
];

export default function ChatList() {
    const pathname = usePathname();

    const currentChatId = pathname.split('/').filter(Boolean).at(-1);

    const [showChatList, setShowChatList] = useState(true);

    return (
        <div
            className={navStyles['chats-box']}
            onClick={() => {
                setShowChatList((prev) => !prev);
            }}
        >
            <div className={navStyles['title-block']}>
                <p className={navStyles['title']}>Your chats</p>

                <svg
                    width={12}
                    height={12}
                    className={`${navStyles['arrow-icon']} ${
                        !showChatList && navStyles['active']
                    }`}
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
                                prefetch={false}
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
