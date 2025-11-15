export type LabelPositionType = 'top' | 'right' | 'bottom' | 'left';

export function calculateLabelPosition(
    labelElement: HTMLElement,
    wrapperElement: HTMLElement,
    position: LabelPositionType
) {
    const {
        top: wrapperTop,
        left: wrapperLeft,
        width: wrapperWidth,
        height: wrapperHeight,
    } = wrapperElement.getBoundingClientRect();

    const { offsetWidth: labelWidth, offsetHeight: labelHeight } = labelElement;

    let labelTop = 0;
    let labelLeft = 0;

    if (position === 'top') {
        labelTop = wrapperTop - 30;
        labelLeft = wrapperLeft + wrapperWidth / 2 - labelWidth / 2;
    }

    if (position === 'right') {
        labelTop = wrapperTop + wrapperHeight / 2 - labelHeight / 2;

        labelLeft = wrapperLeft + wrapperWidth + 10;
    }

    if (position === 'bottom') {
        labelTop = wrapperTop + wrapperHeight + 10;
        labelLeft = wrapperLeft + wrapperWidth / 2 - labelWidth / 2;
    }

    if (position === 'left') {
        labelTop = wrapperTop + wrapperHeight / 2 - labelHeight / 2;
        labelLeft = wrapperLeft - labelWidth - 10;
    }

    labelElement.style.transform = `translate(${labelLeft}px, ${labelTop}px)`;
}
