import type { BaseModalProps } from '@/types/ModalTypes';

import ModalBackdrop from '@/UI/ModalBackdrop';

import searchStyles from './SearchModal.module.scss';

export default function SettingsModal({ closeModal }: BaseModalProps) {
    return (
        <ModalBackdrop onClose={closeModal} backdropType='empty'>
            <div
                className={searchStyles['settings-modal']}
                onClick={(event) => event.stopPropagation()}
            ></div>
        </ModalBackdrop>
    );
}
