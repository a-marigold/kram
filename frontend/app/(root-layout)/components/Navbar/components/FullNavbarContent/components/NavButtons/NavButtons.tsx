'use client';

import { useModalStore } from '@/store/ModalStore/useModalStore';

import PrimaryLink from '@/UI/PrimaryLink';
import PrimaryButton from '@/UI/PrimaryButton';

import navStyles from './NavButtons.module.scss';

export default function NavButtons() {
    const closeModal = useModalStore((state) => state.closeModal);
    const openModal = useModalStore((state) => state.openModal);

    return (
        <ul className={navStyles['nav-buttons']}>
            <PrimaryLink
                href='/'
                title='New chat'
                subtitle='Ctrl + Shift + O'
                aria-label='Open new chat'
                isActive={false}
                icon={
                    <svg width={20} height={20} color='var(--font-color)'>
                        <use href='#chat-icon' />
                    </svg>
                }
            />

            <PrimaryButton
                title='Search'
                subtitle='Ctrl + K'
                aria-label='Search chats'
                icon={
                    <svg width={20} height={20} color='var(--font-color)'>
                        <use href='#search-icon' />
                    </svg>
                }
                onClick={() => openModal('search', { closeModal })}
            />
        </ul>
    );
}
