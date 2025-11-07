export type Hotkey = {
    name: string;
    key: string;
    callback: (event?: KeyboardEvent) => void;
};
