import type { ReactNode } from 'react';
import type { LinkProps } from 'next/link';

import Link from 'next/link';

import clsx from 'clsx';
import linkStyles from './PrimaryLink.module.scss';

interface PrimaryLinkProps extends LinkProps {
    title: string;
    subtitle?: string;
    href: string;

    icon?: ReactNode;

    isActive: boolean;
}
export default function PrimaryLink({
    title,
    subtitle,
    isActive,

    icon,

    ...attributes
}: PrimaryLinkProps) {
    return (
        <Link
            {...attributes}
            className={clsx(
                linkStyles['primary-link'],
                isActive && linkStyles['active']
            )}
        >
            {icon}

            <span className={linkStyles['title']}>{title}</span>

            {subtitle && (
                <span className={linkStyles['subtitle']}>{subtitle}</span>
            )}
        </Link>
    );
}
