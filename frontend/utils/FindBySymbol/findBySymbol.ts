/**
 * @param {string} string - text for search
 * @param {string} symbol - symbol, words with which they will be found
 * @returns First or last word with symbol found in string. Finds word that starts with
 *
 * @example
 * ```typescript
 * findBySymbol('$aword Lorem ipsum dolor $lastword', '$') // Output: `@aword`
 * findBySymbol('Lorem ipsum dolor #lastword', '#') // Output: `#lastword`
 * ```
 */

export function findBySymbol(string: string, symbol: string) {
    const firstWord = string.split(' ').filter(Boolean)[0];

    const lastWord = string.split(' ').filter(Boolean).at(-1);
    if (firstWord?.startsWith(symbol) && firstWord.length > 1) {
        return firstWord;
    } else if (lastWord?.startsWith(symbol) && lastWord.length > 1) {
        return lastWord;
    }
}
