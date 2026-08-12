import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';
import ProjectCard3D from '../components/ProjectCard3D';
import ProjectModal from '../components/ProjectModal';

// Asset Imports
// Images are served from the `public/` folder; use absolute public paths



const categories = ['All', 'Frontend', 'Fullstack'];

const projects = [
    {
        title: 'Meora - AI Healthcare Platform',
        category: 'Fullstack / AI',
        description: 'An AI-powered healthcare platform providing personalized prescriptions, triage, and connection to verified doctors, clinics, and pharmacies.',
        image: '/Medora.jpeg',
        tech: ['React Native', 'JavaScript', 'TypeScript', 'Expo'],
        github: 'https://github.com/FBB1032/HealthyBuddy.git',
    },
    {
        title: 'SiF Submit Platform',
        category: 'Fullstack',
        description: 'Built a modular frontend for a website submission platform using reusable components and scalable architecture.',
        image: '/SIF.png',
        tech: ['React', 'JavaScript', 'CSS', 'Modular Architecture'],
        github: 'https://github.com/FBB1032/SIF.git',
    },
    {
        title: 'Eduvora - Learning Platform',
        category: 'Fullstack/AI',
        description: 'Eduvora is a full-stack, mobile-first learning platform for Nigerian secondary and tertiary students.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
        tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Expo'],
        github: 'https://github.com/FBB1032/Eduvora.git',
    },
    {
        title: 'Amana Campus Node',
        category: 'Fullstack/AI',
        description: 'Amana Campus Node is an offline-first kiosk console powered by Gemma 4 (gemma4:e2b) running locally via Ollama. It converts unstructured student inputs multilingual voice dictation (English, Hausa, Pidgin), plain text, or scanned ID credentials into deterministically routed, perfectly formatted official PDF letters with zero cloud API dependency, zero server latency, and ₦0 internet data cost.',
        image: '/Amana.jpeg',
        tech: ['JavaScript', 'External API', 'Async/Await', 'Offline-First', 'AI', 'Expo', 'React Native'],
        github: 'https://github.com/FBB1032/Amana_Node',
    },
    {
        title: 'Aduke Empire',
        category: 'Fullstack',
        description: 'A comprehensive E-commerce platform featuring product management, secure checkout, and user authentication.',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
        tech: ['React', 'Supabase', 'Express', 'Full Stack'],
        github: 'https://github.com/FBB1032/Aduke-Empire.git',
    },
];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selected, setSelected] = useState<any | null>(null);

    const filteredProjects = projects.filter((p) => activeCategory === 'All' || p.category === activeCategory);

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
                            >
                                <ProjectCard3D project={project} onClick={() => setSelected(project)} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
            <ProjectModal project={selected} onClose={() => setSelected(null)} />
        </section>
    );
};
