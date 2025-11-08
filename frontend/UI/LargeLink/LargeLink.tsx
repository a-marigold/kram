import type { ReactNode } from 'react';

import Link from 'next/link';

import type { LinkProps } from 'next/link';

import buttonStyles from './LargeLInk.module.scss';

interface LargeLinkProps extends LinkProps {
    title: `${string}`;

    icon?: ReactNode;

    'aria-label': string;

    className?: string;
}

export default function LargeLink({
    title,
    icon,

    className,

    ...attributes
}: LargeLinkProps) {
    return (
        <Link
            {...attributes}
            className={`${buttonStyles['large-link']} ${className}`}
        >
            {icon}

            <span className={buttonStyles['title']}>{title}</span>
        </Link>
    );
}
