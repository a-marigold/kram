import type { ReactNode } from 'react';
import type { ModalList, ModalId } from '@/types/ModalTypes';

import SearchModal from '../SearchModal/SearchModal';
import ProfileModal from '../Navbar/components/ProfileModal';
import SettingsModal from '../SettingsModal';

interface ModalComponent<K extends ModalId = ModalId> {
    id: K;

    component: (props: ModalList[K]) => ReactNode;
}

export const modalList: { [K in ModalId]: ModalComponent<K> } = {
    search: {
        id: 'search',

        component: (props) => <SearchModal {...props} />,
    },

    settings: {
        id: 'settings',

        component: (props) => <SettingsModal {...props} />,
    },

    profileModal: {
        id: 'profileModal',

        component: (props) => <ProfileModal {...props} />,
    },
};
