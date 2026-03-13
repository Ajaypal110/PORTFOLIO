import { motion } from 'framer-motion';
import { ArrowDown, Download, Send } from 'lucide-react';
import { hero } from '../data/content';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: 'easeOut' } 
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)] pt-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
        >
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold text-[var(--color-primary)] tracking-[0.2em] uppercase mb-4">
              {hero.greeting}
            </p>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.1] tracking-tight text-[var(--text-primary)]">
              {hero.name}
            </h1>

            <div className="mt-4 flex items-center justify-center lg:justify-start gap-3 text-xl font-medium text-[var(--text-secondary)]">
              <span>{hero.title}</span>
              <span className="w-1 h-1 rounded-full bg-[var(--border-color)]" />
              <span className="text-[var(--text-primary)]">{hero.highlight}</span>
            </div>

            <p className="mt-8 text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {hero.bio}
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-transition inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 shadow-sm"
              >
                View Projects
                <ArrowDown size={18} />
              </a>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-transition inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
              >
                <Send size={18} />
                Contact
              </a>

              <a
                href={hero.resumeUrl}
                download
                className="btn-transition inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            {/* Social icons */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
              {hero.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-transition w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)]"
                  aria-label={s.label}
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile image placeholder */}
          <div className="flex-shrink-0">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center">
              <span className="text-8xl font-bold text-[var(--text-secondary)] opacity-20">AS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
