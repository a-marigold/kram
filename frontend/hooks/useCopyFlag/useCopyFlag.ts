import { useState, useEffect, useRef } from 'react';

export function useCopyFlag(duration: number) {
    const [copyFlag, setCopyFlag] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout>(null);

    useEffect(() => {
        if (copyFlag) {
            timeoutRef.current = setTimeout(() => {
                setCopyFlag(false);
            }, duration);
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
