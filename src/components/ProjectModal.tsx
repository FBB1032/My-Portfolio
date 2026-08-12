import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, CheckCircle2, Layers, Cpu, Code2 } from 'lucide-react';

export type Project = {
    title: string;
    category: string;
    description: string;
    longDescription?: string;
    features?: string[];
    role?: string;
    image: string;
    tech: string[];
    github?: string;
    live?: string;
};

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    // Lock body scroll when modal is open and handle Escape key press
    useEffect(() => {
        if (!project) return;

        const originalStyle = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = originalStyle;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [project, onClose]);

    return (
        <AnimatePresence>
            {project && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto custom-scrollbar">
                    {/* Dark Blur Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Scrollable Modal Content Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative z-10 w-full max-w-4xl max-h-[85vh] sm:max-h-[90vh] glass-card p-6 sm:p-8 rounded-3xl overflow-y-auto custom-scrollbar border border-white/15 bg-background/95 shadow-2xl my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Sticky Close Icon */}
                        <button
                            onClick={onClose}
                            aria-label="Close project details"
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white border border-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary z-20 cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col gap-6">
                            {/* Title & Metadata */}
                            <div>
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    {project.role && (
                                        <span className="text-xs text-white/60 border border-white/10 px-3 py-1 rounded-full bg-white/5">
                                            {project.role}
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pr-10">
                                    {project.title}
                                </h2>
                            </div>

                            {/* Image & Description */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                {/* Image Container */}
                                <div className="md:col-span-6 rounded-2xl overflow-hidden border border-white/10 relative aspect-video md:aspect-auto h-56 md:h-full bg-white/5">
                                    {project.image && project.image.startsWith('/') && /\.(jpe?g|png)$/i.test(project.image) ? (
                                        <picture>
                                            <source srcSet={project.image.replace(/\.(jpe?g|png)$/i, '.webp')} type="image/webp" />
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </picture>
                                    ) : (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-40 pointer-events-none" />
                                </div>

                                {/* Overview & Links */}
                                <div className="md:col-span-6 flex flex-col justify-between space-y-4">
                                    <div>
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-2 flex items-center gap-2">
                                            <Layers className="w-4 h-4 text-primary" /> Project Overview
                                        </h3>
                                        <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                                            {project.longDescription || project.description}
                                        </p>
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-wrap items-center gap-3 pt-2">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/10 hover:border-white/20"
                                            >
                                                <Github className="w-4 h-4" /> View Source Code
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/80 text-white font-medium text-sm transition-all shadow-lg shadow-primary/25"
                                            >
                                                <ExternalLink className="w-4 h-4" /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Features Section */}
                            {project.features && project.features.length > 0 && (
                                <div className="pt-4 border-t border-white/10">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-3 flex items-center gap-2">
                                        <Cpu className="w-4 h-4 text-primary" /> Key Features & Capabilities
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {project.features.map((feature, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-sm text-white/80"
                                            >
                                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Tech Stack */}
                            <div className="pt-4 border-t border-white/10">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-3 flex items-center gap-2">
                                    <Code2 className="w-4 h-4 text-primary" /> Technologies & Tools
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-white/70 hover:text-white hover:border-white/20 transition-colors uppercase tracking-wider"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer Close Button */}
                            <div className="flex justify-end pt-4 border-t border-white/10">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium text-sm transition-colors border border-white/10 cursor-pointer"
                                >
                                    Close Details
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;

