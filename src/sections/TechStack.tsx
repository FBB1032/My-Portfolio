import { motion } from 'framer-motion';
import {
    Layout,
    Database,
    Wrench,
    Sparkles,
    Compass,
    CheckCircle2
} from 'lucide-react';

const skillGroups = [
    {
        title: 'Frontend',
        icon: Layout,
        skills: [
            'React',
            'Next.js',
            'React Native',
            'TypeScript',
            'JavaScript',
            'HTML',
            'CSS',
            'Tailwind CSS',
        ],
    },
    {
        title: 'Backend & Data',
        icon: Database,
        skills: [
            'Node.js',
            'REST APIs',
            'PostgreSQL',
            'Supabase',
        ],
    },
    {
        title: 'Tools',
        icon: Wrench,
        skills: [
            'Git',
            'GitHub',
            'Figma',
            'Vercel',
        ],
    },
    {
        title: 'AI & Emerging Technologies',
        icon: Sparkles,
        skills: [
            'AI API Integration',
            'Generative AI',
            'AI-Assisted Application Development',
        ],
    },
];

const currentlyExploring = [
    'Backend architecture and API development',
    'AI integration in real-world applications',
    'Scalable application architecture',
    'Database design',
    'Performance and production-ready development',
];

export const TechStack = () => {
    return (
        <section id="skills" className="py-24 px-6 relative bg-background/80">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-xs font-semibold uppercase tracking-widest glass-card text-primary border-primary/20 rounded-full">
                            Credible Technical Proficiency
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
                    >
                        Technical <span className="text-gradient">Skills</span>
                    </motion.h2>
                    <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">
                        Core technologies and tooling I comfortably use to build web and mobile products.
                    </p>
                </div>

                {/* 4 Skill Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {skillGroups.map((group, index) => {
                        const Icon = group.icon;
                        return (
                            <motion.div
                                key={group.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 rounded-3xl border border-white/10 relative group hover:border-primary/40 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{group.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white/80 group-hover:border-primary/20 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Currently Exploring Section */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div className="lg:max-w-md">
                            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-2">
                                <Compass className="w-4 h-4" /> Growth Mindset
                            </div>
                            <h3 className="text-2xl font-extrabold text-white mb-3">Currently Exploring</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                I'm continuously improving my software engineering skills, with a current focus on production-ready architecture and deeper backend integrations.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:w-3/5">
                            {currentlyExploring.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm font-medium text-white/80"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background lighting */}
            <div className="absolute top-1/3 right-10 -z-10 w-80 h-80 bg-primary/5 blur-[120px] pointer-events-none" />
        </section>
    );
};
