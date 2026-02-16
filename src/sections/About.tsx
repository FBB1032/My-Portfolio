import { motion } from 'framer-motion';
import { User, Code, Palette, Zap } from 'lucide-react';

const stats = [
    { label: 'Academic Years', value: '4th', icon: Zap },
    { label: 'Technical Skills', value: '15+', icon: User },
    { label: 'Practical Projects', value: '9+', icon: Code },
    { label: 'Certifications', value: '5+', icon: Palette },
];

const skillCategories = [
    {
        title: 'Frontend & 3D',
        skills: [
            { name: 'React / Next.js', level: 80 },
            { name: 'Tailwind CSS', level: 90 },
            { name: 'TypeScript', level: 70 },
            { name: 'React Native', level: 70 },
            { name: 'UI/UX Design', level: 80 }
        ],
    },
    {
        title: 'AI & Backend (still Growing)',
        skills: [
            { name: 'AI Integration (OpenAI/LangChain)', level: 50 },
            { name: 'Computer Vision Basics', level: 50 },
            { name: 'Node.js / Express', level: 30 },
            { name: 'System Design', level: 65 },
        ],
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Bridging Tech & <br />
                            <span className="text-gradient">User-Centric Design.</span>
                        </h2>
                        <p className="text-white/60 text-lg mb-8 leading-relaxed text-justify">
                            Frontend-focused developer experienced in building responsive interfaces and integrating backend services. Strong interest in scalable UI architecture, performance optimization, and modern development workflows.
                        </p>
                        <p className="text-white/60 text-lg mb-12 leading-relaxed text-justify">
                            Currently pursuing a B.Eng in Computer Engineering at Ahmadu Bello University, I combine academic rigor with hands-on project experience to deliver impactful web solutions.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="glass-card p-6 border-white/5 group hover:border-primary/30 transition-colors">
                                    <stat.icon className="w-5 h-5 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="space-y-12">
                        {skillCategories.map((category, catIndex) => (
                            <motion.div
                                key={catIndex}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: catIndex * 0.2 }}
                            >
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <div className="w-8 h-[1px] bg-primary" />
                                    {category.title}
                                </h3>
                                <div className="space-y-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-medium text-white/80">{skill.name}</span>
                                                <span className="text-sm font-medium text-primary">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, delay: 0.5 + (skillIndex * 0.1), ease: "circOut" }}
                                                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
        </section>
    );
};
