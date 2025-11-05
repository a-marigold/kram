import type { ReactNode } from 'react';
import type { ModalList, ModalId } from '@/types/ModalTypes';

import SearchModal from '../SearchModal/SearchModal';
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
        id: 'settings',

        component: (props) => <SettingsModal {...props} />,
    },
];
