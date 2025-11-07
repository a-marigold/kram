// TODO: Render modal windows via straight component in store

'use client';

import { useState, useEffect } from 'react';

import { createPortal } from 'react-dom';

import { useModalStore } from '@/store/ModalStore';

import {
    lockElementScroll,
    unlockElementScroll,
} from '@/utils/LockElementScroll';

export default function ModalRoot() {
    const currentModal = useModalStore((state) => state.currentModal);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        console.log('ModalRoot render', currentModal);
    }, [currentModal]);

    useEffect(() => {
        if (currentModal) {
            lockElementScroll(document.body);
        }

        return () => {
            unlockElementScroll(document.body);
        };
    }, [currentModal]);

    if (!mounted || !currentModal) return null;

    return createPortal(currentModal, document.body);
}
