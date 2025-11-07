'use client';

import { useModalStore } from '@/store/ModalStore';

import SearchModal from '../ModalRoot/modals/SearchModal';
import SettingsModal from '../ModalRoot/modals/SettingsModal';

import type { Hotkey } from '@/types/Hotkey';

export function useHotkeyConfig() {
    const openModal = useModalStore((state) => state.openModal);
    const closeModal = useModalStore((state) => state.closeModal);

    const config: Hotkey[] = [
        {
            name: 'search',
            key: 'O',
            callback: () => openModal(<SearchModal closeModal={closeModal} />),
        },
    ];

    return config;
}
