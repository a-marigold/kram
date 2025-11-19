import type { ZodType } from 'zod';

import { StreamMessageSchema } from '@none/shared';

import type { StreamMessage } from '@none/shared';

export function validateStreamMessage(
    message: unknown
): message is StreamMessage {
    const parseMessage = StreamMessageSchema.safeParse(message);

    if (!parseMessage.success) return false;

    return true;
}

export function validateStreamData<T extends ZodType>(
    data: unknown,

    schema: T
): data is T {
    const parseData = schema.safeParse(data);

    if (!parseData.success) return false;

    return true;
}
