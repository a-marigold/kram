import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';

import Navbar from '@/components/Navbar';

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

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Kram',
    openGraph: {
        title: 'Kram',
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
            className={`${geistSans.variable} ${geistMono.variable} ${interVariable.variable}`}
        >
            <body>
                <SvgSprites />

                <Navbar />

                {children}
            </body>
        </html>
    );
}
