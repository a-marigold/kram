import {
    object,
    record,
    string,
    any,
    enum as zenum,
    literal,
    infer as zinfer,
} from 'zod';

const StreamTypeSchema = zenum([
    'newChatMessage',
    'editMessage',

    'deleteMessage',

    'error',

    'initial',
]);

export const StreamMessageSchema = object({
    type: StreamTypeSchema,

    data: record(string(), any()),
});

export type StreamType = zinfer<typeof StreamTypeSchema>;

export type StreamMessage<T extends object> = Omit<
    zinfer<typeof StreamMessageSchema>,
    'data'
> & { data: T };

export const StreamErrorDataSchema = object({
    data: object({ message: string() }),
});

export type StreamErrorData = zinfer<typeof StreamErrorDataSchema>;
