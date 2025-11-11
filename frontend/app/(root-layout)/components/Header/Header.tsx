'use client';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';

import AuthButtons from './components/AuthButtons';

import headerStyles from './Header.module.scss';

export default function Header() {
    const userName = useAuthStore((state) => state.user?.userName);

    return (
        !userName && (
            <header className={headerStyles['header']}>
                <AuthButtons />
            </header>
        )
    );
}
