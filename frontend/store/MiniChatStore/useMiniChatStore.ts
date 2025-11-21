import { create } from 'zustand';

interface MiniChatStore {
    message: string;
    setMessage: (newMessage: string) => void;

    receiver: string;
    setReceiver: (newReceiver: string) => void;
}

export const useMiniChatStore = create<MiniChatStore>()((set) => ({
    message: '',
    receiver: '',

    setMessage: (newMessage) => set({ message: newMessage }),

    setReceiver: (newReceiver) => set({ receiver: newReceiver }),
}));
