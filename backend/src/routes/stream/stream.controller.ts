import type { FastifyRequest } from 'fastify';

import type { WebSocket } from 'ws';

import { streamEmitter } from '@/lib/streamEmitter';

import {
    checkChatMessage,
    checkStreamMessage,
    createBaseError,
    createStreamMessage,
    baseError,
} from './stream.service';

import type { Message } from '@none/shared';

export async function stream(connection: WebSocket, request: FastifyRequest) {
    streamEmitter.initialize(connection);

    connection.on('message', (data) => {
        const parseData = JSON.parse(data.toString());

        if (!checkStreamMessage(parseData)) {
            return connection.send(baseError);
        }

        if (
            parseData.type === 'newChatMessage' &&
            checkChatMessage(parseData.data)
        ) {
            const chatMessage = parseData.data;

            const streamMessage = createStreamMessage('newChatMessage', {
                ...chatMessage,
                sender: chatMessage.sender + '___TEMPORARY',
            });

            return connection.send(streamMessage); // TODO: temporary echo
        }
    });
}

streamEmitter.on('newChatMessage', (data, send) => {
    if (!checkChatMessage(data)) {
        return send(createBaseError('Invalid chat message struct'));
    }

    const streamMessage = createStreamMessage<Message>('newChatMessage', {
        ...data,
        sender: '__TEMPORARY__', // TODO: temporarily
    });

    return send(streamMessage);
});
