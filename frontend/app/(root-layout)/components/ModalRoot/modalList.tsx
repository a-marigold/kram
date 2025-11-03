import type { ReactNode } from 'react';
import type { ModalWindow } from '@/types/ModalTypes';

import SearchModal from '../SearchModal/SearchModal';
import type { SearchModalProps } from '../SearchModal/SearchModal';

interface Modal {
    id: ModalWindow;
    component: (props: SearchModalProps) => ReactNode;
}

export const modalList: Modal[] = [
    {
        id: 'search',

        component: (props: { text: string }) => <SearchModal {...props} />,
    },
];
