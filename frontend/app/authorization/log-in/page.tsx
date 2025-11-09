import type { Metadata } from 'next';

import LoginForm from './components/LoginForm';

export const metadata: Metadata = {
    title: 'Log in with password - None',

    description: 'Log in',

    openGraph: {},
};

export default function LoginPage() {
    return <LoginForm />;
}
