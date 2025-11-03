'use client';

import { create } from 'zustand';

import type { ModalWindow } from '@/types/ModalWindow';

interface ModalStore {
    currentModalId: ModalWindow;

    setCurrentModal: (
        modalId: ModalWindow,
        props?: { [key: string]: any }
    ) => void;
}

export const useModalStore = create<ModalStore>()((set) => ({
    currentModalId: null,
    setCurrentModal: (modalId) => set({ currentModalId: modalId }),
}));
