'use client';

import { useModalStore } from '@/store/ModalStore/useModalStore';

import type { BasicModalProps } from '@/types/ModalProps';

import SettingsModal from '@modals/SettingsModal';

import DropDownModal from '@/UI/DropDownModal';
import type { DropDownModalProps } from '@/UI/DropDownModal';

import PrimaryButton from '@/UI/PrimaryButton';

export type ProfileModalProps = Pick<
    DropDownModalProps,
    'relativeElement' | 'position' | 'shiftX' | 'shiftY'
> &
    BasicModalProps;

export default function ProfileModal({
    closeModal,

    ...dropDownProps
}: ProfileModalProps) {
    const openModal = useModalStore((state) => state.openModal);

    return (
        <DropDownModal
            {...dropDownProps}
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
                            openModal(
                                <SettingsModal closeModal={closeModal} />
                            );
                        }}
                        icon={
                            <svg
                                width={20}
                                height={20}
                                color='var(--secondary-font-color)'
                            >
                                <use href='#gear-icon' />
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
