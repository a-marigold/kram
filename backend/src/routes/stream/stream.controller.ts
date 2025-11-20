import type { FastifyRequest } from 'fastify';

import type { WebSocket } from 'ws';

import {
    checkChatMessage,
    checkStreamMessage,
    createBaseError,
    createStreamMessage,
    baseError,
} from './stream.service';

export async function stream(connection: WebSocket, request: FastifyRequest) {
    connection.on('message', (data) => {
        try {
            const parseData = JSON.parse(data.toString());

            if (!checkStreamMessage(parseData)) {
                return connection.send(baseError + 'error__stream_message');
            }

            if (
                parseData.type === 'newChatMessage' &&
                checkChatMessage(parseData.data)
            ) {
                const chatMessage = parseData.data;

                const streamMessage = createStreamMessage('newChatMessage', {
                    ...chatMessage,
                    sender: chatMessage.sender + 1,
                });

                return connection.send(streamMessage); // TODO: temporary echo
            }
        } catch {
            return connection.send(baseError + 'error__json');
        }
    });
}
