import type { ReactNode, ButtonHTMLAttributes } from 'react';

import buttonStyles from './SecondaryButton.module.scss';

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    icon?: ReactNode;

    'aria-label': string;

    className?: string;
}
export default function SecondaryButton({
    title,
    icon,

    className,

    ...attributes
}: SecondaryButtonProps) {
    return (
        <button
            className={`${buttonStyles['secondary-button']} ${className ?? ''}`}
        >
            {icon}

            <span className={buttonStyles['title']}>{title}</span>
        </button>
    );
}
