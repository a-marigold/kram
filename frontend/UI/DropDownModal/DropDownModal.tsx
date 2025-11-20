'use client';

import { useEffect, useRef } from 'react';

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

    const handleCalculateModalPosition = () => {
        if (modalRef.current) {
            calculateModalPosition(
                relativeElement,
                modalRef.current,

                position,
                shiftX,
                shiftY
            );
        }
    };

    useEffect(() => {
        handleCalculateModalPosition();

        window.addEventListener('scroll', handleCalculateModalPosition);
        window.addEventListener('resize', handleCalculateModalPosition);

        const elementObserver = new ResizeObserver(
            handleCalculateModalPosition
        );

        elementObserver.observe(relativeElement);

        return () => {
            window.removeEventListener('scroll', handleCalculateModalPosition);
            window.removeEventListener('resize', handleCalculateModalPosition);

            elementObserver.disconnect();
        };
    }, [relativeElement]);

    return (
        <div
            role='menu'
            className={modalStyles['modal-backdrop']}
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className={modalStyles['drop-down-modal']}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                {topList}

                {bottomList && (
                    <>
                        <div className={modalStyles['divider-block']}>
                            <div className={modalStyles['divider']} />
                        </div>

                        {bottomList}
                    </>
                )}
            </div>
        </div>
    );
}
