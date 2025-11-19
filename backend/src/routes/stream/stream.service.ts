import type { RawData } from 'ws';

import { StreamMessageSchema } from '@none/shared';
import type { StreamMessage } from '@none/shared';

import { MessageSchema } from '@none/shared';
import type { Message } from '@none/shared';

export function checkData(data: RawData): StreamMessage | never {
    const parseData: StreamMessage = JSON.parse(data.toString());

    if (!StreamMessageSchema.safeParse(parseData).success) {
        throw new Error('You have sent invalid message.');
    }

    return parseData;
}

export function checkChatMessage(message: StreamMessage): Message | never {
    const parseMessage = MessageSchema.safeParse(message);
    if (!parseMessage.success) {
        throw new Error('You have sent invalid message.');
    }

    return parseMessage.data;
}
