'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useSettingsStore } from '@/store/SettingsStore';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';

import AuthButtons from './components/AuthButtons';

import headerStyles from './Header.module.scss';

export default function Header() {
    const userName = useAuthStore((state) => state.user?.userName);

    const setShowNavbar = useSettingsStore((state) => state.setShowNavbar);

    const maxWidthMatchces = useMediaQuery('max-width: 600px');

    return (
        <header className={headerStyles['header']}>
            {maxWidthMatchces && (
                <button
                    className={headerStyles['open-sidebar-button']}
                    onClick={() => setShowNavbar(true)}
                >
                    <svg width={20} height={20} color='var(--icon-color)'>
                        <use href='#sidebar-open-icon' />
                    </svg>
                </button>
            )}

            {!userName && <AuthButtons />}
        </header>
    );
}
