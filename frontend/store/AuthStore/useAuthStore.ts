import { create } from 'zustand';

import type { User } from '@none/shared';

interface AuthStore {
    user: Partial<User> | null;
    setUser: (userData: Partial<User> | null) => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
    user: null,

    setUser: (userData) =>
        set((state) => {
            if (userData === null) {
                return { user: null };
            }

            if (Object.keys(userData).length === 0) {
                return { user: {} };
            }

            return {
                user: state.user ? { ...state.user, ...userData } : userData,
            };
        }),
}));
