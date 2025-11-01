import type { ReactNode, ButtonHTMLAttributes } from 'react';

import buttonStyles from './PrimaryButton.module.scss';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    subtitle?: string;

    ariaLabel: string;

    icon?: ReactNode;
}
export default function PrimaryButton({
    title,

    subtitle,

    icon,

    ...attributes
}: PrimaryButtonProps) {
    return (
        <button className={buttonStyles['primary-button']} {...attributes}>
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
