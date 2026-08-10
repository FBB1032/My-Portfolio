import React, { useRef, useEffect } from 'react';

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

const Portrait3D: React.FC<{ size?: number; src?: string; alt?: string }> = ({ size = 240, src = '/portrait.jpeg', alt = 'Portrait' }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);
    let raf = 0;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const handleMove = (e: PointerEvent) => {
            const rect = el.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width;
            const py = (e.clientY - rect.top) / rect.height;

            const ry = clamp((px - 0.5) * 20, -16, 16);
            const rx = clamp((0.5 - py) * 20, -14, 14);

            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                if (el) el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
                if (imgRef.current) imgRef.current.style.transform = `translateZ(18px) scale(1.03)`;
            });
        };

        const handleLeave = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                if (el) el.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg)`;
                if (imgRef.current) imgRef.current.style.transform = `translateZ(0px) scale(1)`;
            });
        };

        el.addEventListener('pointermove', handleMove);
        el.addEventListener('pointerleave', handleLeave);
        el.addEventListener('pointercancel', handleLeave);

        return () => {
            cancelAnimationFrame(raf);
            el.removeEventListener('pointermove', handleMove);
            el.removeEventListener('pointerleave', handleLeave);
            el.removeEventListener('pointercancel', handleLeave);
        };
    }, []);

    return (
        <div
            ref={ref}
            className="rounded-2xl p-1 bg-gradient-to-br from-primary to-secondary shadow-xl"
            style={{ width: size, height: size }}
        >
            <div className="w-full h-full bg-background rounded-2xl overflow-hidden flex items-center justify-center">
                <picture>
                    <source srcSet={src.replace(/\.(jpe?g|png)$/i, '.webp')} type="image/webp" />
                    <img
                        ref={imgRef}
                        src={src}
                        alt={alt}
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-300"
                        style={{ display: 'block' }}
                        loading="lazy"
                    />
                </picture>
            </div>
        </div>
    );
};

export default Portrait3D;
