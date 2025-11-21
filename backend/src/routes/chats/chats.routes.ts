import type { FastifyInstance, RouteHandlerMethod } from 'fastify';

import { ApiResponseSchema, ChatSchema, ChatListSchema } from '@none/shared';

import { createChat, getUserChats } from './chats.controller';

export async function chatRoutes(app: FastifyInstance) {
    app.addHook('onRequest', app.auth);

    app.route({
        method: 'GET',
        url: '/chats',
        schema: {
            response: {
                200: ChatListSchema,
                403: ApiResponseSchema,
            },
        },

        handler: getUserChats as RouteHandlerMethod,
    });

    app.route({
        method: 'POST',
        url: '/chats/:chatId',
        schema: {
            body: ChatSchema,
            response: {
                201: ApiResponseSchema,
                403: ApiResponseSchema,
            },
        },
        handler: createChat as RouteHandlerMethod,
    });
}
