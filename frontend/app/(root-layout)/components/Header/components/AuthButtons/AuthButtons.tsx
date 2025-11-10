'use client';

import { useModalStore } from '@/store/ModalStore';

import AuthModal from '@modals/AuthModal';

import AccessButton from '@/UI/AccessButton';
import type { AccessButtonProps } from '@/UI/AccessButton/AccessButton';

import headerStyles from './AuthButtons.module.scss';

const authButtonList: {
    title: string;
    variant: AccessButtonProps['variant'];

    size: AccessButtonProps['size'];

    ariaLabel: string;
}[] = [
    {
        title: 'Login',
        variant: 'filled',
        size: 'small',

        ariaLabel: 'Login or register',
    },
    {
        title: 'Register for free',
        variant: 'empty-filled',

        size: 'small',

        ariaLabel: 'Login or register',
    },
];

export default function AuthButtons() {
    const openModal = useModalStore((state) => state.openModal);
    const closeModal = useModalStore((state) => state.closeModal);

    return (
        <div role='group' className={headerStyles['auth-button-group']}>
            {authButtonList.map((button) => (
                <AccessButton
                    key={button.title}
                    title={button.title}
                    variant={button.variant}
                    size={button.size}
                    aria-label={button.ariaLabel}
                    onClick={() =>
                        openModal(<AuthModal closeModal={closeModal} />)
                    }
                />
            ))}
        </div>
    );
}
