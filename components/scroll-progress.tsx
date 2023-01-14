import { useEffect, useState, useCallback } from 'react';

const OFFSET_TOP_PIXELS = 150;

export const ScrollProgress = () => {
    const [scrolledPercent, setScrolledPercent] = useState(0);
    const [scrolledPixels, setCcrolledPixels] = useState(0);

    const scrollProgress = useCallback(() => {
        const scrolledPixels = document.documentElement.scrollTop;
        const windowHeightPixels =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolledPercent = (scrolledPixels / windowHeightPixels) * 100;

        setCcrolledPixels(scrolledPixels);
        setScrolledPercent(scrolledPercent);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', scrollProgress);

        return () => {
            window.removeEventListener('scroll', scrollProgress);
        };
    }, [scrollProgress]);

    return (
        <div
            className={`fixed top-0 left-0 h-[5px] w-[${scrolledPercent}$] bg-red z-50 opacity-75 ${
                scrolledPixels < OFFSET_TOP_PIXELS && 'hidden'
            }`}
            style={{ width: `${scrolledPercent}%` }}
        />
    );
};
