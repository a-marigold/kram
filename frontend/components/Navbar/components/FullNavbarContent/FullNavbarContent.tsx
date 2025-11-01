import type { Dispatch } from 'react';

import NavButtons from '../NavButtons';
import ChatList from '../ChatList';
import ProfileBlock from '../ProfileBlock';

import cutnavStyles from './CutNavbarContent.module.scss';
import navStyles from '../../Navbar.module.scss';

interface FullNavbarContentProps {
    setShowFullNavbar: Dispatch<boolean>;
}
export default function FullNavbarContent({
    setShowFullNavbar,
}: FullNavbarContentProps) {
    return (
        <>
            <div className={navStyles['head']}>
                <button
                    className={navStyles['sidebar-button']}
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
        </>
    );
}
