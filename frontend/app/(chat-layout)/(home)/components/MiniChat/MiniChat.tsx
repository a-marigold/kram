'use client';

import { useState, useRef, useMemo } from 'react';

import { useModalStore } from '@/store/ModalStore/useModalStore';

import { findBySymbol } from '@/utils/FindBySymbol';
import { getRandomArrayElement } from '@/utils/GetRandomArrayElement';

import { badgeColorList } from '@/constants/badgeColorList';

import BadgeModal from '@modals/BadgeModal';

import ChatTextArea from '@/UI/ChatTextArea';

export default function Chat() {
    const [message, setMessage] = useState('');

    const currentBadgeColors = getRandomArrayElement(badgeColorList);

    const openModal = useModalStore((state) => state.openModal);
    const closeModal = useModalStore((state) => state.closeModal);

    const textareaRef = useRef<HTMLDivElement>(null);

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
                        openModal(
                            <BadgeModal
                                searchQuery={badgeText.split('@')[1].trim()}
                                relativeElement={textareaRef.current}
                                posY='bottom'
                                posX='left'
                            />
                        );
                    } else {
                        closeModal();
                    }
                }}
                badge={{
                    text: findBySymbol(message, '@') ?? '',
                    bgColor: currentBadgeColors.bgColor,
                    fontColor: currentBadgeColors.fontColor,
                }}
            />
        </>
    );
}
