import type { ReactNode, ButtonHTMLAttributes } from 'react';

import buttonStyles from './PrimaryButton.module.scss';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    subtitle?: string;

    'aria-label': string;

    icon?: ReactNode;
}
export default function PrimaryButton({
    title,

    subtitle,

    icon,

    ...attributes
}: PrimaryButtonProps) {
    return (
        <button {...attributes} className={buttonStyles['primary-button']}>
            <span className={buttonStyles['title-block']}>
                {icon}

                <span className={buttonStyles['title']}>{title}</span>
            </span>

            {subtitle && (
                <kbd className={buttonStyles['subtitle']}>{subtitle}</kbd>
            )}
        </button>
    );
}
