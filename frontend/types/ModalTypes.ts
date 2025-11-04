import type { ModalStore } from '@/store/ModalStore/useModalStore';

export type BaseModalProps = Pick<ModalStore, 'closeModal'>;

export interface ModalList {
    search: BaseModalProps;
}
export type ModalId = keyof ModalList;
