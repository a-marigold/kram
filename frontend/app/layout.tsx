import type { Metadata } from 'next';
import { Geist, Inter } from 'next/font/google';

import { cookies } from 'next/headers';

import { ApiError } from '@none/shared';
import { serverGetUserData } from '@/lib/api/AuthApiClient';
import type { SafeUser } from '@none/shared';

import AuthProvider from './(root-layout)/components/AuthProvider';

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
    title: 'None',
    description: 'None messenger',

    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/icon0.svg', sizes: 'any' },
            { url: '/icon1.png', sizes: 'any' },
        ],
        apple: '/apple-icon.png',
    },

    manifest: '/manifest.json',

    openGraph: {
        title: 'None',
        description: 'None messenger',
        images: [
            {
                url: '/opengraph-image.svg',
                width: 1000,
                height: 1000,
                alt: 'None messenger',
            },
        ],
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    let user: SafeUser | null = null;

    const cookieStore = cookies();

    const accessToken = (await cookieStore).get('accesToken')?.value;

    const refreshToken = (await cookieStore).get('refreshToken')?.value;

    try {
        if (!accessToken || !refreshToken) {
            throw new ApiError('Access or refresh token absent', 401);
        }

        const response = await serverGetUserData(
            `accessToken=${accessToken}; refreshToken=${refreshToken}`
        );

        user = response;
    } catch {
        user = null;
    }

    return (
        <html
            lang='en'
            className={`${geistSans.variable} ${interVariable.variable}`}
        >
            <body>
                <AuthProvider user={user}>
                    <HotkeyRunner />

                    <SvgSprites />

                    {/* <Navbar />  */}

                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
