import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '../utils/cn';

// Asset Imports
import healthyBuddyImg from '../assets/WhatsApp Image 2026-02-14 at 10.03.15.jpeg';

const categories = ['All', 'Frontend', 'Fullstack'];

const projects = [
    {
        title: 'Healthy Buddy',
        category: 'Fullstack / AI',
        description: 'An AI-powered healthcare platform providing personalized prescriptions, triage, and connection to verified doctors, clinics, and pharmacies.',
        image: healthyBuddyImg,
        tech: ['React Native', 'JavaScript', 'TypeScript', 'Expo'],
        github: 'https://github.com/FBB1032/HealthyBuddy.git',
    },
    {
        title: 'SiF Submit Platform',
        category: 'Frontend',
        description: 'Built a modular frontend for a website submission platform using reusable components and scalable architecture.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop',
        tech: ['React', 'JavaScript', 'CSS', 'Modular Architecture'],
        github: 'https://github.com/FBB1032/SIF.git',
    },
    {
        title: 'Personal Portfolio',
        category: 'Frontend',
        description: 'Designed a responsive personal branding site showcasing technical strengths and optimized for cross-device compatibility.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
        tech: ['HTML', 'CSS', 'React', 'Responsive Design'],
        github: 'https://github.com/FBB1032/My-Portfolio.git',
    },
    {
        title: 'Weather Dashboard',
        category: 'Frontend',
        description: 'Integrated real-time weather API with dynamic UI rendering and asynchronous data handling.',
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop',
        tech: ['JavaScript', 'External API', 'Async/Await'],
        github: '#',
    },
    {
        title: 'Aduke Empire',
        category: 'Fullstack',
        description: 'A comprehensive E-commerce platform featuring product management, secure checkout, and user authentication.',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
        tech: ['React', 'Supabase', 'Express', 'Full Stack'],
        github: 'https://github.com/FBB1032/Aduke-Empire.git',
        live: '#',
    },
];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = projects.filter(
        (p) => activeCategory === 'All' || p.category === activeCategory
    );

    return (
        <section id="projects" className="py-32 px-6 bg-background/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl font-bold mb-4 italic tracking-tighter uppercase">Selected Works</h2>
                        <p className="text-white/40 max-w-md">A collection of projects that push the boundaries of web technology and creative design.</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    'px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300',
                                    activeCategory === cat
                                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                                        : 'border-white/10 text-white/60 hover:border-white/20'
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative glass-card overflow-hidden"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                                </div>

                                <div className="p-8 relative">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold text-primary tracking-widest uppercase">
                                            {project.category}
                                        </span>
                                        <div className="flex gap-4">
                                            <a href={project.github} className="text-white/40 hover:text-white transition-colors">
                                                <Github className="w-5 h-5" />
                                            </a>
                                            <a href={project.live} className="text-white/40 hover:text-white transition-colors">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/60 mb-6 line-clamp-2">
                                        {project.description}
                                    </p>

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
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};
