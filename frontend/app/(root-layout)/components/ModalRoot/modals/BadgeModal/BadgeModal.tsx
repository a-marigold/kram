'use client';

import { useMemo, useCallback } from 'react';
import { useShallow } from 'zustand/shallow';
import type { MouseEvent } from 'react';

import { useModalStore } from '@/store/ModalStore';
import { useChatStore } from '@/store/ChatStore';
import { useMiniChatStore } from '@/store/MiniChatStore/useMiniChatStore';

import DropDownModal from '@/UI/DropDownModal';

import type { DropDownModalProps } from '@/UI/DropDownModal';

import MemoPrimaryButton from '@/UI/PrimaryButton/memo';

import modalStyles from './BadgeModal.module.scss';

interface BadgeModalProps
    extends Pick<
        DropDownModalProps,
        'relativeElement' | 'posY' | 'posX' | 'shiftX' | 'shiftY'
    > {}

export default function BadgeModal({ ...dropDownProps }: BadgeModalProps) {
    const chats = useChatStore(useShallow((state) => state.chats));

    const receiver = useMiniChatStore((state) => state.receiver);
    const setReceiver = useMiniChatStore((state) => state.setReceiver);

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

    function handleSetReceiver() {}

    const buttonHandler = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            setReceiver(event.currentTarget.dataset.chatName || '');
        },
        []
    );

    return (
        <DropDownModal
            {...dropDownProps}
            zIndex={60}
            topChildren={
                <>
                    {filteredChatNames.length ? (
                        filteredChatNames.map((chat) => (
                            <MemoPrimaryButton
                                key={chat.publicId}
                                title={chat.name}
                                aria-label=''
                                role='option'
                                data-chat-name={chat.name}
                                onClick={buttonHandler}
                            />
                        ))
                    ) : (
                        <div className={modalStyles['empty-list']}>
                            <p className={modalStyles['empty-text']}>
                                Nothing found
                            </p>
                        </div>
                    )}
                </>
            }
            onClose={closeModal}
        />
    );
}
