import MessageMine from './components/MessageMine';
import MessageOther from './components/MessageOther';

import messageStyles from './MessageList.module.scss';

const __MESSAGE_LIST__ = [
    {
        type: 'mine',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum ipsa, neque aliquid explicabo repudiandae molestias praesentium, placeat tenetur mollitia eum! Ab laudantium, architecto nihil minima atque corporis. Officiis, repellat.',
    },
    {
        type: 'other',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum ipsa, neque aliquid explicabo repudiandae molestias praesentium, placeat tenetur mollitia eum! Ab laudantium, architecto nihil minima atque corporis. Officiis, repellat.',
    },
    {
        type: 'mine',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum ipsa, neque aliquid explicabo repudiandae molestias praesentium, placeat tenetur mollitia eum! Ab laudantium, architecto nihil minima atque corporis. Officiis, repellat.',
    },
    {
        type: 'mine',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum ipsa, neque aliquid explicabo repudiandae molestias praesentium, placeat tenetur mollitia eum! Ab laudantium, architecto nihil minima atque corporis. Officiis, repellat.',
    },
    {
        type: 'other',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum ipsa, neque aliquid explicabo repudiandae molestias praesentium, placeat tenetur mollitia eum! Ab laudantium, architecto nihil minima atque corporis. Officiis, repellat.',
    },
    {
        type: 'mine',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum ipsa, neque aliquid explicabo repudiandae molestias praesentium, placeat tenetur mollitia eum! Ab laudantium, architecto nihil minima atque corporis. Officiis, repellat.',
    },
    {
        type: 'mine',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum ipsa, neque aliquid explicabo repudiandae molestias praesentium, placeat tenetur mollitia eum! Ab laudantium, architecto nihil minima atque corporis. Officiis, repellat.',
    },
    {
        type: 'mine',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum ipsa, neque aliquid explicabo repudiandae molestias praesentium, placeat tenetur mollitia eum! Ab laudantium, architecto nihil minima atque corporis. Officiis, repellat.',
    },
    {
        type: 'other',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum ipsa, neque aliquid explicabo repudiandae molestias praesentium, placeat tenetur mollitia eum! Ab laudantium, architecto nihil minima atque corporis. Officiis, repellat.',
    },
    {
        type: 'mine',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum ipsa, neque aliquid explicabo repudiandae molestias praesentium, placeat tenetur mollitia eum! Ab laudantium, architecto nihil minima atque corporis. Officiis, repellat.',
    },
    {
        type: 'mine',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum ipsa, neque aliquid explicabo repudiandae molestias praesentium, placeat tenetur mollitia eum! Ab laudantium, architecto nihil minima atque corporis. Officiis, repellat.',
    },
];

export default function MessageList() {
    return (
        <div className={messageStyles['message-list']}>
            {__MESSAGE_LIST__.map((message, __INDEX__) =>
                message.type === 'mine' ? (
                    <MessageMine>{message.text}</MessageMine>
                ) : (
                    <MessageOther>{message.text}</MessageOther>
                )
            )}
        </div>
    );
}
