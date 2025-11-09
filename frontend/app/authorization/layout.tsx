import type { ReactNode } from 'react';

import Header from './(components)/Header';

import authStyles from './Auth.module.scss';

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />

            <main className={authStyles['main-content']}>{children}</main>
        </>
    );
}
