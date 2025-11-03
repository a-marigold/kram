'use client';

import { create } from 'zustand';

type ModalWindow = 'search' | 'settings' | null;

interface ModalStore {
    currentModal: ModalWindow;

    setCurrentModal: (
        modal: ModalWindow,
        props?: { [key: string]: any }
    ) => void;
}

const useModalStore = create<ModalStore>()((set) => ({
    currentModal: null,
    setCurrentModal: (modal) => set((state) => ({ currentModal: modal })),
}));
