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

export type StreamMessage = zinfer<typeof StreamMessageSchema>;

export const StreamErrorSchema = object({
    type: literal(StreamTypeSchema.enum.error),

    data: object({ message: string() }),
});

export type StreamError = zinfer<typeof StreamErrorSchema>;
