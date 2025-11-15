'use client';

import Image from 'next/image';

import { useModalStore } from '@/store/ModalStore/useModalStore';

import ProfileModal from '@modals/ProfileModal';

import LabelledElement from '@/UI/LabelledElement';

import cutnavStyles from '../CutNavbarContent.module.scss';

export default function CutProfileBlock() {
    const openModal = useModalStore((state) => state.openModal);

    const closeModal = useModalStore((state) => state.closeModal);

    return (
        <div className={cutnavStyles['profile-block']}>
            <LabelledElement title='Open profile' position='right'>
                <button
                    className={cutnavStyles['nav-button']}
                    aria-label='Open profile'
                    onClick={(event) =>
                        openModal(
                            <ProfileModal
                                relativeElement={event.currentTarget}
                                shiftX={80}
                                position='top'
                                closeModal={closeModal}
                            />
                        )
                    }
                >
                    <Image src={'/globe.svg'} width={24} height={24} alt='' />
                </button>
            </LabelledElement>
        </div>
    );
}
