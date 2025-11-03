'use client';

import { create } from 'zustand';

import type { ModalList, ModalId } from '@/types/ModalTypes';

export interface ModalStore {
    currentModalId: ModalId | null;
    props: ModalList[ModalId] | null;

    openModal: (modalId: ModalId, props: ModalList[ModalId]) => void;

    closeModal: () => void;
}

export const useModalStore = create<ModalStore>()((set) => ({
    currentModalId: null,

    props: null,

    openModal: (modalId, props) =>
        set({ currentModalId: modalId, props: props }),

    closeModal: () => set({ currentModalId: null, props: null }),
}));
