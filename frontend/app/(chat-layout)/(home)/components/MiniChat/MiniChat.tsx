'use client';

import { useState } from 'react';

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

    const badgeText = findBySymbol(message, '@');

    return (
        <>
            <ChatTextArea
                ariaLabel='Input a message'
                state={message}
                onChange={(event) => {
                    if (badgeText) {
                        openModal(
                            <BadgeModal
                                searchQuery={badgeText}
                                relativeElement={event.target}
                            />
                        );
                    }
                    setMessage(event.target.value);
                }}
                badge={{
                    text: badgeText ?? '',
                    bgColor: currentBadgeColors.bgColor,
                    fontColor: currentBadgeColors.fontColor,
                }}
            />
        </>
    );
}
