import type { Dispatch } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import navStyles from '../../Navbar.module.scss';
import cutnavStyles from './CutNavbarContent.module.scss';

interface CutNavbarContentProps {
    setShowFullNavbar: Dispatch<boolean>;
}
export default function CutNavbarContent({
    setShowFullNavbar,
}: CutNavbarContentProps) {
    return (
        <>
            <div className={cutnavStyles['head']}>
                <button
                    className={cutnavStyles['sidebar-button']}
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
