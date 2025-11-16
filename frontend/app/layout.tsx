import type { Metadata, Viewport } from 'next';
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

    metadataBase: new URL('https://none-m.vercel.app'),

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
        url: 'https://none-m.vercel.app',
        images: [
            {
                url: 'https://none-m.vercel.app/opengraph-image.png',
                width: 251,
                height: 100,
                alt: 'None messenger',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};
export const viewport: Viewport = {
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
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
