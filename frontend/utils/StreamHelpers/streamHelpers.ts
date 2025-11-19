import type { ZodType } from 'zod';

import { StreamMessageSchema } from '@none/shared';

export function validateStreamMessage(message: unknown) {
    const parseMessage = StreamMessageSchema.safeParse(message);

    if (parseMessage.success) {
        return true;
    }
}

export function validateStreamData<T extends ZodType>(
    data: unknown,

    schema: T
) {
    const parseData = schema.safeParse(data);
    if (parseData.success) {
        return true;
    }
}
