'use client';

import { useModalStore } from '@/store/ModalStore';

import type { Hotkey } from '@/types/Hotkey';

import SearchModal from '@modals/SearchModal';
import SettingsModal from '@modals/SettingsModal';

//! TODO: TEST:
import AuthModal from '../ModalRoot/modals/AuthModal';

export function useHotkeyConfig() {
    const openModal = useModalStore((state) => state.openModal);
    const closeModal = useModalStore((state) => state.closeModal);

    const config: Hotkey[] = [
        {
            name: 'search',
            key: 'Ctrl+Shift+K',
            callback: () => {
                openModal(<SearchModal closeModal={closeModal} />);
            },
        },
        {
            name: 'settings',
            key: 'Ctrl+Shift+S',
            callback: () => {
                openModal(<SettingsModal closeModal={closeModal} />);
            },
        },
        {
            name: 'closeModal',
            key: 'Escape',
            callback: closeModal,
        },
    ];

    return config;
}
