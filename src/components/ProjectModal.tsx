import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

type Project = {
    title: string;
    category: string;
    description: string;
    image: string;
    tech: string[];
    github?: string;
    live?: string;
};

const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={onClose} />
            <div className="relative z-10 w-full max-w-4xl mx-4 glass-card p-6 rounded-2xl">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2 h-64 md:h-auto overflow-hidden rounded-lg">
                        {project.image && project.image.startsWith('/') && /\.(jpe?g|png)$/i.test(project.image) ? (
                            <picture>
                                <source srcSet={project.image.replace(/\.(jpe?g|png)$/i, '.webp')} type="image/webp" />
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                            </picture>
                        ) : (
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        )}
                    </div>

                    <div className="md:w-1/2">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold">{project.title}</h3>
                            <div className="flex gap-3">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white">
                                        <Github />
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white">
                                        <ExternalLink />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="text-white/60 mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t) => (
                                <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-bold text-white/50 uppercase">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-end">
                            <button onClick={onClose} aria-label="Close project details" className="px-4 py-2 bg-primary rounded-md font-semibold">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
