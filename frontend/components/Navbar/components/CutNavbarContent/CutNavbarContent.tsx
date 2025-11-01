import type { Dispatch } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import navStyles from '../../Navbar.module.scss';
import cutnavStyles from './CutNavbarContent.module.scss';

const buttonList = [
    {
        iconHref: '#chat-icon',

        ariaLabel: 'Open a new chat',
    },
    {
        iconHref: '#search-icon',
        ariaLabel: 'Search in chats',
    },
];

interface CutNavbarContentProps {
    setShowFullNavbar: Dispatch<boolean>;
}
export default function CutNavbarContent({
    setShowFullNavbar,
}: CutNavbarContentProps) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={navStyles['navbar-content']}
            >
                <div className={cutnavStyles['head']}>
                    <button
                        className={cutnavStyles['sidebar-button']}
                        onClick={() => setShowFullNavbar(true)}
                    >
                        <svg width={20} height={20} color='var(--font-color)'>
                            <use href='#sidebar-toggle-icon' />
                        </svg>
                    </button>
                    <div className={cutnavStyles['nav-buttons-block']}>
                        {buttonList.map((button) => (
                            <button
                                className={cutnavStyles['nav-button']}
                                aria-label={button.ariaLabel}
                            >
                                <svg width={20} height={20}>
                                    <use href={button.iconHref} />
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>

                <div className={cutnavStyles['profile-block']}>
                    <button className={cutnavStyles['profile-button']}></button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
