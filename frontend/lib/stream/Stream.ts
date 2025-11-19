import { validateStreamMessage } from '@/utils/StreamHelpers';
import type { StreamMessage } from '@none/shared';

class Stream {
    #socket: WebSocket | null = null;

    open(url: string) {
        this.#socket = new WebSocket(url);
    }

    close() {
        if (!this.#socket) return;
        this.#socket.close();
    }

    send(data: string) {
        if (!this.#socket) return;
        this.#socket.send(data);
    }

    onmessage(callback: (message: StreamMessage) => void) {
        if (!this.#socket) return;
        this.#socket.addEventListener('message', (event) => {
            if (validateStreamMessage(event.data)) {
                callback(event.data);
            }
        });
    }
}

export const stream = new Stream();
