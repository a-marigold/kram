import type { FastifyRequest } from 'fastify';
import type { WebSocket } from '@fastify/websocket';

export async function stream(connection: WebSocket, request: FastifyRequest) {
    connection.on('message', (data) => {
        connection.send(`${data.toString()}`);
    });
}
