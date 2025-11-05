'use client';

import { useModalStore } from '@/store/ModalStore/useModalStore';

import type { BaseModalProps } from '@/types/ModalTypes';

import DropDownModal from '@/UI/DropDownModal';

import PrimaryButton from '@/UI/PrimaryButton';

export default function ProfileModal({ closeModal }: BaseModalProps) {
    const openModal = useModalStore((state) => state.openModal);

    return (
        <DropDownModal
            onClose={closeModal}
            topList={
                <>
                    <PrimaryButton
                        title='example_ID'
                        aria-label='Copy your profile ID'
                        onClick={() => {
                            navigator.clipboard.writeText('example_ID');
                        }}
                        icon={
                            <svg
                                width={20}
                                height={20}
                                color='var(--secondary-font-color)'
                            >
                                <use href='#profile-icon' />
                            </svg>
                        }
                    />

                    <PrimaryButton
                        title='Settings'
                        aria-label='Open settings window'
                        onClick={() => {
                            openModal('settings', { closeModal });
                        }}
                        icon={
                            <svg
                                width={20}
                                height={20}
                                color='var(--secondary-font-color)'
                            >
                                <use href='#settings-icon' />
                            </svg>
                        }
                    />
                </>
            }
            bottomList={
                <>
                    <PrimaryButton
                        title='Log Out'
                        aria-label='Log out from your profile'
                        icon={
                            <svg
                                width={20}
                                height={20}
                                color='var(--secondary-font-color)'
                            >
                                <use href='#logout-icon' />
                            </svg>
                        }
                    />
                </>
            }
        />
    );
}
