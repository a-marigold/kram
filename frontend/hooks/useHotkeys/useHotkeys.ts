// TODO: Add keydown || keyup choice

'use client';

import { useEffect, useRef } from 'react';

import { useHotkeyStore } from '@/store/HotkeyStore';

// function hotkeyMatches(key: string, event: KeyboardEvent) {
//     const specialKeys = key
//         .toLowerCase()

//         .split('+')

//         .filter(
//             (part) => part === 'ctrl' || part === 'shift' || part === 'alt'
//         );

//     const plainKeys = key
//         .toLowerCase()

//         .split('+')

//         .filter(
//             (part) => part !== 'ctrl' && part !== 'shift' && part !== 'alt'
//         );

//     const plainKeysMatches = plainKeys.includes(event.key.toLocaleLowerCase());

//     if (!specialKeys.length) return plainKeysMatches;

//     console.log(
//         `special keys: ${
//             (specialKeys.includes('ctrl') && event.ctrlKey) ||
//             (specialKeys.includes('alt') && event.altKey) ||
//             (specialKeys.includes('shift') && event.shiftKey)
//         }

//         plain keys: ${plainKeysMatches}

//         both: ${
//             (specialKeys.includes('ctrl') && event.ctrlKey) ||
//             (specialKeys.includes('alt') && event.altKey) ||
//             (specialKeys.includes('shift') &&
//                 event.shiftKey &&
//                 plainKeysMatches)
//         }
//         `
//     );

//     return (
//         ((specialKeys.includes('ctrl') && event.ctrlKey) ||
//             (specialKeys.includes('alt') && event.altKey) ||
//             (specialKeys.includes('shift') && event.shiftKey)) &&
//         plainKeysMatches
//     );
// }

function hotkeyMatches(key: string, event: KeyboardEvent) {
    const parts = key
        .toLocaleLowerCase()

        .split('+')
        .map((part) => part.trim());

    const hasCtrl = parts.includes('ctrl');
    const hasAlt = parts.includes('alt');
    const hasShift = parts.includes('shift');

    console.log(parts);

    const plainKeys = parts.filter(
        (part) => !['ctrl', 'shift', 'alt'].includes(part)
    );

    const specialMatch =
        (!hasCtrl || event.ctrlKey) &&
        (!hasAlt || event.altKey) &&
        (!hasShift || event.shiftKey);

    const plainMatch =
        plainKeys.length === 0 ||
        plainKeys.some((key) => key === event.key.toLowerCase());

    console.log(
        `special keys: ${specialMatch}, ${hasAlt}

        plain keys: ${plainMatch}, ${plainKeys}

        both: ${specialMatch && plainMatch}
        `
    );

    return specialMatch && plainMatch;
}

export function useHotkeys() {
    const hotkeys = useHotkeyStore((state) => state.hotkeys);
    const hotkeysRef = useRef<typeof hotkeys>(hotkeys);

    useEffect(() => {
        hotkeysRef.current = hotkeys;
    }, [hotkeys]);

    useEffect(() => {
        function listenHotkeys(event: KeyboardEvent) {
            hotkeysRef.current.forEach(({ key, callback }) => {
                if (hotkeyMatches(key, event)) {
                    callback(event);
                }
            });
        }

        document.addEventListener('keydown', listenHotkeys);

        return () => {
            document.removeEventListener('keydown', listenHotkeys);
        };
    }, []);
}
