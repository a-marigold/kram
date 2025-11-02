import type { Dispatch } from 'react';

import Link from 'next/link';
import Image from 'next/image';

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
                        <Link
                            href='/'
                            prefetch
                            className={cutnavStyles['nav-button']}
                            aria-label='Open new chat'
                        >
                            <svg
                                width={20}
                                height={20}
                                color='var(--font-color)'
                            >
                                <use href='#chat-icon' />
                            </svg>
                        </Link>

                        <button
                            className={cutnavStyles['nav-button']}
                            aria-label='Search'
                        >
                            <svg
                                width={20}
                                height={20}
                                color='var(--font-color)'
                            >
                                <use href='#search-icon' />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={cutnavStyles['profile-block']}>
                    <button
                        className={cutnavStyles['nav-button']}
                        aria-label='Open profile'
                    >
                        <Image
                            src={'/globe.svg'}
                            alt=''
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
