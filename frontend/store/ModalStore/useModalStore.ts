'use client';

import { create } from 'zustand';

import type { ModalWindow, ModalProps } from '@/types/ModalTypes';

interface ModalStore {
    currentModalId: ModalWindow | null;
    props: ModalProps | null;

    openModal: (modalId: ModalWindow, props?: ModalProps) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalStore>()((set) => ({
    currentModalId: null,

    props: null,

    openModal: (modalId, props) =>
        set({ currentModalId: modalId, props: props }),

    closeModal: () => set({ currentModalId: null, props: null }),
}));
