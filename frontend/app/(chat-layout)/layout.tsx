'use client';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';

import Navbar from '@root-components/Navbar';

import ModalRoot from '@root-components/ModalRoot';

import Header from '@root-components/Header';

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const userName = useAuthStore((state) => state.user?.userName);

    return (
        <>
            {userName && <Navbar />}

            {/* } */}

            <ModalRoot />

            <div className='main-content'>
                <Header />

                {children}
            </div>
        </>
    );
}
