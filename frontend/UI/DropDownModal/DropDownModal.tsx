import type { ReactNode } from 'react';

import modalStyles from './DropDownModal.module.scss';

export interface DropDownModalProps {
    topList: ReactNode;

    bottomList?: ReactNode;

    // position:

    onClose: () => void;
}

export default function DropDownModal({
    topList,

    bottomList,

    onClose,
}: DropDownModalProps) {
    return (
        <div className={modalStyles['modal-backdrop']} onClick={onClose}>
            <div className={modalStyles['drop-down-modal']}>
                <div className={modalStyles['top-list']}>{topList}</div>

                {bottomList && (
                    <>
                        <div className={modalStyles['divider']} />

                        <div className={modalStyles['bottom-list']}>
                            {bottomList}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
