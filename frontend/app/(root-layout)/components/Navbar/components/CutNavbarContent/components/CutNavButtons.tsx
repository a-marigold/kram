'use client';

import { useModalStore } from '@/store/ModalStore/useModalStore';
import { useHotkeyStore } from '@/store/HotkeyStore';

import SearchModal from '@modals/SearchModal';

import Link from 'next/link';

import LabelledElement from '@/UI/LabelledElement';

import cutnavStyles from '../CutNavbarContent.module.scss';

export default function CutNavButtons() {
    const openModal = useModalStore((state) => state.openModal);

    const closeModal = useModalStore((state) => state.closeModal);

    const hotkeys = useHotkeyStore((state) => state.hotkeys);
    const openNewChatHotkey = hotkeys.find(
        (hotkey) => hotkey.name === 'openNewChat'
    );
    const searchHotkey = hotkeys.find((hotkey) => hotkey.name === 'search');

    return (
        <div className={cutnavStyles['nav-buttons-block']}>
            <LabelledElement
                title='Open new chat'
                subtitle={openNewChatHotkey?.key || 'Ctrl + Shift + O'}
                position='right'
            >
                <Link
                    href='/'
                    prefetch
                    className={cutnavStyles['nav-button']}
                    aria-label={`Open new chat ${
                        openNewChatHotkey?.key || 'Ctrl + Alt + N'
                    }`}
                >
                    <svg width={20} height={20} color='var(--font-color)'>
                        <use href='#chat-icon' />
                    </svg>
                </Link>
            </LabelledElement>

            <LabelledElement
                title='Search'
                subtitle={searchHotkey?.key || 'Ctrl + Shift + K'}
                position='right'
            >
                <button
                    className={cutnavStyles['nav-button']}
                    aria-label={`Search ${
                        searchHotkey?.key || 'Ctrl + Shift + K'
                    }`}
                    onClick={() =>
                        openModal(<SearchModal closeModal={closeModal} />)
                    }
                >
                    <svg width={20} height={20} color='var(--font-color)'>
                        <use href='#search-icon' />
                    </svg>
                </button>
            </LabelledElement>
        </div>
    );
}
