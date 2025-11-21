import { create } from 'zustand';

interface MiniChatStore {
    message: string;
    setMessage: (newMessage: string) => void;

    receiver: string;
    setReciever: (newReciever: string) => void;
}

export const useMiniChatStore = create<MiniChatStore>()((set) => ({
    message: '',
    receiver: '',

    setMessage: (newMessage) => set({ message: newMessage }),

    setReciever: (newReciever) => set({ receiver: newReciever }),
}));
