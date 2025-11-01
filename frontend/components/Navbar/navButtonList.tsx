export const navButtonList = [
    {
        icon: (
            <svg width={20} height={20} color='var(--font-color)'>
                <use href='#chat-icon' />
            </svg>
        ),
        title: 'New chat',
        subtitle: 'Ctrl + Shift + O',
        ariaLabel: 'Open new chat',
    },
    {
        icon: (
            <svg width={20} height={20} color='var(--font-color)'>
                <use href='#search-icon' />
            </svg>
        ),
        title: 'Search',
        subtitle: 'Ctrl + K',
        ariaLabel: 'Search chats',
    },
];
