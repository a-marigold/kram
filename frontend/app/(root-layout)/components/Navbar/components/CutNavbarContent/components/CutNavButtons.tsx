'use client';

import { useModalStore } from '@/store/ModalStore/useModalStore';

import SearchModal from '@modals/SearchModal';

import Link from 'next/link';

import LabelledElement from '@/UI/LabelledElement';

import cutnavStyles from '../CutNavbarContent.module.scss';

export default function CutNavButtons() {
    const openModal = useModalStore((state) => state.openModal);

    const closeModal = useModalStore((state) => state.closeModal);

    return (
        <div className={cutnavStyles['nav-buttons-block']}>
            <LabelledElement
                title='Open new chat'
                subtitle='Ctrl + Shift + O'
                position='right'
            >
                <Link
                    href='/'
                    prefetch
                    className={cutnavStyles['nav-button']}
                    aria-label='Open new chat Ctrl + Shift + O'
                >
                    <svg width={20} height={20} color='var(--font-color)'>
                        <use href='#chat-icon' />
                    </svg>
                </Link>
            </LabelledElement>

            <LabelledElement
                title='Search'
                subtitle='Ctrl + K'
                position='right'
            >
                <button
                    className={cutnavStyles['nav-button']}
                    aria-label='Search Ctrl + K'
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
