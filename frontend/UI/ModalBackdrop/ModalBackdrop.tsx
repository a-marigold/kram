'use client';

import type { ReactNode } from 'react';

import modalStyles from './ModalBackdrop.module.scss';

interface ModalBackdropProps {
    backdropType?: 'empty' | 'blur';

    onClose: () => void;

    children: ReactNode;
}

export default function ModalBackdrop({
    backdropType = 'blur',
    onClose,
    children,
}: ModalBackdropProps) {
    return (
        <div
            className={`${modalStyles['modal-backdrop']} ${
                modalStyles[`type-${backdropType}`]
            }`}
            onClick={() => {
                onClose();
            }}
        >
            {children}
        </div>
    );
}
