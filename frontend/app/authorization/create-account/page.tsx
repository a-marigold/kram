import type { Metadata } from 'next';

import registerStyles from './CreateAccount.module.scss';

export const metadata: Metadata = {
    title: 'Create your account - None',

    description: 'Registration. Create account with password',

    openGraph: {
        title: 'Account creation',
    },
};

export default function CreateAccountPage() {
    return <div className={registerStyles['create-account-page']}></div>;
}
