import PrimaryButton from '@/UI/PrimaryButton';

import navStyles from './NavButtons.module.scss';

import { navButtonList } from '@/components/Navbar/navButtonList';

export default function NavButtons() {
    return (
        <ul className={navStyles['nav-buttons']}>
            {navButtonList.map((button, index) => (
                <li key={index} className={navStyles['nav-button']}>
                    <PrimaryButton
                        title={button.title}
                        subtitle={button.subtitle}
                        icon={button.icon}
                        ariaLabel={button.ariaLabel}
                    />
                </li>
            ))}
        </ul>
    );
}
