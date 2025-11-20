import type { RawData } from 'ws';

import { StreamMessageSchema } from '@none/shared';
import type { StreamMessage } from '@none/shared';

import { MessageSchema } from '@none/shared';
import type { Message } from '@none/shared';

export function checkStreamMessage(data: unknown): data is StreamMessage {
    return StreamMessageSchema.safeParse(data).success;
}

export function checkChatMessage(data: StreamMessage['data']): data is Message {
    return MessageSchema.safeParse(data).success;
}

/**
 * @param {string} message - a message that will be passed in errorMessage.data.message. That is optional.
 *
 * @returns Stringified error message.
 *
 * @example
 * ```typescript
 * createBaseError(); // JSON string output: "{"type":"error","data":{"message":"You have send invalid message."}}"
 *
 * createBaseError('Hello World!'); // JSON string outpur: "{"type":"error","data":{"message":"Hello World!"}}"
 * ```
 */
export function createBaseError(message?: string) {
    const errorMessage: StreamMessage = {
        type: 'error',
        data: {
            message: message || 'You have sent invalid message.',
        },
    };

    return JSON.stringify(errorMessage);
}

/**
 * @param {string} message - a message that will be passed in errorMessage.data.message. That is optional.
 *
 * @returns Stringified stream message.
 *
 * @example
 * ```typescript
 * createStreamMessage('newChatMessage', { sender: 'me', chatId: '1016182123', data: 'Hello to you' }); // Output: "{"type":"error","data":{...}}"
 * ```
 */
export function createStreamMessage<T extends StreamMessage['data']>(
    type: StreamMessage['type'],
    data: T
) {
    const streamMessage: StreamMessage = {
        type,
        data,
    };

    return JSON.stringify(streamMessage);
}
