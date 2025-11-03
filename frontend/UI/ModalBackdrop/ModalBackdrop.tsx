'use client';

import type { ReactNode } from 'react';

import LabelledElement from '@/UI/LabelledElement';

import clsx from 'clsx';
import modalStyles from './ModalBackdrop.module.scss';

interface ModalBackdropProps {
    backdropType: 'empty' | 'blur';

    closeModal: () => void;

    children: ReactNode;
}

export default function ModalBackdrop({
    backdropType,
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
