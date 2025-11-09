import type { Metadata } from 'next';

import EmailVerificationForm from './components/EmailVerificationForm';

export const metadata: Metadata = {
    title: 'Check your email - None',

    description: 'Loggining in. Email code verification',

    openGraph: {
        title: 'Email code verification',
    },
};

export default function EmailVerificationPage() {
    return <EmailVerificationForm />;
}
