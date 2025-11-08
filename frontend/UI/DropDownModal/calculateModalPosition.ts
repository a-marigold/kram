export type ModalPosition = 'top' | 'right' | 'bottom' | 'left';

export function calculateModalPosition(
    relativeElement: HTMLElement,
    modalElement: HTMLElement,
    position: ModalPosition,
    shiftX?: number,
    shiftY?: number
) {
    const {
        top: elemTop,
        left: elemLeft,
        width: elemWidth,
        height: elemHeight,
    } = relativeElement.getBoundingClientRect();

    const { width: modalWidth, height: modalHeight } =
        modalElement.getBoundingClientRect();

    let modalTop = 0;
    let modalLeft = 0;

    if (position === 'top') {
        modalTop = elemTop - modalHeight;
        modalLeft = elemLeft + elemWidth / 2 - modalWidth / 2;
    } else if (position === 'right') {
        modalTop = elemTop + elemHeight / 2 + modalHeight / 2;
        modalLeft = elemLeft + elemWidth;
    } else if (position === 'bottom') {
        modalTop = elemTop + elemHeight;
        modalLeft = elemLeft + elemWidth / 2 - modalWidth / 2;
    } else if (position === 'left') {
        modalTop = elemTop + elemHeight / 2 + modalHeight / 2;
        modalLeft = elemLeft - modalWidth;
    }

    modalElement.style.transform = `translate(${modalLeft + (shiftX ?? 0)}px, ${
        modalTop + (shiftY ?? 0)
    }px)`;
}
