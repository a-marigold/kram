// TODO: Rewrite this

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

    function calculateTop() {
        const labelTop = wrapperTop - 30;
        const labelLeft = wrapperLeft + wrapperWidth / 2 - labelWidth / 2;

        labelElement.style.transform = `translate(${labelLeft}px, ${labelTop}px)`;
    }

    function calculateRight() {
        const labelTop = wrapperTop + wrapperHeight / 2 - labelHeight / 2;

        const labelLeft = wrapperLeft + wrapperWidth + 10;

        labelElement.style.transform = `translate(${labelLeft}px, ${labelTop}px)`;
    }

    function calculateBottom() {
        const labelTop = wrapperTop + wrapperHeight + 10;
        const labelLeft = wrapperLeft + wrapperWidth / 2 - labelWidth / 2;

        labelElement.style.transform = `translate(${labelLeft}px, ${labelTop}px)`;
    }

    function calculateLeft() {
        const labelTop = wrapperTop + wrapperHeight / 2 - labelHeight / 2;
        const labelLeft = wrapperLeft - labelWidth - 10;

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
