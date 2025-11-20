import {
    object,
    record,
    string,
    any,
    enum as zenum,
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
