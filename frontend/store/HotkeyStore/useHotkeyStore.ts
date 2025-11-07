'use client';

import { create } from 'zustand';

import type { Hotkey } from '@/types/Hotkey';

interface HotkeyStore {
    hotkeys: Hotkey[];

    registerHotkey: (
        name: Hotkey['name'],

        key: Hotkey['key'],

        callback: Hotkey['callback']
    ) => void;

    unregisterHotkey: (name: Hotkey['name']) => void;
}
export const useHotkeyStore = create<HotkeyStore>()((set) => ({
    hotkeys: [],
    registerHotkey: (name, key, callback) =>
        set((state) => ({
            hotkeys: [
                ...state.hotkeys,
                { name: name, key: key, callback: callback },
            ],
        })),
    unregisterHotkey: (name) =>
        set((state) => ({
            hotkeys: state.hotkeys.filter((hotkey) => hotkey.name !== name),
        })),
}));
