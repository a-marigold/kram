import type { ReactNode } from 'react';

import Link from 'next/link';
import type { LinkProps } from 'next/link';

import buttonStyles from './LargeLInk.module.scss';

interface LargeButtonProps extends LinkProps<HTMLButtonElement> {
    title: `${string}`;

    icon?: ReactNode;

    'aria-label': string;
}

export default function LargeLink({
    title,
    icon,
    ...attributes
}: LargeButtonProps) {
    return (
        <Link {...attributes} className={buttonStyles['large-link']}>
            {icon}

            <span className={buttonStyles['title']}>{title}</span>
        </Link>
    );
}
