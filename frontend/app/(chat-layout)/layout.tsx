import Navbar from '@root-components/Navbar';

import ModalRoot from '@root-components/ModalRoot';

import Header from '@root-components/Header';

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />

            <ModalRoot />

            <div className='main-content'>
                <Header />

                {children}
            </div>
        </>
    );
}
