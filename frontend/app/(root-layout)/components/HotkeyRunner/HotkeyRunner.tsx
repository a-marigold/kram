'use client';

import { useHotkeys } from '@/hooks/useHotkeys';

import { useHotkeyConfig } from './useHotkeyConfig';

export default function HotkeyRunner() {
    useHotkeys();

    useHotkeyConfig();

    return null;
}
