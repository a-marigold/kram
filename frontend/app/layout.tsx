import type { Metadata } from 'next';
import { Geist, Inter } from 'next/font/google';

import { cookies } from 'next/headers';

import { serverGetUserData } from '@/lib/api/AuthApiClient';
import type { User } from '@none/shared';

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
    title: 'kramm',
    openGraph: {
        title: 'kramm',
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    let user: Omit<User, 'password'> | null = null;

    const cookieStore = cookies();

    const accessToken = (await cookieStore).get('accesToken')?.value;

    const refreshToken = (await cookieStore).get('refreshToken')?.value;

    try {
        if (!accessToken || !refreshToken) {
            throw new Error('Access or refresh token absent');
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
