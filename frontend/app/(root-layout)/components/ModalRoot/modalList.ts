import type { ReactNode } from 'react';

import type { ModalWindow } from '@/types/ModalWindow';

interface Modal {
    id: ModalWindow;
    component: ReactNode;
}

export const modalList: Modal[] = [
    {
        id: 'search',
        component: null,
    },
];
