import type { BaseModalProps } from '@/types/ModalTypes';

import ModalBackdrop from '@/UI/ModalBackdrop';

import GeneralSettings from './components/GeneralSettings/GeneralSettings';

import settingStyles from './SettingsModal.module.scss';

export default function SettingsModal({ closeModal }: BaseModalProps) {
    return (
        <ModalBackdrop onClose={closeModal} backdropType='blur'>
            <div
                className={settingStyles['settings-modal']}
                onClick={(event) => event.stopPropagation()}
            >
                <div className={settingStyles['navbar']}>
                    <button className={settingStyles['close-button']}>
                        <svg width={20} height={20}>
                            <use href='#cross-icon' />
                        </svg>
                    </button>

                    <div className={settingStyles['setting-list']}></div>
                </div>

                <GeneralSettings />
            </div>
        </ModalBackdrop>
    );
}
