import type { ModalStore } from '@/store/ModalStore/useModalStore';

import type { ProfileModalProps } from '@/app/(root-layout)/components/Navbar/components/ProfileModal';

export type BaseModalProps = Pick<ModalStore, 'closeModal'>;
export interface ModalList {
    search: BaseModalProps;
    settings: BaseModalProps;
    profileModal: ProfileModalProps;
}
export type ModalId = keyof ModalList;
