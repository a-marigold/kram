'use client';

import { useEffect } from 'react';

import { apiOrigin } from '@/utils/GetApiOrigin';

import type { StreamMessage } from '@none/shared';

export default function StreamRoot() {
    useEffect(() => {
        const stream = new WebSocket(`${apiOrigin}/stream`);

        stream.addEventListener('message', (event) => {
            const message: StreamMessage = event.data;

            if (message.type === 'error') {
                alert(message.data);
            }
        });

        return () => {
            stream.close();
        };
    }, []);

    return null;
}
