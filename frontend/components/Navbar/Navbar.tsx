import NavButtons from './components/NavButtons';
import ChatList from './components/ChatList';

import navStyles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <div className={navStyles['navbar']}>
            <div className={navStyles['head']}>
                <button className={navStyles['sidebar-button']}>
                    <svg width={20} height={20}>
                        <use href='#sidebar-toggle-icon' />
                    </svg>
                </button>
            </div>

            <NavButtons />

            <ChatList />
        </div>
    );
}
