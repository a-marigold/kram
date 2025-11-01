/**
 *
 * @param textareaElement
 */

export function resizeTextarea(textareaElement: HTMLTextAreaElement) {
    textareaElement.style.height = 'auto';
    textareaElement.style.height = `${textareaElement.scrollHeight}px`;
}
