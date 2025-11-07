// TODO: Add keydown || keyup choice

'use client';

import { useEffect } from 'react';

import { useHotkeyStore } from '@/store/HotkeyStore';

function hotkeyMatches(key: string, event: KeyboardEvent) {
    const specialKeys = key
        .toLowerCase()

        .split('+')
        .filter(
            (part) => part === 'ctrl' || part === 'shift' || part === 'alt'
        );

    const plainKeys = key
        .toLowerCase()
        .split('+')
        .filter(
            (part) => part !== 'ctrl' && part !== 'shift' && part !== 'alt'
        );

    const plainKeysMatches = plainKeys.map((part) => part === event.key);

    return (
        specialKeys.includes('ctrl') &&
        event.ctrlKey &&
        specialKeys.includes('alt') &&
        event.altKey &&
        specialKeys.includes('shift') &&
        event.shiftKey &&
        plainKeysMatches
    );
}

export function useHotkeys() {
    const hotkeys = useHotkeyStore((state) => state.hotkeys);

    function listenHotkeys(event: KeyboardEvent) {
        hotkeys.forEach(({ key, callback }) => {
            const keys = key.split('+').filter(Boolean);

            keys.forEach((key) => {
                if (hotkeyMatches(key, event)) {
                    callback();
                }
            });
        });
    }

    useEffect(() => {
        document.addEventListener('keydown', listenHotkeys);

        return () => {
            document.removeEventListener('keydown', listenHotkeys);
        };
    }, []);
}
