export function getElementScrollbarWidth(element: HTMLElement): number {
    return element.offsetWidth - element.clientWidth;
}
