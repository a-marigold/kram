'use client';

import { useMemo } from 'react';
import { useShallow } from 'zustand/shallow';

import { useModalStore } from '@/store/ModalStore';
import { useChatStore } from '@/store/ChatStore';

import DropDownModal from '@/UI/DropDownModal';
import type { DropDownModalProps } from '@/UI/DropDownModal';

import MemoPrimaryButton from '@/UI/PrimaryButton/memo';

interface BadgeModalProps
    extends Pick<DropDownModalProps, 'relativeElement' | 'posY' | 'posX'> {
    searchQuery: string;
}

export default function BadgeModal({
    searchQuery,

    ...dropDownProps
}: BadgeModalProps) {
    const chats = useChatStore(useShallow((state) => state.chats));

    const filteredChatNames = useMemo(
        () =>
            Object.values(chats)
                .map(({ name, publicId }) => ({
                    name,
                    publicId,
                }))
                .filter((chat) =>
                    !searchQuery
                        ? true
                        : chat.name
                              .split(' ')
                              .join('')
                              .toLocaleLowerCase()
                              .includes(searchQuery.toLowerCase())
                ),
        [chats, searchQuery]
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
