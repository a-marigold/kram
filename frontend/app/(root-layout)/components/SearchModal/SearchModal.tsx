import type { BaseModalProps } from '@/types/ModalTypes';

import ModalBackdrop from '@/UI/ModalBackdrop';
import LargeButton from '@/UI/LargeButton/LargeButton';

import searchStyles from './SearchModal.module.scss';

export default function SearchModal({ closeModal }: BaseModalProps) {
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

                    <button
                        className={searchStyles['close-button']}
                        onClick={closeModal}
                    >
                        <svg
                            className={searchStyles['cross-icon']}
                            width={20}
                            height={20}
                        >
                            <use href='#cross-icon' />
                        </svg>
                    </button>
                </div>

                <div className={searchStyles['chat-box']}>
                    <LargeButton
                        title='New chat'
                        icon={
                            <svg width={20} height={20}>
                                <use href='#chat-icon' />
                            </svg>
                        }
                        aria-label='Open new chat'
                    />

                    <div className={searchStyles['chat-list']}></div>
                </div>
            </div>
        </ModalBackdrop>
    );
}
