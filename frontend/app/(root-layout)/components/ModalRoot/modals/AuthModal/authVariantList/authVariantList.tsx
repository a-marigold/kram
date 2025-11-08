'use client';

import type { ReactNode } from 'react';

type AuthVariant = 'google';

export const authVariantList: {
    type: AuthVariant;
    title: string;
    icon: ReactNode;
}[] = [
    {
        type: 'google',
        title: 'Contuniue with Google',
        icon: (
            <svg width={19} height={19}>
                <use href='#google-icon' />
            </svg>
        ),
    },
];

export function authVariantHandler(type: AuthVariant) {
    if (type === 'google') {
        alert('google!');
    }
}
