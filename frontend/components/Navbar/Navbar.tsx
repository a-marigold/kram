'use client';

import { useState } from 'react';

import FullNavbarContent from './components/FullNavbarContent/FullNavbarContent';

import CutNavbarContent from './components/CutNavbarContent';

import navStyles from './Navbar.module.scss';

export default function Navbar() {
    const [showFullNavbar, setShowFullNavbar] = useState(true);

    return (
        <div className={navStyles['navbar']}>
            {showFullNavbar ? (
                <FullNavbarContent setShowFullNavbar={setShowFullNavbar} />
            ) : (
                <CutNavbarContent setShowFullNavbar={setShowFullNavbar} />
            )}
        </div>
    );
}
