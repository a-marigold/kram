import type { ButtonHTMLAttributes } from 'react';

import buttonStyles from './AccessButton.module.scss';

export interface AccessButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;

    size?: 'small' | 'large';

    variant?: 'filled' | 'empty-filled';

    'aria-label': string;
}
export default function AccessButton({
    title,

    className,
    size = 'large',

    variant = 'filled',

    ...attributes
}: AccessButtonProps) {
    return (
        <button
            {...attributes}
            className={`${buttonStyles['access-button']} ${className} ${
                buttonStyles[`size-${size}`]
            }
            ${buttonStyles[`variant-${variant}`]}
            `}
        >
            {title}
        </button>
    );
}
