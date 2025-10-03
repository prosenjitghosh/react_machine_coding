
import { useState, useEffect, useRef } from "react";

export const useThrottle = (value, delay = 500) =>{
    const [throttleValue,setThrottleValue] = useState(value);
    const lastRan = useRef(0);

    useEffect(() => {
        const now = Date.now();

        if (now - lastRan.current >= delay) {
        // Update immediately if enough time has passed
        setThrottleValue(value);
        lastRan.current = now;
        } else {
        // Otherwise schedule update for when delay finishes
        const handler = setTimeout(() => {
            setThrottledValue(value);
            lastRan.current = Date.now();
        }, delay - (now - lastRan.current));

        return () => clearTimeout(handler);
        }
    }, [value, delay]);

    return throttleValue;
}