'use client';

import { useMemo } from 'react';
import { useShallow } from 'zustand/shallow';

import { useModalStore } from '@/store/ModalStore';
import { useChatStore } from '@/store/ChatStore';
import { useMiniChatStore } from '@/store/MiniChatStore/useMiniChatStore';

import DropDownModal from '@/UI/DropDownModal';
import type { DropDownModalProps } from '@/UI/DropDownModal';

import MemoPrimaryButton from '@/UI/PrimaryButton/memo';

interface BadgeModalProps
    extends Pick<
        DropDownModalProps,
        'relativeElement' | 'posY' | 'posX' | 'shiftX' | 'shiftY'
    > {}

export default function BadgeModal({ ...dropDownProps }: BadgeModalProps) {
    const chats = useChatStore(useShallow((state) => state.chats));

    const receiver = useMiniChatStore((state) => state.receiver);

    const filteredChatNames = useMemo(
        () =>
            Object.values(chats)
                .map(({ name, publicId }) => ({
                    name,
                    publicId,
                }))
                .filter((chat) =>
                    !receiver
                        ? true
                        : chat.name
                              .split(' ')
                              .join('')
                              .toLocaleLowerCase()
                              .includes(receiver.toLowerCase())
                ),
        [chats, receiver]
    );

    const closeModal = useModalStore((state) => state.closeModal);

    return (
        <DropDownModal
            {...dropDownProps}
            topChildren={
                <>
                    {filteredChatNames.map((chat) => (
                        <MemoPrimaryButton
                            key={chat.publicId}
                            title={chat.name}
                            aria-label=''
                            role='option'
                        />
                    ))}
                </>
            }
            onClose={closeModal}
        />
    );
}
