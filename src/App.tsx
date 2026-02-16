import { useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { TechStack } from './sections/TechStack';
import { Contact } from './sections/Contact';
import { initScrollProgress } from './utils/animations';
import { CustomCursor } from './components/CustomCursor';

function App() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      initScrollProgress(progressRef.current);
    }
  }, []);

  return (
    <div className="relative min-h-screen custom-scrollbar selection:bg-primary/30">
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 w-full h-1 bg-primary z-[60] origin-left scale-x-0"
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <footer className="py-12 text-center text-sm text-white/20 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>&copy; {new Date().getFullYear()} Elite Portfolio. Designed for excellence.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
