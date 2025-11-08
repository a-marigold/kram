'use client';

import { useEffect, useRef, useCallback } from 'react';

import type { ReactNode } from 'react';

import { calculateModalPosition } from './calculateModalPosition';
import type { ModalPosition } from './calculateModalPosition';

import modalStyles from './DropDownModal.module.scss';

export interface DropDownModalProps {
    relativeElement: HTMLElement;

    topList: ReactNode;

    bottomList?: ReactNode;

    position?: ModalPosition;
    shiftX?: number;
    shiftY?: number;

    onClose: () => void;
}

export default function DropDownModal({
    relativeElement,

    topList,
    bottomList,

    position = 'bottom',
    shiftX,
    shiftY,

    onClose,
}: DropDownModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleCalculateModalPosition = useCallback(() => {
        if (modalRef.current) {
            calculateModalPosition(
                relativeElement,
                modalRef.current,

                position,
                shiftX,
                shiftY
            );
        }
    }, [position]);

    useEffect(() => {
        handleCalculateModalPosition();

        window.addEventListener('scroll', handleCalculateModalPosition);
        window.addEventListener('resize', handleCalculateModalPosition);

        return () => {
            window.removeEventListener('scroll', handleCalculateModalPosition);
            window.removeEventListener('resize', handleCalculateModalPosition);
        };
    }, []);

    return (
        <div className={modalStyles['modal-backdrop']} onClick={onClose}>
            <div
                ref={modalRef}
                className={modalStyles['drop-down-modal']}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <div className={modalStyles['top-list']}>{topList}</div>

                {bottomList && (
                    <>
                        <div className={modalStyles['divider-block']}>
                            <div className={modalStyles['divider']} />
                        </div>

                        <div className={modalStyles['bottom-list']}>
                            {bottomList}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
