'use client';

import { useState, useRef, useLayoutEffect } from 'react';

import { createPortal } from 'react-dom';

import type { ReactNode } from 'react';

import { calculateLabelPosition } from './calculateLabelPosition';

import type { LabelPositionType } from './calculateLabelPosition';

import elementStyles from './LabelledElement.module.scss';

interface LabelledButtonProps {
    title: string;
    subtitle?: string;

    position?: LabelPositionType;
    width?: 'full' | 'content';

    children: ReactNode;
}

export default function LabelledElement({
    title,
    subtitle,

    position = 'bottom',
    width = 'content',

    children,
}: LabelledButtonProps) {
    const [showLabel, setShowLabel] = useState(false);

    const labelRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!labelRef.current || !wrapperRef.current || !showLabel) return;

        calculateLabelPosition(labelRef.current, wrapperRef.current, position);
    }, [showLabel, position, title, subtitle]);

    return (
        <>
            <div
                ref={wrapperRef}
                className={`${elementStyles['labelled-wrapper']} ${elementStyles[width]}`}
                onPointerEnter={() => {
                    setShowLabel(true);
                }}
                onPointerLeave={() => setShowLabel(false)}
            >
                {children}
            </div>

            {showLabel &&
                createPortal(
                    <div
                        ref={labelRef}
                        role='tooltip'
                        className={elementStyles['label']}
                    >
                        <span className={elementStyles['title']}> {title}</span>

                        {subtitle && (
                            <kbd className={elementStyles['subtitle']}>
                                {subtitle}
                            </kbd>
                        )}
                    </div>,

                    document.body
                )}
        </>
    );
}
