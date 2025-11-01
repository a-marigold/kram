import type { Dispatch } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import NavButtons from './components/NavButtons';
import ChatList from './components/ChatList';
import ProfileBlock from './components/ProfileBlock';

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
                    <button
                        className={fullnavStyles['sidebar-button']}
                        onClick={() => setShowFullNavbar(false)}
                    >
                        <svg width={20} height={20}>
                            <use href='#sidebar-toggle-icon' />
                        </svg>
                    </button>

                    <NavButtons />
                </div>

                <ChatList />

                <ProfileBlock />
            </motion.div>
        </AnimatePresence>
    );
}
