import { create } from 'zustand';

interface SettingsStore {
    showNavbar: boolean;
    setShowNavbar: (value: boolean) => void;
}

export const useSettingsStore = create<SettingsStore>()((set) => ({
    showNavbar: true,
    setShowNavbar: (value) => set({ showNavbar: value }),
}));
