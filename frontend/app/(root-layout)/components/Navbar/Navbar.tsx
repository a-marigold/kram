'use client';

import { useState, useEffect } from 'react';

import FullNavbarContent from './components/FullNavbarContent';

import CutNavbarContent from './components/CutNavbarContent';

import clsx from 'clsx';
import navStyles from './Navbar.module.scss';

export default function Navbar() {
    const [showFullNavbar, setShowFullNavbar] = useState(true);

    useEffect(() => {
        document.documentElement.classList.toggle(
            'navbar-opened',
            showFullNavbar
        );

        return () => {
            document.documentElement.classList.remove('navbar-opened');
        };
    }, [showFullNavbar]);

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
