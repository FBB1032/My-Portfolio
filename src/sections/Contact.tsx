import { Send, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-background pb-32">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Direct Hook & Links */}
                    <div className="md:col-span-6 space-y-8">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block font-semibold">
                                Get In Touch
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                                Let's Build <span className="text-gradient">Something.</span>
                            </h2>
                            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-4">
                                Have a product idea, project, or opportunity you'd like to discuss?
                            </p>
                            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4">
                                I'm open to frontend development opportunities, collaborations, internships, freelance projects, and interesting products.
                            </p>
                            <p className="text-white font-bold text-lg sm:text-xl">
                                Let's talk.
                            </p>
                        </div>

                        {/* Direct Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="mailto:fahdbadamasi320@gmail.com"
                                className="flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary/25"
                            >
                                <Mail className="w-4 h-4" /> Email Me
                            </a>
                            <a
                                href="https://www.linkedin.com/in/fahd-badamasi-763883215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3.5 glass-card text-white hover:bg-white/10 font-semibold rounded-xl transition-all border border-white/15"
                            >
                                <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn
                            </a>
                            <a
                                href="https://github.com/FBB1032"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3.5 glass-card text-white hover:bg-white/10 font-semibold rounded-xl transition-all border border-white/15"
                            >
                                <Github className="w-4 h-4" /> GitHub
                            </a>
                        </div>

                        {/* Contact Metadata */}
                        <div className="pt-6 border-t border-white/10 space-y-4">
                            <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                                <div className="w-11 h-11 rounded-2xl glass-card border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-md shadow-primary/10">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase font-mono tracking-widest text-white/40">Direct Email</div>
                                    <a href="mailto:fahdbadamasi320@gmail.com" className="text-sm font-semibold hover:text-primary transition-colors">
                                        fahdbadamasi320@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                                <div className="w-11 h-11 rounded-2xl glass-card border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-md shadow-primary/10">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase font-mono tracking-widest text-white/40">Phone</div>
                                    <div className="text-sm font-semibold">0704 996 3476</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                                <div className="w-11 h-11 rounded-2xl glass-card border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-md shadow-primary/10">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase font-mono tracking-widest text-white/40">Location</div>
                                    <div className="text-sm font-semibold">Kaduna State, Nigeria</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Form */}
                    <div className="md:col-span-6">
                        <div className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden border border-white/15 bg-background/80 shadow-2xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                            <p className="text-xs text-white/50 mb-6">Fill out the form below to initiate an email conversation directly.</p>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                                    const body = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                                    window.location.href = `mailto:fahdbadamasi320@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`;
                                }}
                                className="space-y-5 relative"
                            >
                                <div>
                                    <label className="block text-xs font-semibold text-white/60 mb-2 font-mono uppercase tracking-wider">Your Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="e.g. Alex Johnson"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-white/60 mb-2 font-mono uppercase tracking-wider">Email Address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="alex@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-white/60 mb-2 font-mono uppercase tracking-wider">Message</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Hi Fahd, I'd like to discuss a project..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98] cursor-pointer"
                                >
                                    Submit Message
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
