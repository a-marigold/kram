'use client';

import { useEffect } from 'react';

import { useModalStore } from '@/store/ModalStore/useModalStore';

import {
    lockElementScroll,
    unlockElementScroll,
} from '@/utils/LockElementScroll';

import { modalList } from './modalList';

export default function ModalRoot() {
    const currentModalId = useModalStore((state) => state.currentModalId);
    const currentModalProps = useModalStore((state) => state.props);

    const currentModal = modalList.find((modal) => modal.id === currentModalId);

    useEffect(() => {
        if (currentModalId) {
            lockElementScroll(document.body);
        }

        return () => {
            unlockElementScroll(document.body);
        };
    }, [currentModalId]);

    return currentModalProps && currentModal?.component(currentModalProps);
}
