import { MessageMine, MessageOther } from './components';

import messageStyles from './MessageList.module.scss';

const _MESSAGE1_LIST__ = [
    {
        type: 'mine',

        text: 'Hello',
    },

    {
        type: 'other',

        text: '2',
    },
    {
        type: 'mine',

        text: 'Hello',
    },

    {
        type: 'other',

        text: '2',
    },
    {
        type: 'mine',

        text: 'Hello',
    },

    {
        type: 'other',

        text: '2',
    },
    {
        type: 'mine',

        text: 'Hello',
    },

    {
        type: 'other',

        text: '2',
    },
    {
        type: 'mine',

        text: 'Hello',
    },

    {
        type: 'other',

        text: '2',
    },
    {
        type: 'mine',

        text: 'Hello',
    },

    {
        type: 'other',

        text: '2',
    },
    {
        type: 'mine',

        text: 'Hello',
    },

    {
        type: 'other',

        text: '2',
    },
    {
        type: 'mine',

        text: 'Hello',
    },

    {
        type: 'other',

        text: '2',
    },
    {
        type: 'mine',

        text: 'Hello',
    },

    {
        type: 'other',

        text: '2',
    },
    {
        type: 'mine',

        text: 'Hello',
    },

    {
        type: 'other',

        text: '2',
    },
    {
        type: 'mine',

        text: 'Hello',
    },

    {
        type: 'other',

        text: '2',
    },
];

// const _MESSAGE2_LIST__ = [
//     {
//         type: 'mine',

//         text: 'Hello',
//     },

//     {
//         type: 'other',

//         text: '2',
//     },
// ];

export default function MessageList() {
    return (
        <div className={messageStyles['message-list']}>
            {_MESSAGE1_LIST__.map((message, __INDEX__) =>
                message.type === 'mine' ? (
                    <MessageMine key={__INDEX__}>{message.text}</MessageMine>
                ) : (
                    <MessageOther key={__INDEX__}>{message.text}</MessageOther>
                )
            )}
        </div>
    );
}
