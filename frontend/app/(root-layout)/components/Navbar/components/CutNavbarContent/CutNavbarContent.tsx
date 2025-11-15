import type { Dispatch } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import CutNavButtons from './components/CutNavButtons';
import CutProfileBlock from './components/CutProfileBlock';

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
                        position='right'
                    >
                        <button
                            className={`${navStyles['sidebar-button']} ${cutnavStyles['sidebar-button']}`}
                            onClick={() => setShowFullNavbar(true)}
                            aria-label='Open navigation panel Ctrl + N + P'
                        >
                            <svg
                                width={20}
                                height={20}
                                color='var(--font-color)'
                                className={cutnavStyles['sidebar-toggle-icon']}
                            >
                                <use href='#sidebar-toggle-icon' />
                            </svg>

                            <svg
                                width={17}
                                height={16}
                                color='var(--font-color)'
                                className={cutnavStyles['none-letter-icon']}
                            >
                                <use href='#none-letter-icon' />
                            </svg>
                        </button>
                    </LabelledElement>

                    <CutNavButtons />
                </div>

                <CutProfileBlock />
            </motion.div>
        </AnimatePresence>
    );
}
