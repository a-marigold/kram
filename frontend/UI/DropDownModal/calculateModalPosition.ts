export type ModalPosition = 'top' | 'right' | 'bottom' | 'left';

export type ModalPosY = 'top' | 'bottom';
export type ModalPosX = 'right' | 'center' | 'left';

export function calculateModalPosition(
    relativeElement: HTMLElement,
    modalElement: HTMLElement,
    posY: ModalPosY,
    posX: ModalPosX,
    shiftX?: number,
    shiftY?: number
) {
    const {
        top: elemTop,
        left: elemLeft,
        right: elemRight,
        width: elemWidth,
        height: elemHeight,
    } = relativeElement.getBoundingClientRect();

    const { width: modalWidth, height: modalHeight } =
        modalElement.getBoundingClientRect();

    let modalTop = 0;
    let modalLeft = 0;

    // if (position === 'top') {
    //     modalTop = elemTop - modalHeight;
    //     modalLeft = elemLeft + elemWidth / 2 - modalWidth / 2;
    // } else if (position === 'right') {
    //     modalTop = elemTop + elemHeight / 2 + modalHeight / 2;
    //     modalLeft = elemLeft + elemWidth;
    // } else if (position === 'bottom') {
    //     modalTop = elemTop + elemHeight;
    //     modalLeft = elemLeft + elemWidth / 2 - modalWidth / 2;
    // } else if (position === 'left') {
    //     modalTop = elemTop + elemHeight / 2 + modalHeight / 2;
    //     modalLeft = elemLeft - modalWidth;
    // }

    if (posY === 'top') {
        modalTop = elemTop - modalHeight;
    } else if (posY === 'bottom') {
        modalTop = elemTop + elemHeight;
    }

    if (posX === 'right') {
        modalLeft = elemRight - modalWidth;
    } else if (posX === 'center') {
        modalLeft = elemLeft + elemWidth / 2 - modalWidth / 2;
    } else if (posX === 'left') {
        modalLeft = elemLeft;
    }

    if (modalLeft < 0) {
        modalLeft = 16;
    } else if (modalLeft + (shiftX || 0) + modalWidth > window.innerWidth) {
        modalLeft = window.innerWidth - modalWidth - (shiftX || 0) - 16;
    }

    modalElement.style.transform = `translate(${modalLeft + (shiftX || 0)}px, ${
        modalTop + (shiftY || 0)
    }px)`;
}
