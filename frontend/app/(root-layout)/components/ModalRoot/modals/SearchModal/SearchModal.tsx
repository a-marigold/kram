import type { BasicModalProps } from '@/types/ModalProps';

import ModalBackdrop from '@/UI/ModalBackdrop';

import LargeLink from '@/UI/LargeLink/LargeLink';
import LabelledElement from '@/UI/LabelledElement';

import searchStyles from './SearchModal.module.scss';

export default function SearchModal({ closeModal }: BasicModalProps) {
    return (
        <ModalBackdrop onClose={closeModal} backdropType='empty'>
            <div
                className={searchStyles['search-modal']}
                onClick={(event) => event.stopPropagation()}
                // tabIndex={-1}
            >
                <div className={searchStyles['input-block']}>
                    <input
                        type='text'
                        placeholder='Find in chats...'
                        className={searchStyles['search-input']}
                    />

                    <LabelledElement
                        title='Close the search window'
                        subtitle='Esc'
                        position='right'
                    >
                        <button
                            className={searchStyles['close-button']}
                            onClick={closeModal}
                            aria-label='Close the search window'
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
