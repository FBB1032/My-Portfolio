import { Send, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-background pb-32">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tighter uppercase leading-tight">Let's build <br /><span className="text-gradient">the future.</span></h2>
                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-primary text-xl">📞</div>
                                <div>
                                    <div className="text-xs uppercase font-mono tracking-widest text-white/40">Phone</div>
                                    <div className="text-lg font-medium">0704 996 3476</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-primary text-xl">✉️</div>
                                <div>
                                    <div className="text-xs uppercase font-mono tracking-widest text-white/40">Email</div>
                                    <div className="text-lg font-medium underline underline-offset-4 decoration-primary/30 decoration-2 transition-all hover:decoration-primary">fahdbadamasi320@gmail.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-primary text-xl">📍</div>
                                <div>
                                    <div className="text-xs uppercase font-mono tracking-widest text-white/40">Location</div>
                                    <div className="text-lg font-medium">No. 1 Nabakori, Kabama, Zaria</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <a href="https://github.com/FBB1032" className="p-4 glass-card hover:bg-white/10 transition-all text-white/60 hover:text-white">
                                <Github />
                            </a>
                            <a href="https://www.linkedin.com/in/fahd-badamasi-763883215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="p-4 glass-card hover:bg-white/10 transition-all text-white/60 hover:text-white">
                                <Linkedin />
                            </a>
                            <a href="https://x.com/official_king_f?s=11" className="p-4 glass-card hover:bg-white/10 transition-all text-white/60 hover:text-white flex items-center justify-center">
                                <span className="font-bold text-lg">X</span>
                            </a>
                        </div>
                    </div>

                    <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all" />
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                window.location.href = `mailto:fahdbadamasi320@gmail.com?subject=Portfolio Message&body=Hi Fahd, my name is ${((e.target as HTMLFormElement).elements.namedItem('name') as HTMLInputElement).value}.`;
                            }}
                            className="space-y-6 relative"
                        >
                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2 font-mono uppercase tracking-tighter">Your Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                                    placeholder="Fahd"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2 font-mono uppercase tracking-tighter">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2 font-mono uppercase tracking-tighter">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button type="submit" className="w-full py-4 bg-primary text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all transform active:scale-[0.98]">
                                Submit Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
