import type { BaseModalProps } from '@/types/ModalTypes';

import ModalBackdrop from '@/UI/ModalBackdrop';

import searchStyles from './SearchModal.module.scss';

export interface SearchModalProps extends BaseModalProps {}

export default function SearchModal({ closeModal }: SearchModalProps) {
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
                    <div className={searchStyles['chat-list']}></div>
                </div>
            </div>
        </ModalBackdrop>
    );
}
