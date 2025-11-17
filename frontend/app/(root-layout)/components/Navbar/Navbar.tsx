'use client';

import { useEffect } from 'react';

import { useSettingsStore } from '@/store/SettingsStore';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import FullNavbarContent from './components/FullNavbarContent';

import CutNavbarContent from './components/CutNavbarContent';

import navStyles from './Navbar.module.scss';

export default function Navbar() {
    const showNavbar = useSettingsStore((state) => state.showNavbar);

    const maxWidthMathes = useMediaQuery('max-width: 600px');

    useEffect(() => {
        document.documentElement.classList.toggle(
            'navbar-opened',
            showNavbar && maxWidthMathes
        );

        return () => {
            document.documentElement.classList.remove('navbar-opened');
        };
    }, [showNavbar, maxWidthMathes]);

    return (
        <>
            <div
                className={`${navStyles['navbar']}
             ${showNavbar ? navStyles['full-navbar'] : navStyles['cut-navbar']}
            `}
            >
                {showNavbar ? <FullNavbarContent /> : <CutNavbarContent />}
            </div>

            <div
                className={`${navStyles['navbar-backdrop']} ${
                    showNavbar ? navStyles['opened'] : ''
                }`}
            />
        </>
    );
}
