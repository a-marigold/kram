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
        {
            name: 'settings',
            key: 'l',
            callback: () => {
                console.log(<SettingsModal closeModal={closeModal} />);
                openModal(<SettingsModal closeModal={closeModal} />);
            },
        },
        {
            name: 'closeModal',
            key: 'Esc',
            callback: closeModal,
        },
    ];

    return config;
}
