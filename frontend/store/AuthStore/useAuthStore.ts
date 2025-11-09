import { create } from 'zustand';

interface AuthStore {
    email: string;
    setEmail: (newEmail: string) => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
    email: '',
    setEmail: (newEmail) => ({ email: newEmail }),
}));
