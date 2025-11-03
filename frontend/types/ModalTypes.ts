import type { ModalStore } from '@/store/ModalStore/useModalStore';

import type { SearchModalProps } from '@/app/(root-layout)/components/SearchModal';

export type BaseModalProps = Pick<ModalStore, 'closeModal'>;

export interface ModalList {
    search: SearchModalProps;
}
export type ModalId = keyof ModalList;
