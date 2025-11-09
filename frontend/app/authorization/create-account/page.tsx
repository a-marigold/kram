import type { Metadata } from 'next';

import CreateAccountForm from './components/CreateAccountForm/CreateAccountForm';

export const metadata: Metadata = {
    title: 'Create your account - None',

    description: 'Registration. Create account with password',

    openGraph: {
        title: 'Account creation',
    },
};

export default function CreateAccountPage() {
    return <CreateAccountForm />;
}
