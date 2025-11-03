'use client';

import type { ReactNode } from 'react';

import modalStyles from './ModalBackdrop.module.scss';

interface ModalBackdropProps {
    backdropType?: 'empty' | 'blur';

    closeModal: () => void;

    children: ReactNode;
}

export default function ModalBackdrop({
    backdropType = 'blur',
    closeModal,
    children,
}: ModalBackdropProps) {
    return (
        <div
            className={`${modalStyles['modal-backdrop']} ${
                modalStyles[`type-${backdropType}`]
            }`}
            onClick={() => {
                closeModal();
            }}
        >
            {children}
        </div>
    );
}
