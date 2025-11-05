import type { ReactNode, ButtonHTMLAttributes } from 'react';

import buttonStyles from './LargeButton.module.scss';

interface LargeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: `${string}`;

    icon?: ReactNode;

    'aria-label': string;
}

export default function LargeButton({
    title,
    icon,

    className,

    ...attributes
}: LargeButtonProps) {
    return (
        <button
            {...attributes}
            className={`${buttonStyles['large-button']} ${className}`}
        >
            {icon}

            <span className={buttonStyles['title']}>{title}</span>
        </button>
    );
}
