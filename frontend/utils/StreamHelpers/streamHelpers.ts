import type { ZodType } from 'zod';

import { StreamMessageSchema } from '@none/shared';
import type { StreamMessage } from '@none/shared';

import { MessageSchema } from '@none/shared';
import type { Message } from '@none/shared';

import { StreamErrorSchema } from '@none/shared';
import type { StreamError } from '@none/shared';

export function validateStreamMessage(
    message: unknown
): message is StreamMessage {
    const parseMessage = StreamMessageSchema.safeParse(message);

    return parseMessage.success;
}

export function validateStreamData<T extends ZodType>(
    data: unknown,

    schema: T
): data is T {
    const parseData = schema.safeParse(data);

    return parseData.success;
}

export function validateStreamError(data: unknown): data is StreamError {
    return StreamErrorSchema.safeParse(data).success;
}

export function validateChatMessage(data: unknown): data is Message {
    return validateStreamData(data, MessageSchema);
}
