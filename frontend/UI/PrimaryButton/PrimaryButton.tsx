import type { ReactNode, ButtonHTMLAttributes } from 'react';

import buttonStyles from './PrimaryButton.module.scss';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    subtitle: string;
    icon: ReactNode;
}
export default function PrimaryButton({
    title,
    subtitle,

    icon,

    ...attributes
}: PrimaryButtonProps) {
    return (
        <button className={buttonStyles['primary-button']}>
            {icon}

            <span className={buttonStyles['title']} {...attributes}>
                {title}
            </span>

            <kbd className={buttonStyles['subtitle']}></kbd>
        </button>
    );
}
