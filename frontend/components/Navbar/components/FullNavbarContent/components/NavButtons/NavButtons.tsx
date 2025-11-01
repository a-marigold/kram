import PrimaryButton from '@/UI/PrimaryButton';

import navStyles from './NavButtons.module.scss';

const buttonList = [
    {
        icon: (
            <svg width={20} height={20} color=''>
                <use href='#chat-icon' />
            </svg>
        ),
        title: 'New chat',
        subtitle: 'Ctrl + Shift + O',
    },
    {
        icon: (
            <svg width={20} height={20} color=''>
                <use href='#search-icon' />
            </svg>
        ),
        title: 'Search',
        subtitle: 'Ctrl + K',
    },
];

export default function NavButtons() {
    return (
        <ul className={navStyles['nav-buttons']}>
            {buttonList.map((button, index) => (
                <li key={index} className={navStyles['nav-button']}>
                    <PrimaryButton
                        title={button.title}
                        subtitle={button.subtitle}
                        icon={button.icon}
                    />
                </li>
            ))}
        </ul>
    );
}
