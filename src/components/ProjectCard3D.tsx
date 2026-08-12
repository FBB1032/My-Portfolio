import React, { useRef, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from './ProjectModal';

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

const ProjectCard3D: React.FC<{ project: Project; onClick?: () => void }> = ({ project, onClick }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);
    let raf = 0;

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const handlePointerMove = (e: PointerEvent) => {
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width;
            const py = (e.clientY - rect.top) / rect.height;

            const rotateY = clamp((px - 0.5) * 22, -18, 18);
            const rotateX = clamp((0.5 - py) * 18, -14, 14);
            const translateZ = 16;

            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                if (el) {
                    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0px)`;
                    el.style.transition = 'transform 120ms linear';
                }
                if (imgRef.current) {
                    imgRef.current.style.transform = `translateZ(${translateZ}px) scale(1.06)`;
                    imgRef.current.style.transition = 'transform 160ms linear';
                }
            });
        };

        const handlePointerLeave = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                if (el) {
                    el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
                    el.style.transition = 'transform 400ms cubic-bezier(.2,.9,.2,1)';
                }
                if (imgRef.current) {
                    imgRef.current.style.transform = `translateZ(0px) scale(1)`;
                    imgRef.current.style.transition = 'transform 400ms cubic-bezier(.2,.9,.2,1)';
                }
            });
        };

        el.addEventListener('pointermove', handlePointerMove);
        el.addEventListener('pointerleave', handlePointerLeave);
        el.addEventListener('pointercancel', handlePointerLeave);

        return () => {
            cancelAnimationFrame(raf);
            el.removeEventListener('pointermove', handlePointerMove);
            el.removeEventListener('pointerleave', handlePointerLeave);
            el.removeEventListener('pointercancel', handlePointerLeave);
        };
    }, []);

    return (
        <div
            onClick={onClick}
            onKeyDown={(e) => {
                if (!onClick) return;
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            }}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            aria-label={onClick ? `Open ${project.title} details` : undefined}
            className="group relative glass-card overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        >
            <div ref={cardRef} className="transform-gpu will-change-transform">
                <div className="aspect-video overflow-hidden relative">
                    {project.image && project.image.startsWith('/') && /\.(jpe?g|png)$/i.test(project.image) ? (
                        <picture>
                            <source srcSet={project.image.replace(/\.(jpe?g|png)$/i, '.webp')} type="image/webp" />
                            <img
                                ref={imgRef}
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-300"
                                loading="lazy"
                            />
                        </picture>
                    ) : (
                        <img
                            ref={imgRef}
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                </div>

                <div className="p-8 relative">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-primary tracking-widest uppercase">
                            {project.category}
                        </span>
                        <div className="flex gap-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-white/40 hover:text-white transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-white/40 hover:text-white transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-white/60 mb-6 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold text-white/50 uppercase tracking-tighter"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard3D;
