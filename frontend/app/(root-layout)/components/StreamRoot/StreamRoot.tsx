'use client';

import { useEffect } from 'react';

import { stream } from '@/lib/stream';

import { apiOrigin } from '@/utils/GetApiOrigin';

export default function StreamRoot() {
    useEffect(() => {
        stream.open(`${apiOrigin}/stream`);

        stream.onerror((error) => {
            alert(error.data.message);
        });

        return () => {
            stream.close();
        };
    }, []);

    return null;
}
