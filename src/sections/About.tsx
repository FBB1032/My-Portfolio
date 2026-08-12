import { motion } from 'framer-motion';
import { Code, Terminal, Sparkles, Trophy } from 'lucide-react';

const stats = [
    { label: 'Engineering Student', value: '5th Year', sub: 'Ahmadu Bello University', icon: Terminal },
    { label: 'Practical Work', value: '20+ Projects', sub: 'Web & Mobile Solutions', icon: Code },
    { label: 'Hackathon Finalist', value: 'Heirs 2026', sub: 'Competitive Team Build', icon: Trophy },
    { label: 'Primary Focus', value: 'React / Next', sub: 'TypeScript & React Native', icon: Sparkles },
];

const focusAreas = [
    {
        title: 'User-Focused Digital Products',
        description: 'Building practical web and mobile applications engineered to solve real-world problems with responsive, accessible UX.',
    },
    {
        title: 'Modern Frontend & Mobile Stack',
        description: 'Deep technical focus in React, Next.js, TypeScript, React Native, and Tailwind CSS for production-ready cross-platform software.',
    },
    {
        title: 'Practical AI Capabilities',
        description: 'Integrating LLM APIs, local Gemma inference, and AI-assisted workflows into functional everyday tools.',
    },
    {
        title: 'Collaborative Execution',
        description: 'Rapid prototyping and team building under tight hackathon deadlines and engineering constraints.',
    },
];

export const About = () => {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden bg-background/60">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Bio Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-7"
                    >
                        <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block font-semibold">
                            Engineering & Product Mindset
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
                            About <span className="text-gradient">Me</span>
                        </h2>

                        <div className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed mb-8">
                            <p>
                                I'm a frontend developer expanding into full-stack development who enjoys turning ideas into useful, user-focused digital products.
                            </p>
                            <p>
                                My main focus is building responsive web and mobile applications using <strong className="text-white font-semibold">React, Next.js, TypeScript, and React Native</strong>. I'm also exploring the intersection of <strong className="text-white font-semibold">AI and software development</strong>, integrating AI capabilities into practical applications.
                            </p>
                            <p>
                                I've built projects across areas including <strong className="text-white font-semibold">healthcare, education, AI, and productivity</strong>, and I've participated in hackathons (such as the <strong className="text-white font-semibold">Heirs Insurance Hackathon 2026</strong>) where I've had the opportunity to build products under real-world constraints.
                            </p>
                            <p>
                                I'm continuously improving my engineering skills, learning better ways to structure applications, and building products that solve real problems.
                            </p>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={index}
                                        className="glass-card p-4 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors group"
                                    >
                                        <Icon className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
                                        <div className="text-lg font-bold text-white mb-0.5">{stat.value}</div>
                                        <div className="text-xs font-semibold text-primary/80">{stat.label}</div>
                                        <div className="text-[11px] text-white/40">{stat.sub}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Highlights Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-5 space-y-4"
                    >
                        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <div className="w-2 h-6 bg-primary rounded-full" />
                                Core Engineering Focus
                            </h3>

                            <div className="space-y-4">
                                {focusAreas.map((area, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                                    >
                                        <h4 className="text-sm font-bold text-white mb-1">{area.title}</h4>
                                        <p className="text-xs text-white/60 leading-relaxed">{area.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
        </section>
    );
};
