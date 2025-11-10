import { create } from 'zustand';

// TODO: Temporary User is in useAuthStore. In the future move user to shared
type User = {
    fullName: string;
    userName: string;

    email: string;
};
interface AuthStore {
    user: User | null;
    setUser: (userData: User) => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
    user: null,
    setUser: (userData) =>
        set((state) => ({
            user: state.user && { ...state.user, ...userData },
        })),
}));
