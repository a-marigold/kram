'use client';

import { useEffect } from 'react';

import { useModalStore } from '@/store/ModalStore';

import {
    lockElementScroll,
    unlockElementScroll,
} from '@/utils/LockElementScroll';

export default function ModalRoot() {
    const currentModal = useModalStore((state) => state.currentModal);

    useEffect(() => {
        if (currentModal) {
            lockElementScroll(document.body);
        }

        return () => {
            unlockElementScroll(document.body);
        };
    }, [currentModal]);

    if (!currentModal) return null;

    return currentModal;
}
