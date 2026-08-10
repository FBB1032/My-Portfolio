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
                            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium glass-card text-primary border-primary/20">
                                Available for new opportunities
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-tight"
                        >
                            FAHD <span className="text-gradient">BADAMASI</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="text-lg md:text-xl font-semibold text-white/80 mb-6"
                        >
                            Frontend & Full-Stack Developer  crafting performant, accessible experiences.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="text-base md:text-lg text-white/60 mb-8 max-w-xl leading-relaxed"
                        >
                            I build delightful interfaces using React, TypeScript, and Tailwind optimized for real users and production-ready performance. Currently studying Computer Engineering at Ahmadu Bello University.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.55 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#projects"
                                aria-label="View my projects"
                                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-primary/95 transition-colors group"
                            >
                                View My Work
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                aria-label="Contact me"
                                className="px-6 py-3 glass-card text-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
                            >
                                Contact Me
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
