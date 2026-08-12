import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroScene from '../components/HeroScene';
import Portrait3D from '../components/Portrait3D';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
            <HeroScene />

            <div className="max-w-7xl mx-auto w-full pt-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs sm:text-sm font-semibold glass-card text-primary border-primary/20 rounded-full tracking-wide">
                                Available for Frontend & Mobile Engineering Opportunities
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white"
                        >
                            Frontend Developer Building <span className="text-gradient">Practical Digital Products</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="space-y-4 mb-8 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed"
                        >
                            <p>
                                I'm <strong className="text-white font-semibold">Fahd Badamasi</strong>, a frontend developer (expanding into full-stack development) focused on building modern, responsive web and mobile applications with <strong className="text-white font-semibold">React, Next.js, TypeScript, and React Native</strong>.
                            </p>
                            <p className="text-white/60">
                                I turn ideas into functional digital products, from AI-powered applications to fintech, healthcare, and other real-world solutions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <a
                                href="#projects"
                                aria-label="View my projects"
                                className="px-6 py-3.5 bg-primary text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 group"
                            >
                                View My Projects
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                aria-label="Let's work together"
                                className="px-6 py-3.5 glass-card text-white rounded-xl font-semibold hover:bg-white/10 transition-all border border-white/15 flex items-center gap-2"
                            >
                                Let's Work Together
                            </a>
                        </motion.div>
                    </div>

                    <div className="flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/20 blur-3xl opacity-60" />
                            <div className="relative z-10">
                                <Portrait3D size={300} src="/portrait.jpeg" alt="Portrait" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-1.5 h-1.5 bg-white/40 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};
