'use client';

import { create } from 'zustand';

import type { ModalList, ModalId } from '@/types/ModalTypes';

interface ModalState<K extends ModalId> {
    id: K;
    props: ModalList[K];
}

export interface ModalStore {
    currentModal: ModalState<ModalId> | null;

    openModal: (modalId: ModalId, props: ModalList[ModalId]) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalStore>()((set) => ({
    currentModal: null,

    openModal: (modalId, props) =>
        set({ currentModal: { id: modalId, props: props } }),

    closeModal: () => set({ currentModal: null }),
}));
