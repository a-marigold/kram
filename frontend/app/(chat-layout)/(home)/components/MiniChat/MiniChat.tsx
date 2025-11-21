'use client';

import { useRef } from 'react';

import { useModalStore } from '@/store/ModalStore/useModalStore';
import { useMiniChatStore } from '@/store/MiniChatStore';

import { findBySymbol } from '@/utils/FindBySymbol';
import { getRandomArrayElement } from '@/utils/GetRandomArrayElement';

import { badgeColorList } from '@/constants/badgeColorList';

import BadgeModal from '@modals/BadgeModal';

import ChatTextArea from '@/UI/ChatTextArea';

export default function Chat() {
    const message = useMiniChatStore((state) => state.message);
    const setMessage = useMiniChatStore((state) => state.setMessage);

    const receiver = useMiniChatStore((state) => state.receiver);

    const setReceiver = useMiniChatStore((state) => state.setReceiver);

    const currentBadgeColors = getRandomArrayElement(badgeColorList);

    const openModal = useModalStore((state) => state.openModal);
    const closeModal = useModalStore((state) => state.closeModal);

    const textareaRef = useRef<HTMLDivElement>(null);

    function sendFunction() {} // TODO: here
    return (
        <>
            <ChatTextArea
                ariaLabel='Input a message'
                state={message}
                containerRef={textareaRef}
                onChange={(event) => {
                    setMessage(event.target.value);

                    const badgeText = findBySymbol(event.target.value, '@');

                    if (badgeText && textareaRef.current) {
                        setReceiver(badgeText.split('@')[1].trim());

                        openModal(
                            <BadgeModal
                                relativeElement={textareaRef.current}
                                posY='bottom'
                                posX='left'
                                shiftY={10}
                            />
                        );
                    } else {
                        closeModal();
                    }
                }}
                badge={{
                    text: receiver ? `@${receiver}` : '',
                    bgColor: currentBadgeColors.bgColor,
                    fontColor: currentBadgeColors.fontColor,
                }}
            />
        </>
    );
}
