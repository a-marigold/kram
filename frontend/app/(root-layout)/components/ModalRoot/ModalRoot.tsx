// TODO: Delete this component. Render modal windows with createPortal

'use client';

import { useEffect } from 'react';

import { useModalStore } from '@/store/ModalStore/useModalStore';

import {
    lockElementScroll,
    unlockElementScroll,
} from '@/utils/LockElementScroll';

import { modalList } from './modalList';

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

    return (
        currentModal && modalList[currentModal.id].component(currentModal.props)
    );
}
