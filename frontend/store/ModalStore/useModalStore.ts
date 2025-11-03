'use client';

import { create } from 'zustand';

import type { ModalWindow } from '@/types/ModalWindow';

interface ModalStore<TProps> {
    currentModalId: ModalWindow | null;
    props: TProps | null;

    openModal: (modalId: ModalWindow, props?: TProps) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalStore<null>>()((set) => ({
    currentModalId: null,

    props: null,

    openModal: (modalId, props) =>
        set({ currentModalId: modalId, props: props }),

    closeModal: () => set({ currentModalId: null, props: null }),
}));
