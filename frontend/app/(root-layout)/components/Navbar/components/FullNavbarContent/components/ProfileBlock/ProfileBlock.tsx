import Image from 'next/image';

import navStyles from './ProfileBlock.module.scss';

export default function ProfileBlock() {
    return (
        <div className={navStyles['profile-block']}>
            <button
                className={navStyles['profile-button']}
                aria-label='Open profile'
            >
                <Image src='/globe.svg' alt='' width={24} height={24} />
                <div className={navStyles['name-block']}>
                    <span className={navStyles['name']}> Profile name </span>
                </div>
            </button>
        </div>
    );
}
