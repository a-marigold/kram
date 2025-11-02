import Link from 'next/link';

import LabelledElement from '@/UI/LabelledElement';

import cutnavStyles from './CutNavbarContent.module.scss';

export default function CutNavButtons() {
    return (
        <div className={cutnavStyles['nav-buttons-block']}>
            <LabelledElement
                labelId='new-chat-button'
                title='Open new chat'
                subtitle='Ctrl + Shift + O'
                position='right'
            >
                <Link
                    href='/'
                    prefetch
                    className={cutnavStyles['nav-button']}
                    aria-label='Open new chat'
                    aria-labelledby='new-chat-button'
                >
                    <svg width={20} height={20} color='var(--font-color)'>
                        <use href='#chat-icon' />
                    </svg>
                </Link>
            </LabelledElement>

            <button className={cutnavStyles['nav-button']} aria-label='Search'>
                <svg width={20} height={20} color='var(--font-color)'>
                    <use href='#search-icon' />
                </svg>
            </button>
        </div>
    );
}
