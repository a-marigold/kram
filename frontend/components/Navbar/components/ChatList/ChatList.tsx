import navStyles from './ChatList.module.scss';

const chatList = [
    {
        id: crypto.randomUUID(),
        name: 'Initial chat',
    },
];

export default function ChatList() {
    return (
        <div className={navStyles['chats-box']}>
            <div className={navStyles['title-block']}>
                <h1 className={navStyles['title']}>Your chats</h1>

                <svg width={12} height={12} className={navStyles['arrow-icon']}>
                    <use href='#arrow-icon' />
                </svg>
            </div>

            <ul className={navStyles['chat-list']}>
                {chatList.map((chat) => (
                    <li key={chat.id} className={navStyles['chat-link']}></li>
                ))}
            </ul>
        </div>
    );
}
