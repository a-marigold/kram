'use client';

import { useModalStore } from '@/store/ModalStore/useModalStore';

import { modalList } from './modalList';

export default function ModalRoot() {
    const currentModalId = useModalStore((state) => state.currentModalId);

    const currentModal = modalList.find((modal) => modal.id === currentModalId);

    return <div>{currentModal?.component}</div>;
}
