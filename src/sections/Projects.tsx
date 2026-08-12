import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';
import ProjectCard3D from '../components/ProjectCard3D';
import ProjectModal, { type Project } from '../components/ProjectModal';

const categories = ['All', 'Frontend', 'Fullstack', 'AI'];

const projects: Project[] = [
    {
        title: 'Meora - AI Healthcare Platform',
        category: 'Fullstack / AI',
        role: 'Lead Full-Stack & AI Developer',
        description: 'An AI-powered healthcare platform providing personalized prescriptions, triage, and connection to verified doctors, clinics, and pharmacies.',
        longDescription: 'Meora is an end-to-end intelligent digital healthcare ecosystem designed to revolutionize patient care. It features AI-driven preliminary symptom triage, digital prescription generation, real-time doctor appointment booking, and seamless connection with verified neighborhood clinics and pharmacies.',
        features: [
            'AI-Driven Symptom Triage & Instant Preliminary Diagnostics',
            'Digital Prescription Management & Automatic Refill Alerts',
            'Direct Portal to Verified Local Doctors & Clinics',
            'Cross-Platform Mobile App Experience with Real-Time Updates'
        ],
        image: '/Medora.jpeg',
        tech: ['React Native', 'JavaScript', 'TypeScript', 'Expo', 'AI Triage API', 'Node.js'],
        github: 'https://github.com/FBB1032/HealthyBuddy.git',
    },
    {
        title: 'SiF Submit Platform',
        category: 'Fullstack',
        role: 'Frontend Architecture Lead',
        description: 'Built a modular frontend for a website submission platform using reusable components and scalable architecture.',
        longDescription: 'SiF Submit Platform is a high-throughput content and website submission web application. Built with modular design architecture, component libraries, dynamic form validators, and responsive layouts to maximize submission efficiency and ease of maintenance.',
        features: [
            'Modular Component-Driven UI Architecture',
            'Dynamic Real-Time Form Validation & Error Handling',
            'Optimized Submission Queue & Scalable Data Handling',
            'Responsive Dark/Light Visual Design Tokens'
        ],
        image: '/SIF.png',
        tech: ['React', 'JavaScript', 'CSS', 'Modular Architecture', 'HTML5'],
        github: 'https://github.com/FBB1032/SIF.git',
    },
    {
        title: 'Eduvora - Learning Platform',
        category: 'Fullstack / AI',
        role: 'Full-Stack Developer',
        description: 'Eduvora is a full-stack, mobile-first learning platform for Nigerian secondary and tertiary students.',
        longDescription: 'Eduvora bridges educational barriers by providing localized, offline-first accessible learning content, interactive exam practice modules (WAEC, JAMB, University level), and AI-assisted homework help tailored specifically for West African students.',
        features: [
            'Offline-First Local Storage & Asset Caching',
            'Interactive Exam Prep with Instant Feedback & Explanations',
            'AI Academic Study Companion & Homework Solver',
            'Mobile-Optimized Fast Loading React/Next.js Interface'
        ],
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
        tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Expo', 'PWA'],
        github: 'https://github.com/FBB1032/Eduvora.git',
    },
    {
        title: 'Amana Campus Node',
        category: 'Fullstack / AI',
        role: 'AI & Edge Systems Engineer',
        description: 'Amana Campus Node is an offline first kiosk console powered by Gemma 4 running locally via Ollama. It converts unstructured student inputs into official PDF letters with zero cloud cost.',
        longDescription: 'Amana Campus Node is an offline-first kiosk console powered by Gemma 4 (gemma4:e2b) running locally via Ollama. It converts unstructured student inputs multilingual voice dictation (English, Hausa, Pidgin), plain text, or scanned ID credentials into deterministically routed, perfectly formatted official PDF letters with zero cloud API dependency, zero server latency, and ₦0 internet data cost.',
        features: [
            'Local LLM Inference with Gemma 4 (gemma4:e2b) via Ollama',
            'Multilingual Voice Dictation (English, Hausa, Pidgin)',
            'Deterministic Formatting & PDF Letter Generation',
            '100% Offline-First Architecture (Zero Cloud Latency & ₦0 Data Cost)'
        ],
        image: '/Amana.jpeg',
        tech: ['JavaScript', 'Ollama / Gemma 4', 'Async/Await', 'Offline-First', 'AI', 'Expo', 'React Native'],
        github: 'https://github.com/FBB1032/Amana_Node',
    },
    {
        title: 'Aduke Empire',
        category: 'Fullstack',
        role: 'Full-Stack Developer',
        description: 'A comprehensive E-commerce platform featuring product management, secure checkout, and user authentication.',
        longDescription: 'Aduke Empire is a full-featured e-commerce digital store designed for seamless online shopping. It includes dynamic product galleries, instant category filtering, secure checkout workflows, real-time inventory tracking, and full user account management.',
        features: [
            'Real-Time Product Inventory & Categorization',
            'Secure User Authentication & Account Management',
            'Streamlined Cart Management & Checkout Pipeline',
            'Scalable Supabase & Express Backend Services'
        ],
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
        tech: ['React', 'Supabase', 'Express', 'Node.js', 'Tailwind CSS'],
        github: 'https://github.com/FBB1032/Aduke-Empire.git',
    },
];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selected, setSelected] = useState<Project | null>(null);

    const filteredProjects = projects.filter(
        (p) => activeCategory === 'All' || p.category.toLowerCase().includes(activeCategory.toLowerCase())
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
                                    'px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer',
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

