'use client';

import { usePathname } from 'next/navigation';

import PrimaryLink from '@/UI/PrimaryLink';

import navStyles from './ChatList.module.scss';

const chatList = [
    {
        id: '96697d9d-2749-4ced-9162-0701abf4337a',
        name: 'Initial chat initial initial initial initial',
    },
];

export default function ChatList() {
    const pathname = usePathname();
    const currentChatId = pathname.split('/').filter(Boolean).at(-1);

    return (
        <div className={navStyles['chats-box']}>
            <div className={navStyles['title-block']}>
                <h1 className={navStyles['title']}>Your chats</h1>

                <svg width={12} height={12} className={navStyles['arrow-icon']}>
                    <use href='#arrow-icon' />
                </svg>
            </div>

            <ul className={navStyles['chat-list']}>
                {chatList.map((chat) => (
                    <li key={chat.id} className={navStyles['chat-link']}>
                        <PrimaryLink
                            title={chat.name}
                            href={`/chat/${chat.id}`}
                            isActive={currentChatId === chat.id}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
