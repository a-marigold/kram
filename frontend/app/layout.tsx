import type { Metadata } from 'next';
import { Geist, Inter } from 'next/font/google';

import HotkeyRunner from '@root-components/HotkeyRunner';

import SvgSprites from '@/UI/SvgSprites';

import './globals.scss';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const interVariable = Inter({
    variable: '--font-inter-variable',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'kramm',
    openGraph: {
        title: 'kramm',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='en'
            className={`${geistSans.variable} ${interVariable.variable}`}
        >
            <body>
                <HotkeyRunner />

                <SvgSprites />

                {/* <Navbar /> */}

                {/* <ModalRoot /> */}

                {children}
            </body>
        </html>
    );
}
