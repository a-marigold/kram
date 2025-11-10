'use client';

import AuthButtons from './components/AuthButtons';

import headerStyles from './Header.module.scss';

export default function Header() {
    return (
        <header className={headerStyles['header']}>
            <AuthButtons />
        </header>
    );
}
