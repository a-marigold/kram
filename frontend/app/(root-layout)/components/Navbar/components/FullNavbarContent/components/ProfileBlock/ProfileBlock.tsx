'use client';

import { useAuthStore } from '@/store/AuthStore';
import { useModalStore } from '@/store/ModalStore/useModalStore';

import ProfileModal from '@modals/ProfileModal';

import Image from 'next/image';

import navStyles from './ProfileBlock.module.scss';

export default function ProfileBlock() {
    const openModal = useModalStore((state) => state.openModal);
    const closeModal = useModalStore((state) => state.closeModal);

    const userName = useAuthStore((state) => state.user?.userName);

    return (
        <div className={navStyles['profile-block']}>
            <button
                className={navStyles['profile-button']}
                aria-label='Open profile'
                onClick={(event) => {
                    openModal(
                        <ProfileModal
                            relativeElement={event.currentTarget}
                            closeModal={closeModal}
                        />
                    );
                }}
            >
                <Image src='/globe.svg' alt='' width={24} height={24} />

                <div className={navStyles['name-block']}>
                    <span className={navStyles['name']}> {userName} </span>
                </div>
            </button>
        </div>
    );
}
