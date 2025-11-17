'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Hook to manage a temporary "copy" flag state.
 *
 * @param {number} duration - The time in **seconds** after which `copyFlag` will be automatically reset to `false`.
 *
 * @returns {{
 * - copyFlag: boolean;
 * - setCopyFlag: Dispatch<SetStateAction<boolean>>;
 * 	}} An object containing:
 * - `copyFlag`: current state of the flag (`true` or `false`),
 *
 * - `setCopyFlag`: function to set the flag manually.
 *
 *
 * @example
 * ```tsx
 * const { copyFlag, setCopyFlag } = useCopyFlag(2000);
 *
 * // Show "Copied!" message for 2 seconds
 * const handleCopy = () => {
 *   setCopyFlag(true);
 * };
 *
 * return (
 *   <div>
 *     <button onClick={handleCopy}> Copy </button>
 *     {copyFlag && <span> Copied! </span>}
 *   </div>
 * );
 * ```
 */
export function useCopyFlag(duration: number) {
    const [copyFlag, setCopyFlag] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout>(null);
    useEffect(() => {
        if (copyFlag) {
            timeoutRef.current = setTimeout(() => {
                setCopyFlag(false);
            }, duration * 1000);
        } else {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [copyFlag, duration]);

    return { copyFlag, setCopyFlag };
}
