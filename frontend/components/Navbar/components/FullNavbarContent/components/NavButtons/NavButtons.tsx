import PrimaryLink from '@/UI/PrimaryLink';
import PrimaryButton from '@/UI/PrimaryButton';

import navStyles from './NavButtons.module.scss';

export default function NavButtons() {
    return (
        <ul className={navStyles['nav-buttons']}>
            <PrimaryLink
                href='/'
                title='New chat'
                subtitle='Ctrl + Shift + O'
                aria-label='Open new chat'
                icon={
                    <svg width={20} height={20} color='var(--font-color)'>
                        <use href='#chat-icon' />
                    </svg>
                }
                isActive={false}
            />

            <PrimaryButton
                title='Search'
                subtitle='Ctrl + K'
                icon={
                    <svg width={20} height={20} color='var(--font-color)'>
                        <use href='#search-icon' />
                    </svg>
                }
                ariaLabel='Search chats'
            />
        </ul>
    );
}
