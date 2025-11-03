import _COMPONENT_Styles from './_COMPONENT_.module.scss';

import ModalBackdrop from '@/UI/ModalBackdrop';

export interface SearchModalProps {
    text: string;
}
export default function SearchModal({ text }: SearchModalProps) {
    return (
        <ModalBackdrop
            closeModal={() => alert('Temporary!')}
            backdropType='empty'
        >
            <div style={{ width: 200, height: 800, background: 'red' }}>
                Hello
            </div>
        </ModalBackdrop>
    );
}
