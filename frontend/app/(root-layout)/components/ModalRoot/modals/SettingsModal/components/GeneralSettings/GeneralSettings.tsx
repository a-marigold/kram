'use client';

import { useAuthStore } from '@/store/AuthStore';

import settingStyles from './GeneralSettings.module.scss';

export default function GeneralSettings() {
    const user = useAuthStore((state) => state.user);

    return <div className={settingStyles['general-setting-content']}></div>;
}
