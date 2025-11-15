import type { Dispatch } from 'react';

import Link from 'next/link';

import { AnimatePresence, motion } from 'framer-motion';

import NavButtons from './components/NavButtons';
import ChatList from './components/ChatList';
import ProfileBlock from './components/ProfileBlock';

import LabelledElement from '@/UI/LabelledElement';

import navStyles from '../../Navbar.module.scss';
import fullnavStyles from './FullNavbarContent.module.scss';

interface FullNavbarContentProps {
    setShowFullNavbar: Dispatch<boolean>;
}
export default function FullNavbarContent({
    setShowFullNavbar,
}: FullNavbarContentProps) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.59 }}
                className={navStyles['navbar-content']}
            >
                <div className={fullnavStyles['head']}>
                    <div className={fullnavStyles['brand-block']}>
                        <Link href='/' className={fullnavStyles['home-link']}>
                            <svg
                                width={17}
                                height={16}
                                color='var(--font-color)'
                            >
                                <use href='#none-letter-icon' />
                            </svg>
                        </Link>

                        <LabelledElement
                            title='Close navigation panel'
                            subtitle='Ctrl + N + P'
                            position='right'
                        >
                            <button
                                className={navStyles['sidebar-button']}
                                onClick={() => setShowFullNavbar(false)}
                                aria-label='Close navigation panel Ctrl + N + P'
                            >
                                <svg
                                    width={20}
                                    height={20}
                                    color='var(--secondary-font-color)'
                                >
                                    <use href='#sidebar-toggle-icon' />
                                </svg>
                            </button>
                        </LabelledElement>
                    </div>

                    <NavButtons />
                </div>

                <ChatList />

                <ProfileBlock />
            </motion.div>
        </AnimatePresence>
    );
}
