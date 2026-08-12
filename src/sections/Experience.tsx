export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 bg-background/50">
            <div className="max-w-7xl mx-auto">
                <span className="text-xs font-mono uppercase tracking-widest text-primary mb-2 block font-semibold">
                    Academic & Engineering Pathway
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-12">
                    Education & <span className="text-gradient">Experience</span>
                </h2>
                <div className="space-y-8">
                    <div className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-6 hover:border-primary/30 transition-colors">
                        <div className="min-w-[180px] text-primary font-bold text-sm uppercase tracking-wider">2021 - Present</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Bachelor of Engineering in Computer Engineering</h3>
                            <p className="text-primary/90 text-sm font-semibold mb-3">Ahmadu Bello University, Zaria</p>
                            <p className="text-white/70 text-sm leading-relaxed">Combining academic theory with advanced software engineering principles to build robust web and mobile technological solutions.</p>
                        </div>
                    </div>
                    <div className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-6 hover:border-primary/30 transition-colors">
                        <div className="min-w-[180px] text-primary font-bold text-sm uppercase tracking-wider">Completed 2022</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Diploma in Computer Engineering</h3>
                            <p className="text-white/50 text-sm font-semibold mb-3">Ahmadu Bello University, Zaria</p>
                            <p className="text-white/70 text-sm leading-relaxed">Foundation in computer hardware, networking, algorithms, and software systems.</p>
                        </div>
                    </div>
                    <div className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-6 opacity-70 hover:opacity-100 transition-opacity">
                        <div className="min-w-[180px] text-primary font-bold text-sm uppercase tracking-wider">Completed 2019</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Senior Secondary Certificate (SSCE)</h3>
                            <p className="text-white/50 text-sm font-semibold">Hope Secondary School, Kaduna</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
