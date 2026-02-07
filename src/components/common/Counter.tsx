import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
    from?: number;
    to: number;
    duration?: number;
    className?: string;
    suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ from = 0, to, duration = 2, className, suffix = '' }) => {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            let animationFrame: number;

            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

                // Easing function (easeOutExpo)
                const easeValue = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                setCount(Math.floor(from + (to - from) * easeValue));

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };

            animationFrame = requestAnimationFrame(animate);

            return () => cancelAnimationFrame(animationFrame);
        }
    }, [isInView, from, to, duration]);

    return (
        <span ref={ref} className={className}>
            {count}{suffix}
        </span>
    );
};

export default Counter;
