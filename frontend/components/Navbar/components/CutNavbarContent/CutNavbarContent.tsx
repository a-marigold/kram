import type { Dispatch } from 'react';

import cutnavStyles from './CutNavbarContent.module.scss';
import navStyles from '../../Navbar.module.scss';

interface CutNavbarContentProps {
    setShowFullNavbar: Dispatch<boolean>;
}
export default function CutNavbarContent({
    setShowFullNavbar,
}: CutNavbarContentProps) {
    return (
        <>
            <div className={navStyles['head']}>
                <button
                    className={navStyles['sidebar-button']}
                    onClick={() => setShowFullNavbar(true)}
                >
                    <svg width={20} height={20} color='var(--font-color)'>
                        <use href='#sidebar-toggle-icon' />
                    </svg>
                </button>

                <button></button>
                <button></button>
                <button></button>
            </div>

            <div className={cutnavStyles['profile-block']}>
                <button className={cutnavStyles['profile-button']}></button>
            </div>
        </>
    );
}
