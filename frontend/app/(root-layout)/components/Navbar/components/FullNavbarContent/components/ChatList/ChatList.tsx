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
    {
        id: 'CHAT-ID11',

        name: 'example',
    },
    {
        id: 'CHAT-ID126',

        name: 'example2',
    },
    {
        id: 'CHAT-ID11123230',

        name: 'example',
    },
    {
        id: 'CHAT-ID12123316',

        name: 'example2',
    },
    {
        id: 'CHAT-ID12310',

        name: 'example',
    },
    {
        id: 'CHAT-ID11236',

        name: 'example2',
    },
    {
        id: 'CHAT-I123D10',

        name: 'example',
    },
    {
        id: 'CHAT-I123D16',

        name: 'example2',
    },
    {
        id: 'CHAT-I123D10',

        name: 'example',
    },
    {
        id: 'CHAT-IDsdfsdfsdf16',

        name: 'example2',
    },
    {
        id: 'CHAT-I123123D10',

        name: 'example',
    },
    {
        id: 'CHAT-ID160',

        name: 'examdfgdfhsaasdple2',
    },
    {
        id: 'CHAT-ID123123adasdasd21310',

        name: 'example',
    },
    {
        id: 'CHAT-ID1adadasd6',

        name: 'example2',
    },
    {
        id: 'CHAT-ID11231230',

        name: 'example',
    },
    {
        id: 'CHAT-I213123123adasD16',

        name: 'exampl123123e2',
    },
    {
        id: 'CHAT-IDasdasd10',

        name: 'example',
    },
    {
        id: 'CHAT-ID1asdsaasd6',

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
                <p className={navStyles['title']}>Your chats</p>

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
                                prefetch
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
