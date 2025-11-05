import type { ReactNode } from 'react';
import type { ModalList, ModalId } from '@/types/ModalTypes';

import SearchModal from '../SearchModal/SearchModal';
import ProfileModal from '../Navbar/components/ProfileModal';
import SettingsModal from '../SettingsModal';

interface ModalComponent {
    id: ModalId;

    component: (props: ModalList[ModalId]) => ReactNode;
}

export const modalList: ModalComponent[] = [
    {
        id: 'search',

        component: (props) => <SearchModal {...props} />,
    },

    {
        id: 'profileModal',

        component: (props) => <ProfileModal {...props} />,
    },

    {
        id: 'settings',

        component: (props) => <SettingsModal {...props} />,
    },
];
