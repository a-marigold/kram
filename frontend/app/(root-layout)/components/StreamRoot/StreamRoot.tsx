'use client';

import { useEffect } from 'react';

import { useChatStore } from '@/store/ChatStore';

import { MessageSchema } from '@none/shared';
import type { StreamMessage } from '@none/shared';

import { stream } from '@/lib/stream';

import {
    validateStreamMessage,
    validateChatMessage,
} from '@/utils/StreamHelpers';
import { apiOrigin } from '@/utils/GetApiOrigin';

export default function StreamRoot() {
    const addMessage = useChatStore((state) => state.addMessage);

    useEffect(() => {
        stream.open(`${apiOrigin}/stream`);

        stream.onmessage((message) => {
            if (message.type === 'error') {
                alert(message);
            } else if (message.type === 'newChatMessage') {
                if (validateChatMessage(message)) {
                    addMessage(message.chatId, message);
                }
            }
        });

        return () => {
            stream.close();
        };
    }, []);

    return null;
}
