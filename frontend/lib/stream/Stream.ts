import {
    validateStreamError,
    validateStreamMessage,
} from '@/utils/StreamHelpers';
import type { StreamMessage, StreamError } from '@none/shared';

class Stream {
    #socket: WebSocket | null = null;

    open(url: string) {
        this.#socket = new WebSocket(url);

        this.#socket.onopen = () => {
            const initialMessage: StreamMessage = {
                type: 'initial',

                data: { message: 'initial' },
            };

            this.#socket?.send(JSON.stringify(initialMessage));
        };
    }

    close() {
        if (!this.#socket) return;

        this.#socket.close();
    }

    send(type: StreamMessage['type'], data: object) {
        if (!this.#socket) return;

        const prepareData: StreamMessage = { type, data };

        this.#socket.send(JSON.stringify(prepareData));
    }

    onmessage(callback: (message: StreamMessage) => void) {
        if (!this.#socket) return;
        this.#socket.addEventListener('message', (event) => {
            try {
                const parseData = JSON.parse(event.data);

                if (validateStreamMessage(parseData)) {
                    callback(parseData);
                }
            } catch {
                alert('Server has sent an invalid message.'); // TODO: Temporary
            }
        });
    }

    onerror(callback: (error: StreamError) => void) {
        if (!this.#socket) return;

        this.#socket.addEventListener('message', (event) => {
            try {
                const parseData = JSON.parse(event.data);
                console.log(parseData);

                if (
                    validateStreamMessage(parseData) &&
                    parseData.type === 'error' &&
                    validateStreamError(parseData)
                ) {
                    callback(parseData);
                }
            } catch (error) {
                console.log(error);
                alert('Server has sent and invalid message.');
            }
        });
    }
}

export const stream = new Stream();
