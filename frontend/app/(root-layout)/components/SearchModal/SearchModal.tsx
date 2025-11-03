import type { BaseModalProps } from '@/types/ModalTypes';

import ModalBackdrop from '@/UI/ModalBackdrop';

import _COMPONENT_Styles from './_COMPONENT_.module.scss';

export interface SearchModalProps extends BaseModalProps {
    text: string;
}
export default function SearchModal({ text, closeModal }: SearchModalProps) {
    return (
        <ModalBackdrop onClose={closeModal} backdropType='empty'>
            <div style={{ width: 200, height: 200, background: 'red' }}>
                Hello
            </div>
        </ModalBackdrop>
    );
}
