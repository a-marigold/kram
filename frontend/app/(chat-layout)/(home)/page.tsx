'use client';

import MiniChat from './components/MiniChat';

import homeStyles from './Home.module.scss';

export default function Home() {
    return (
        <main className={homeStyles['home-page']}>
            <div className={homeStyles['main-content']}>
                <MiniChat />
            </div>
        </main>
    );
}
