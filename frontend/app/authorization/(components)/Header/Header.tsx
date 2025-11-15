import Link from 'next/link';

import headerStyles from './Header.module.scss';

export default function Header() {
    return (
        <header className={headerStyles['header']}>
            <Link
                href='/'
                aria-label='Go to home page'
                className={headerStyles['home-link']}
            >
                <svg width={70} color='var(--font-color)'>
                    <use href='#none-logo-icon' />
                </svg>
            </Link>
        </header>
    );
}
