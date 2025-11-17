'use client';

import { useState, useEffect } from 'react';

/**
 * Hook for subscribing to CSS media query changes
 *
 * @param {string} query - Query string in format- "min-width: 1000px", "max-width 1600px"
 *
 * @example
 * ```tsx
 *   const isMobile = useMediaQuery('max-width: 1600px');
 *
 *   return (
 *     <div>
 *       {isMobile ? 'Mobile view' : 'Desktop view'}
 *     </div>
 *   );
 * }
 * ```
 */
export function useMediaQuery(query: string) {
    const mediaQuery =
        typeof window !== 'undefined' && window.matchMedia(`(${query})`);

    const [matches, setMatches] = useState(
        () => mediaQuery && mediaQuery.matches
    );

    useEffect(() => {
        function checkMediaQuery(event: MediaQueryListEvent) {
            if (event.matches) {
                setMatches(true);
            } else {
                setMatches(false);
            }
        }

        if (!mediaQuery) {
            setMatches(false);
            return;
        }

        mediaQuery.addEventListener('change', checkMediaQuery);

        return () => {
            mediaQuery.removeEventListener('change', checkMediaQuery);
        };
    }, []);

    return matches;
}
