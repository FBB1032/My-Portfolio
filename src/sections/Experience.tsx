

export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 bg-background/50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12">Professional Journey</h2>
                <div className="space-y-12">
                    <div className="glass-card p-8 flex flex-col md:flex-row gap-6">
                        <div className="min-w-[200px] text-primary font-semibold italic">2021 - Present</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Bachelor of Engineering — Computer Engineering</h3>
                            <p className="text-white/40 mb-4 text-gradient">Ahmadu Bello University, Zaria</p>
                            <p className="text-white/60">Combining academic theory with advanced engineering principles to build robust technological solutions.</p>
                        </div>
                    </div>
                    <div className="glass-card p-8 flex flex-col md:flex-row gap-6 opacity-80">
                        <div className="min-w-[200px] text-primary font-semibold italic">2019 - 2022</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Diploma — Computer Engineering</h3>
                            <p className="text-white/40 mb-4">Ahmadu Bello University, Zaria</p>
                            <p className="text-white/60">Foundation in computer hardware, networking, and software systems.</p>
                        </div>
                    </div>
                    <div className="glass-card p-8 flex flex-col md:flex-row gap-6 opacity-60">
                        <div className="min-w-[200px] text-primary font-semibold italic">Completed 2019</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">SSCE</h3>
                            <p className="text-white/40 mb-4">Hope Secondary School, Kaduna</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
