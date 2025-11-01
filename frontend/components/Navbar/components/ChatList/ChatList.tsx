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
            <h1 className={navStyles['title']}>Chat List</h1>

            <ul className={navStyles['chat-list']}>
                {chatList.map((chat) => (
                    <li key={chat.id}></li>
                ))}
            </ul>
        </div>
    );
}
