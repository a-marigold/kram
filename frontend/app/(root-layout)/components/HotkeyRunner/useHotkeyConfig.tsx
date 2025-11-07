'use client';

import { useEffect } from 'react';

import { useModalStore } from '@/store/ModalStore';

import { useHotkeyStore } from '@/store/HotkeyStore';

import type { Hotkey } from '@/types/Hotkey';

import SearchModal from '@modals/SearchModal';
import SettingsModal from '@modals/SettingsModal';

export function useHotkeyConfig() {
    const openModal = useModalStore((state) => state.openModal);
    const closeModal = useModalStore((state) => state.closeModal);

    const registerHotkey = useHotkeyStore((state) => state.registerHotkey);
    const unregisterHotkey = useHotkeyStore((state) => state.unregisterHotkey);

    useEffect(() => {
        const config: Hotkey[] = [
            {
                name: 'search',
                key: 'O',
                callback: () =>
                    openModal(<SearchModal closeModal={closeModal} />),
            },
            {
                name: 'settings',
                key: 'L',
                callback: () => {
                    openModal(<SettingsModal closeModal={closeModal} />);
                },
            },
            {
                name: 'closeModal',
                key: 'Esc',
                callback: closeModal,
            },
        ];

        config.forEach(({ name, key, callback }) => {
            registerHotkey(name, key, callback);
        });

        return () => {
            config.forEach(({ name }) => {
                unregisterHotkey(name);
            });
        };
    }, []);
}
