import type { ReactNode, ButtonHTMLAttributes } from 'react';

import elementStyles from './LabelledElement.module.scss';

interface LabelledButtonProps {
    labelId: string;
    title: string;
    subtitle?: string;

    children: ReactNode;
    position?: 'top' | 'right' | 'bottom' | 'left';
}

export default function LabelledElement({
    labelId,

    title,
    subtitle,

    position = 'bottom',

    children,
}: LabelledButtonProps) {
    return (
        <div className={elementStyles['labelled-wrapper']}>
            {children}

            <div
                id={labelId}
                className={`${elementStyles['label']} ${
                    elementStyles[`position-${position}`]
                }`}
            >
                <span className={elementStyles['title']}> {title}</span>
                <kbd className={elementStyles['subtitle']}> {subtitle}</kbd>
            </div>
        </div>
    );
}
