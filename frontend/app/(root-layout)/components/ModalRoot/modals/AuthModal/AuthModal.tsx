'use client';

import type { BasicModalProps } from '@/types/ModalProps';

import { authVariantList, authVariantHandler } from './authVariantList';

import ModalBackdrop from '@/UI/ModalBackdrop';

import AccessButton from '@/UI/AccessButton';

import authStyles from './AuthModal.module.scss';

export default function AuthModal({ closeModal }: BasicModalProps) {
    return (
        <ModalBackdrop>
            <div
                role='dialog'
                aria-modal='true'
                className={authStyles['auth-modal']}
                onClick={(event) => event.stopPropagation()}
            >
                <div className={authStyles['head']}>
                    <button
                        className={authStyles['close-button']}
                        onClick={closeModal}
                    >
                        <svg width={20} height={20} color='var(--font-color)'>
                            <use href='#cross-icon' />
                        </svg>
                    </button>
                </div>

                <h1 className={authStyles['title']}>Login or register</h1>

                <div className={authStyles['auth-content']}>
                    <div className={authStyles['oauth-list']}>
                        {/* {authVariantList.map((variant) => )} */}
                    </div>
                    <div className={authStyles['divider-block ']}>
                        <div className={authStyles['divider']} />
                        <span className={authStyles['divider-text']}>OR</span>
                        <div className={authStyles['divider']} />
                    </div>

                    <form>
                        <input type='text' />

                        <AccessButton
                            title='Continue'
                            aria-label='Continue with your email'
                        />
                    </form>
                </div>
            </div>
        </ModalBackdrop>
    );
}
