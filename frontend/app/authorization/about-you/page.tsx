import type { Metadata } from 'next';

import LoginForm from './components/AboutYouForm';

export const metadata: Metadata = {
    title: 'Tell about yourself - None',

    description: '',

    openGraph: {
        title: 'Tell about yourself - None',
    },
};

export default function LoginPage() {
    return <LoginForm />;
}
