import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';
import ProjectCard3D from '../components/ProjectCard3D';
import ProjectModal, { type Project } from '../components/ProjectModal';

const categories = ['All', 'Frontend', 'Fullstack', 'AI'];

const projects: Project[] = [
    {
        title: 'Medora AI Healthcare Platform',
        category: 'Frontend / AI',
        oneLiner: 'AI-driven healthcare platform providing symptom triage, prescriptions, and verified clinic bookings.',
        description: 'An AI-powered healthcare mobile platform providing symptom triage, digital prescriptions, and direct connection to verified doctors and clinics.',
        problem: 'Patients often face long waits and fragmented access to preliminary diagnostic triage and verified local healthcare providers.',
        solution: 'Medora provides instant AI symptom triage, digital prescription management, and direct appointment routing to nearby verified clinics.',
        myRole: 'I was responsible for the frontend development, building the cross-platform mobile user interface using React Native, Expo, and TypeScript, implementing responsive layouts, managing application state, and connecting the frontend to backend services.',
        features: [
            'AI-Driven Symptom Triage UI & Instant Diagnostics',
            'Digital Prescription Routing & Automatic Refill Alerts',
            'Direct Portal to Verified Local Doctors & Clinics',
            'Cross-Platform Mobile UX with Real-Time State Management'
        ],
        challenges: 'Designing responsive low-latency UI feedback during AI diagnostic processing while handling unstable network fallbacks cleanly.',
        whatILearned: 'Scalable mobile navigation architecture, asynchronous API state management with TypeScript, and healthcare domain UX best practices.',
        image: '/Medora.jpeg',
        tech: ['React Native', 'TypeScript', 'Expo', 'AI Triage API', 'JavaScript'],
        github: 'https://github.com/FBB1032/HealthyBuddy.git',
    },
    {
        title: 'Amana Campus Node',
        category: 'Fullstack / AI',
        oneLiner: '100% offline-first local LLM kiosk running Gemma 4 via Ollama for zero-cost document generation.',
        description: 'An offline-first campus kiosk console that processes voice dictation and text inputs using local Gemma 4 inference to generate formatted PDF letters with ₦0 data costs.',
        problem: 'Students waste hours drafting official administrative PDF letters, incurring heavy cloud API costs and internet dependency.',
        solution: 'Processes multilingual voice dictation (English, Hausa, Pidgin) and text inputs using local Gemma 4 via Ollama to instantly output formatted PDF letters with zero server latency.',
        myRole: 'I built the entire project end-to-end, architecting the interactive kiosk interface, voice dictation hooks, local Ollama API streaming connection, and deterministic PDF compilation engine.',
        features: [
            'Local LLM Inference (Gemma 4) via Ollama',
            'Multilingual Voice Dictation (English, Hausa, Pidgin)',
            'Deterministic PDF Letter Generation',
            '100% Offline Architecture (Zero Cloud Latency & ₦0 Data Cost)'
        ],
        challenges: 'Handling hardware memory limits for local Gemma model inference while keeping client UI smooth and responsive during streaming output.',
        whatILearned: 'Edge AI deployment strategies, streaming response parsing, and local-first application state persistence.',
        image: '/Amana.jpeg',
        tech: ['React Native / Expo', 'JavaScript', 'Ollama / Gemma 4', 'Speech API', 'PDF Compiler'],
        github: 'https://github.com/FBB1032/Amana_Node',
    },
    {
        title: 'Eduvora Learning Platform',
        category: 'Fullstack / AI',
        oneLiner: 'Mobile-first learning app delivering offline-first study tools and exam prep for West African students.',
        description: 'Eduvora is a mobile-first learning platform delivering offline-first study materials and AI exam prep for secondary and tertiary students.',
        problem: 'Students with spotty internet connectivity struggle to access consistent exam preparation materials (WAEC, JAMB) and interactive study aids.',
        solution: 'Provides localized offline asset caching, interactive practice exam modules with instant feedback, and an AI study assistant optimized for low bandwidth.',
        myRole: 'I built the complete application end-to-end, designing the Next.js/Tailwind frontend, structuring Service Worker PWA offline asset caching, building interactive quiz engines, and connecting AI study helper APIs.',
        features: [
            'Offline Asset Caching & Service Worker Support',
            'Interactive Exam Prep (WAEC / JAMB) with Instant Feedback',
            'AI Academic Study Companion & Homework Assistant',
            'Fast Loading Mobile-First React / Next.js Interface'
        ],
        challenges: 'Structuring offline local storage caching for large question banks without degrading browser rendering performance.',
        whatILearned: 'Advanced Service Worker caching strategies, Next.js routing patterns, and accessible UI layout design.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
        tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PWA'],
        github: 'https://github.com/FBB1032/Eduvora.git',
    },
    {
        title: 'SiF Submit Platform',
        category: 'Frontend / Fullstack',
        oneLiner: 'Modular web submission platform built with reusable React component architecture.',
        description: 'Built a modular frontend and submission workflow for a high-throughput platform using reusable components, custom form validation, and scalable layout architecture.',
        problem: 'High-volume submission forms often suffer from layout lag, brittle validation, and poor user feedback during complex data entry.',
        solution: 'Implements a modular UI component design system with dynamic form validation hooks and responsive real-time previews.',
        myRole: 'I built the entire project, designing the modular component system, creating dynamic form validation hooks, layout design tokens, and submission queue UI.',
        features: [
            'Modular Component-Driven UI Architecture',
            'Dynamic Real-Time Form Validation & Error Handling',
            'Streamlined High-Throughput Submission Queue',
            'Responsive Visual Design Token System'
        ],
        challenges: 'Designing flexible, reusable form control primitives across disparate data entry types without duplicating component logic.',
        whatILearned: 'Modular component design principles, design system token architecture, and form state optimization.',
        image: '/SIF.png',
        tech: ['React', 'JavaScript', 'Tailwind CSS', 'CSS Modules', 'HTML5'],
        github: 'https://github.com/FBB1032/SIF.git',
    },
    {
        title: 'Aduke Empire',
        category: 'Fullstack',
        oneLiner: 'E-commerce digital storefront with real-time inventory management, cart drawer, and authentication.',
        description: 'A comprehensive e-commerce platform featuring dynamic product filtering, cart management, secure checkout, and user auth.',
        problem: 'Independent online retailers need lightweight storefronts with real-time cart state synchronization and reliable user authentication.',
        solution: 'Delivers a modern web storefront with dynamic catalog filtering, instant cart updates, checkout pipelines, and Supabase auth.',
        myRole: 'I built the entire full-stack application end-to-end, constructing the React product catalog, shopping cart drawer state synchronization, Express backend routing, and Supabase database & authentication integration.',
        features: [
            'Dynamic Product Inventory & Category Filters',
            'Real-Time Shopping Cart State Drawer',
            'Secure User Authentication & Account Management',
            'Supabase Relational Database Integration'
        ],
        challenges: 'Maintaining smooth cart state synchronization across page navigations and rapid user interaction.',
        whatILearned: 'Relational database operations with Supabase, authentication flow handling, and global state management.',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
        tech: ['React', 'Supabase', 'Node.js', 'Express', 'Tailwind CSS'],
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
        <section id="projects" className="py-24 px-6 bg-background/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-primary mb-2 block font-semibold">
                            Engineering Work & Case Studies
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-white">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="text-white/60 max-w-md mt-2 text-sm sm:text-base">
                            Click any project card to view technical problem statements, my exact engineering role, features, and key learnings.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    'px-5 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer',
                                    activeCategory === cat
                                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                                        : 'border-white/10 text-white/60 hover:border-white/20 hover:text-white'
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
