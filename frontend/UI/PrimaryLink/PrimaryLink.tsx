import type { AnchorHTMLAttributes } from 'react';

import Link from 'next/link';

import buttonStyles from './PrimaryLink.module.scss';

interface PrimaryLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
    href: string;
}
export default function PrimaryLink({
    title,

    ...attributes
}: PrimaryLinkProps) {
    return (
        <Link {...attributes} className={buttonStyles['primary-button']}>
            <span className={buttonStyles['title']}>{title}</span>
        </Link>
    );
}
