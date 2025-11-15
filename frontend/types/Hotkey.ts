type HotkeyName = 'search' | 'settings' | 'closeModal' | 'openNewChat';

export type Hotkey = {
    name: HotkeyName;
    key: string;
    callback: (event?: KeyboardEvent) => void;
};
