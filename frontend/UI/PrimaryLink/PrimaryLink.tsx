import type { AnchorHTMLAttributes } from 'react';

import Link from 'next/link';

import clsx from 'clsx';
import linkStyles from './PrimaryLink.module.scss';

interface PrimaryLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
    href: string;

    isActive: boolean;
}
export default function PrimaryLink({
    title,
    isActive,

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
            <span className={linkStyles['title']}>{title}</span>
        </Link>
    );
}
