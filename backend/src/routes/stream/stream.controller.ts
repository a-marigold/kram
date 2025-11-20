import type { FastifyRequest } from 'fastify';

import type { WebSocket } from 'ws';

import {
    checkChatMessage,
    checkStreamMessage,
    createBaseError,
    createStreamMessage,
} from './stream.service';

export async function stream(connection: WebSocket, request: FastifyRequest) {
    connection.on('message', (data) => {
        const parseData = JSON.parse(data.toString());

        if (!checkStreamMessage(parseData)) {
            const baseError = createBaseError();

            return connection.send(baseError);
        }

        if (parseData.type === 'error') {
            const baseError = createBaseError();

            return connection.send(baseError);
        }

        if (
            parseData.type === 'newChatMessage' &&
            checkChatMessage(parseData.data)
        ) {
            const chatMessage = parseData.data;

            const streamMessage = createStreamMessage(
                'newChatMessage',
                chatMessage
            );

            return connection.send(streamMessage); // TODO: temporary echo
        }
    });
}
