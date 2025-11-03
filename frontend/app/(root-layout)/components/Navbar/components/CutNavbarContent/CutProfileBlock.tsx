import Image from 'next/image';

import LabelledElement from '@/UI/LabelledElement';

import cutnavStyles from './CutNavbarContent.module.scss';

export default function CutProfileBlock() {
    return (
        <div className={cutnavStyles['profile-block']}>
            <LabelledElement title='Open profile' position='right'>
                <button
                    className={cutnavStyles['nav-button']}
                    aria-label='Open profile'
                >
                    <Image src={'/globe.svg'} alt='' width={24} height={24} />
                </button>
            </LabelledElement>
        </div>
    );
}
