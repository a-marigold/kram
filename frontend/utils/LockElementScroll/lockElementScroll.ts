export function lockElementScroll(element: HTMLElement) {
    element.style.paddingRight = `${
        element.offsetWidth - element.clientWidth
    }px`;
    element.style.overflow = 'hidden';
}

export function unlockElementScroll(element: HTMLElement) {
    element.style.paddingRight = '';
    element.style.overflow = '';
}
