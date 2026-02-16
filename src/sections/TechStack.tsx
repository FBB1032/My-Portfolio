import { motion } from 'framer-motion';
import {
    Code2,
    Cpu,
    Layers,
    Database,
} from 'lucide-react';

const technologies = [
    {
        category: 'Frontend & 3D',
        icon: <Code2 className="w-5 h-5" />,
        items: [
            { name: 'React / Next.js', level: 80 },
            { name: 'Tailwind CSS', level: 90 },
            { name: 'TypeScript', level: 70 },
            { name: 'React Native', level: 70 },
            { name: 'UI/UX Design', level: 80 }
        ]
    },
    {
        category: 'AI & Backend (Growing)',
        icon: <Database className="w-5 h-5" />,
        items: [
            { name: 'AI Integration', level: 50 },
            { name: 'Supabase / Node.js', level: 30 },
            { name: 'Computer Vision', level: 50 },
            { name: 'System Design', level: 65 }
        ]
    },
    {
        category: 'Tools & Workflow',
        icon: <Layers className="w-5 h-5" />,
        items: [
            { name: 'Git / Version Control', level: 85 },
            { name: 'VS Code', level: 95 },
            { name: 'Expo', level: 75 },
            { name: 'Responsive UI', level: 90 }
        ]
    },
    {
        category: 'Core Expertise',
        icon: <Cpu className="w-5 h-5" />,
        items: [
            { name: 'API Integration', level: 75 },
            { name: 'Debugging', level: 80 },
            { name: 'Optimization', level: 70 },
            { name: 'Architecture', level: 65 }
        ]
    }
];

export const TechStack = () => {
    return (
        <section id="tech-stack" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4 italic tracking-tighter uppercase"
                    >
                        Technical Ecosystem
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: 80 }}
                        viewport={{ once: true }}
                        className="h-1 bg-primary mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 border-white/5 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                {tech.icon}
                            </div>

                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary transition-colors group-hover:text-white">
                                {tech.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-4">{tech.category}</h3>

                            <ul className="space-y-4">
                                {tech.items.map((item) => (
                                    <li key={item.name} className="space-y-2">
                                        <div className="flex justify-between items-center text-xs font-medium">
                                            <span className="text-white/70">{item.name}</span>
                                            <span className="text-primary/60">{item.level}%</span>
                                        </div>
                                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className="h-full bg-primary/50 rounded-full"
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Animated Background Mesh */}
                <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-secondary/5 blur-[100px]" />
                <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-primary/5 blur-[100px]" />
            </div>
        </section>
    );
};
