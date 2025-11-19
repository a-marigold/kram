'use client';

import { useEffect } from 'react';

import { apiOrigin } from '@/utils/GetApiOrigin';

export default function StreamRoot() {
    useEffect(() => {
        const stream = new WebSocket(`${apiOrigin}/stream`);

        stream.addEventListener('message', (event) => {});

        return () => {
            stream.close();
        };
    }, []);

    return null;
}
