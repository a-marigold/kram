import Navbar from '@root-components/Navbar';
import ModalRoot from '@root-components/ModalRoot';

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />

            <ModalRoot />

            {children}
        </>
    );
}
