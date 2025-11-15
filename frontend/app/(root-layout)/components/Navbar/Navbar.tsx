'use client';

import { useState, useEffect } from 'react';

import FullNavbarContent from './components/FullNavbarContent';

import CutNavbarContent from './components/CutNavbarContent';

import clsx from 'clsx';
import navStyles from './Navbar.module.scss';

export default function Navbar() {
    const [showFullNavbar, setShowFullNavbar] = useState(true);

    const [maxWidthMathes, setMaxWidthMathes] = useState(false);

    useEffect(() => {
        const maxWidthQuery = window.matchMedia('(max-width: 530px)');

        function checkMediaQuery(event: MediaQueryListEvent) {
            if (event.matches) {
                setMaxWidthMathes(true);
            } else {
                setMaxWidthMathes(false);
            }
        }

        maxWidthQuery.addEventListener('change', checkMediaQuery);

        return () => {
            maxWidthQuery.removeEventListener('change', checkMediaQuery);
        };
    }, []);
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
            className={clsx(
                navStyles['navbar'],
                showFullNavbar
                    ? navStyles['full-navbar']
                    : navStyles['cut-navbar']
            )}
        >
            {showFullNavbar ? (
                <FullNavbarContent setShowFullNavbar={setShowFullNavbar} />
            ) : (
                <CutNavbarContent setShowFullNavbar={setShowFullNavbar} />
            )}
        </div>
    );
}
