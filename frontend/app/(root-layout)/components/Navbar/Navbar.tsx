'use client';

import { useState, useEffect } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import FullNavbarContent from './components/FullNavbarContent';

import CutNavbarContent from './components/CutNavbarContent';

import navStyles from './Navbar.module.scss';

export default function Navbar() {
    const [showFullNavbar, setShowFullNavbar] = useState(false);

    const maxWidthMathes = useMediaQuery('max-width: 600px');

    useEffect(() => {
        document.documentElement.classList.toggle(
            'navbar-opened',
            showFullNavbar && maxWidthMathes
        );

        return () => {
            document.documentElement.classList.remove('navbar-opened');
        };
    }, [showFullNavbar, maxWidthMathes]);

    return (
        <div
            className={`${navStyles['navbar']}
             ${
                 showFullNavbar
                     ? navStyles['full-navbar']
                     : navStyles['cut-navbar']
             }
            `}
        >
            {showFullNavbar ? (
                <FullNavbarContent setShowFullNavbar={setShowFullNavbar} />
            ) : (
                <CutNavbarContent setShowFullNavbar={setShowFullNavbar} />
            )}
        </div>
    );
}
