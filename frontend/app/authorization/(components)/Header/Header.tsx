import Link from 'next/link';

import headerStyles from './Header.module.scss';

export default function Header() {
    return (
        <header className={headerStyles['header']}>
            <Link href='/' className={headerStyles['home-link']}>
                <svg width={70}>
                    <use href='#none-logo' />
                </svg>
            </Link>
        </header>
    );
}
