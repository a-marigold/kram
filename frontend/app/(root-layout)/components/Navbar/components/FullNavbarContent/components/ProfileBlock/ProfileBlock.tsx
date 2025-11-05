'use client';

import { useModalStore } from '@/store/ModalStore/useModalStore';

import Image from 'next/image';

import navStyles from './ProfileBlock.module.scss';

export default function ProfileBlock() {
    const openModal = useModalStore((state) => state.openModal);
    const closeModal = useModalStore((state) => state.closeModal);

    return (
        <div className={navStyles['profile-block']}>
            <button
                className={navStyles['profile-button']}
                aria-label='Open profile'
                onClick={(event) => {
                    openModal('profileModal', {
                        closeModal,
                        relativeElement: event.currentTarget,
                        position: 'top',
                    });
                }}
            >
                <Image src='/globe.svg' alt='' width={24} height={24} />

                <div className={navStyles['name-block']}>
                    <span className={navStyles['name']}> Profile name </span>
                </div>
            </button>
        </div>
    );
}
