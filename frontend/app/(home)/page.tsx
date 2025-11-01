import ChatTextArea from '@/UI/ChatTextArea';

import homeStyles from './Home.module.scss';

export default function Home() {
    return (
        <main className={homeStyles['home']}>
            <ChatTextArea ariaLabel='Input a message' />
        </main>
    );
}
