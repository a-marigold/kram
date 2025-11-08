import type { ButtonHTMLAttributes } from 'react';

import buttonStyles from './AccessButton.module.scss';

interface AccessButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;

    size?: 'small' | 'large';

    'aria-label': string;
}
export default function AccessButton({
    title,

    className,

    size = 'large',

    ...attributes
}: AccessButtonProps) {
    return (
        <button
            {...attributes}
            className={`${buttonStyles['access-button']} ${className} ${
                buttonStyles[`size-${size}`]
            }`}
        >
            {title}
        </button>
    );
}
