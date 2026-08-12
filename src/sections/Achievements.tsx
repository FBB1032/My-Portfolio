import { motion } from 'framer-motion';
import { Trophy, Award, GraduationCap, Cpu, Sparkles } from 'lucide-react';

const achievements = [
    {
        title: 'Heirs Insurance Hackathon 2026',
        subtitle: 'Hackathon Finalist / Competitor',
        icon: Trophy,
        date: '2026',
        description:
            'Built and presented a technology solution as part of the competitive Heirs Insurance Hackathon 2026, collaborating with a team to develop a practical product under real-world time and resource constraints.',
        takeaway:
            'Strengthened rapid prototyping, team collaboration, problem solving, and turning complex ideas into functional digital products.',
        badgeLabel: 'Hackathon 2026',
        badgeIcon: Trophy,
    },
    {
        title: 'Computer Engineering Major',
        subtitle: 'Ahmadu Bello University, Zaria',
        icon: GraduationCap,
        date: '2021 - Present',
        description:
            'Pursuing B.Eng in Computer Engineering (5th Year), focusing on software engineering, edge AI processing, system architecture, and modern mobile/web application frameworks.',
        takeaway:
            'Combines rigorous engineering fundamentals with hands-on application development to build scalable, reliable software.',
        badgeLabel: 'Academic Excellence',
        badgeIcon: GraduationCap,
    },
    {
        title: 'Edge AI & Mobile Systems Focus',
        subtitle: 'Local LLM & Offline-First Innovation',
        icon: Cpu,
        date: '2025 - Present',
        description:
            'Architected and implemented 100% offline-first application consoles (such as Amana Campus Node) leveraging local LLM inference (Gemma 4 via Ollama) and cross-platform React Native / Expo.',
        takeaway:
            'Demonstrates ability to design zero-cloud-cost, low-latency applications tailored for practical real-world environments.',
        badgeLabel: 'Technical Innovation',
        badgeIcon: Sparkles,
    },
];

export const Achievements = () => {
    return (
        <section id="achievements" className="py-24 px-6 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-widest glass-card text-primary border-primary/20 rounded-full">
                            <Award className="w-4 h-4 text-primary" /> Key Milestones & Recognition
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
                    >
                        Strongest <span className="text-gradient">Achievements</span>
                    </motion.h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
                        Proven evidence of rapid execution, technical innovation under real-world constraints, and engineering discipline.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => {
                        const MainIcon = item.icon;
                        const BadgeIcon = item.badgeIcon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                whileHover={{ y: -8 }}
                                className="glass-card p-8 rounded-3xl border border-white/10 relative flex flex-col justify-between group hover:border-primary/40 transition-all duration-300 shadow-xl"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none">
                                    <MainIcon className="w-24 h-24 text-primary" />
                                </div>

                                <div>
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-md shadow-primary/10">
                                            <MainIcon className="w-6 h-6" />
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-xs font-semibold text-primary rounded-full">
                                            <BadgeIcon className="w-3.5 h-3.5" />
                                            {item.badgeLabel}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4">
                                        {item.subtitle} • {item.date}
                                    </p>

                                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-xs text-white/50 italic leading-relaxed">
                                        <span className="font-semibold text-primary/80 uppercase not-italic font-mono text-[10px] block mb-1">Impact & Skills Demonstrated</span>
                                        "{item.takeaway}"
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Decorative background lighting */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
        </section>
    );
};
