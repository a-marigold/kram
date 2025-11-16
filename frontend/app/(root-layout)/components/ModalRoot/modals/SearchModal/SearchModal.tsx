'use clinet';

import { useHotkeyStore } from '@/store/HotkeyStore';

import type { BasicModalProps } from '@/types/ModalProps';

import ModalBackdrop from '@/UI/ModalBackdrop';

import LargeLink from '@/UI/LargeLink/LargeLink';
import LabelledElement from '@/UI/LabelledElement';

import searchStyles from './SearchModal.module.scss';

export default function SearchModal({ closeModal }: BasicModalProps) {
    const hotkeys = useHotkeyStore((state) => state.hotkeys);
    const closeModalHotkey = hotkeys.find(
        (hotkey) => hotkey.name === 'closeModal'
    )?.key;

    return (
        <ModalBackdrop onClose={closeModal} backdropType='empty'>
            <div
                role='dialog'
                aria-modal='true'
                className={searchStyles['search-modal']}
                onClick={(event) => event.stopPropagation()}
            >
                <div className={searchStyles['input-block']}>
                    <input
                        type='text'
                        placeholder='Find in chats...'
                        className={searchStyles['search-input']}
                    />

                    <LabelledElement
                        title='Close the search window'
                        subtitle={closeModalHotkey}
                        position='left'
                    >
                        <button
                            className={searchStyles['close-button']}
                            onClick={closeModal}
                            aria-label={`Close the search window ${closeModalHotkey}`}
                        >
                            <svg
                                className={searchStyles['cross-icon']}
                                width={20}
                                height={20}
                            >
                                <use href='#cross-icon' />
                            </svg>
                        </button>
                    </LabelledElement>
                </div>

                <div className={searchStyles['chat-box']}>
                    <LargeLink
                        href='/'
                        title='New chat'
                        aria-label='Open new chat'
                        icon={
                            <svg width={20} height={20}>
                                <use href='#chat-icon' />
                            </svg>
                        }
                        onClick={closeModal}
                    />

                    <div className={searchStyles['chat-list']}></div>
                </div>
            </div>
        </ModalBackdrop>
    );
}
