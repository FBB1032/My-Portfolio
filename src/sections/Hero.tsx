import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Scene } from '../components/Scene';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
            <Scene />

            <div className="max-w-7xl mx-auto w-full pt-20">
                <div className="max-w-3xl">
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
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase"
                    >
                        FAHD <span className="text-gradient">BADAMASI</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-2xl md:text-3xl font-bold text-white/80 mb-8"
                    >
                        Frontend / Full-Stack Developer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed"
                    >
                        Contributing as a Frontend Developer with expertise in HTML5, Tailwind CSS, and React JS. Currently pursuing Computer Engineering at Ahmadu Bello University, bridging cutting-edge technology and user-centric design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors group"
                        >
                            View My Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 glass-card text-white rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                            Contact Me
                        </a>
                    </motion.div>
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
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-white/40 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};
