import type { Metadata } from 'next';

import CreateAccountForm from './components/CreateAccountForm/CreateAccountForm';

import createStyles from './CreateAccount.module.scss';

export const metadata: Metadata = {
    title: 'Create your account - None',

    description: 'Registration. Create account with password',

    openGraph: {
        title: 'Account creation',
    },
};

export default function CreateAccountPage() {
    return (
        <div className={createStyles['create-account-page']}>
            <CreateAccountForm />
        </div>
    );
}
