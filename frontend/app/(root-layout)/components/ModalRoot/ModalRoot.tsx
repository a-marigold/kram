'use client';

import { useEffect } from 'react';

import { useModalStore } from '@/store/ModalStore/useModalStore';

import {
    lockElementScroll,
    unlockElementScroll,
} from '@/utils/LockElementScroll';

import { modalList } from './modalList';

// __
import ModalBackdrop from '@/UI/ModalBackdrop';
// __

export default function ModalRoot() {
    const currentModalId = useModalStore((state) => state.currentModalId);

    const currentModal = modalList.find((modal) => modal.id === currentModalId);

    useEffect(() => {
        if (currentModalId) {
            lockElementScroll(document.body);
        }

        return () => {
            unlockElementScroll(document.body);
        };
    }, [currentModalId]);
    return (
        <ModalBackdrop closeModal={() => alert('a')}>
            {currentModal?.component}
        </ModalBackdrop>
    );
}
