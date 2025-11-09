import Link from 'next/link';

import headerStyles from './Header.module.scss';

export default function Header() {
    return (
        <header className={headerStyles['header']}>
            <Link href='/' className={headerStyles['home-link']}>
                <h1 className={headerStyles['title']}>None</h1>
            </Link>
        </header>
    );
}
