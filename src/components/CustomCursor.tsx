import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary z-[9999] pointer-events-none mix-blend-difference hidden md:block"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.3)' : 'transparent',
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full z-[10000] pointer-events-none hidden md:block"
                animate={{
                    x: mousePosition.x - 3,
                    y: mousePosition.y - 3,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 500, mass: 0.1 }}
            />
        </>
    );
};
