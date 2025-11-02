import type { Dispatch } from 'react';

import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';

import CutNavButtons from './CutNavButtons';

import LabelledElement from '@/UI/LabelledElement';

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
                    <LabelledElement
                        title='Open navigation panel'
                        subtitle='Ctrl + N + P'
                        labelId='navbar-toggle-button'
                        position='right'
                    >
                        <button
                            className={cutnavStyles['sidebar-button']}
                            onClick={() => setShowFullNavbar(true)}
                            aria-labelledby='navbar-toggle-button'
                        >
                            <svg
                                width={20}
                                height={20}
                                color='var(--font-color)'
                            >
                                <use href='#sidebar-toggle-icon' />
                            </svg>
                        </button>
                    </LabelledElement>

                    <CutNavButtons />
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
