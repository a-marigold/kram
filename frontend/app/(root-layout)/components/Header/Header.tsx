'use client';

import { useSettingsStore } from '@/store/SettingsStore';

import { useAuthStore } from '@/store/AuthStore';

import AuthButtons from './components/AuthButtons';

import headerStyles from './Header.module.scss';

export default function Header() {
    const userName = useAuthStore((state) => state.user?.userName);

    const setShowNavbar = useSettingsStore((state) => state.setShowNavbar);

    return (
        <header className={headerStyles['header']}>
            <button
                className={headerStyles['open-sidebar-button']}
                aria-label='Open navigation panel'
                onClick={() => setShowNavbar(true)}
            >
                <svg width={20} height={20} color='var(--icon-color)'>
                    <use href='#sidebar-open-icon' />
                </svg>
            </button>

            {!userName && <AuthButtons />}
        </header>
    );
}
