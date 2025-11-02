export type LabelPositionType = 'top' | 'right' | 'bottom' | 'left';

export function calculateLabelPosition(
    labelElement: HTMLElement,
    wrapperElement: HTMLElement,
    position: LabelPositionType
) {
    const {
        offsetTop: wrapperTop,
        offsetLeft: wrapperLeft,
        offsetWidth: wrapperWidth,
        offsetHeight: wrapperHeight,
    } = wrapperElement;

    const { offsetWidth: labelWidth, offsetHeight: labelHeight } = labelElement;

    function calculateTop() {
        const labelTop = wrapperTop - 30;
        const labelLeft = wrapperLeft + wrapperWidth / 2 - labelWidth / 2;

        labelElement.style.transform = `translate(${labelLeft}px, ${labelTop}px)`;
    }

    function calculateRight() {
        const labelTop = wrapperTop + wrapperHeight / 2 - labelHeight / 2;

        const labelLeft = wrapperLeft + wrapperWidth + 20;

        labelElement.style.transform = `translate(${labelLeft}px, ${labelTop}px)`;
    }

    function calculateBottom() {
        const labelTop = wrapperTop + wrapperHeight + 20;
        const labelLeft = wrapperLeft + wrapperWidth / 2 - labelWidth / 2;

        labelElement.style.transform = `translate(${labelLeft}px, ${labelTop}px)`;
    }

    function calculateLeft() {
        const labelTop = wrapperTop + wrapperHeight / 2 - labelHeight / 2;
        const labelLeft = wrapperLeft - labelWidth;

        labelElement.style.transform = `translate(${labelLeft}px, ${labelTop}px)`;
    }

    if (position === 'top') {
        calculateTop();
    } else if (position === 'right') {
        calculateRight();
    } else if (position === 'bottom') {
        calculateBottom();
    } else if (position === 'left') {
        calculateLeft();
    }
}
