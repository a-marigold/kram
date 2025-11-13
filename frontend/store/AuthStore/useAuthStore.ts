import { create } from 'zustand';

import type { User } from '@none/shared';

// TODO: Temporary User is in useAuthStore. In the future move user to shared

interface AuthStore {
    user: Partial<User> | null;
    setUser: (userData: Partial<User>) => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
    user: null,

    setUser: (userData) =>
        set((state) => ({
            user: state.user ? { ...state.user, ...userData } : userData,
        })),
}));
