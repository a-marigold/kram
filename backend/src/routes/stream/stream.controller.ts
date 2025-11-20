import type { FastifyRequest } from 'fastify';
import type { WebSocket } from '@fastify/websocket';

import type { StreamMessage } from '@none/shared';

import { checkData, checkChatMessage } from './stream.service';

export async function stream(connection: WebSocket, request: FastifyRequest) {
    connection.on('message', (data) => {
        let message: StreamMessage;
        console.log(data);
        try {
            message = checkData(data);
        } catch {
            const errorMessage: StreamMessage = {
                type: 'error',
                data: { message: 'You have sent invalid message.' },
            };

            return connection.send(JSON.stringify(errorMessage));
        }

        if (message.type === 'newChatMessage') {
            try {
                const chatMessage = checkChatMessage(message);

                const newMessage: StreamMessage = {
                    type: 'newChatMessage',
                    data: chatMessage,
                };

                console.log(chatMessage);

                return connection.send(JSON.stringify(newMessage)); // TODO: temporary echo
            } catch {
                const errorMessage: StreamMessage = {
                    type: 'error',
                    data: { message: 'You have send invalid message.' },
                };

                return connection.send(JSON.stringify(errorMessage));
            }
        }
    });
}
