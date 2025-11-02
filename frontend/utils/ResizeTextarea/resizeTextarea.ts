/**
 * Resize textarea (increase height or decrease) with that scroll height
 * @param {HTMLTextAreaElement} textareaElement - textarea that will resize
 *
 * @example
 * ```typescript
 * resizeTextarea(textAreaRef.current) // When user press Enter, textarea will increase its height. When user press Backspace, textarea will decrease its height
 * ```
 */

export function resizeTextarea(textareaElement: HTMLTextAreaElement) {
    textareaElement.style.height = 'auto';
    textareaElement.style.height = `${textareaElement.scrollHeight}px`;
}
