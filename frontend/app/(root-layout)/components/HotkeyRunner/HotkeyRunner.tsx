'use client';

import { useEffect } from 'react';

import { useHotkeys } from '@/hooks/useHotkeys';

import { useHotkeyStore } from '@/store/HotkeyStore';

import { useHotkeyConfig } from './useHotkeyConfig';

export default function HotkeyRunner() {
    const registerHotkey = useHotkeyStore((state) => state.registerHotkey);
    const unregisterHotkey = useHotkeyStore((state) => state.unregisterHotkey);

    useHotkeys();

    const config = useHotkeyConfig();

    useEffect(() => {
        config.forEach(({ name, key, callback }) => {
            registerHotkey(name, key, callback);
            console.log(name);
        });

        return () => {
            config.forEach(({ name }) => {
                unregisterHotkey(name);
            });
        };
    }, []);

    return null;
}
