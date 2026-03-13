import { motion } from 'framer-motion';
import { ArrowDown, Download, Send } from 'lucide-react';
import { hero } from '../data/content';
import ParticlesBackground from '../components/ParticlesBackground';

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Particles */}
      <ParticlesBackground />

      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'var(--color-primary)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'var(--color-secondary)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p variants={itemVariants} className="text-sm md:text-base font-medium text-[var(--color-primary)] tracking-widest uppercase mb-2">
              {hero.greeting}
            </motion.p>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="gradient-text">{hero.name}</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-3 flex items-center justify-center lg:justify-start gap-2 text-lg md:text-xl font-medium text-[var(--text-secondary)]">
              <span>{hero.title}</span>
              <span className="text-[var(--color-primary)]">|</span>
              <span className="text-[var(--color-secondary)]">{hero.highlight}</span>
            </motion.div>

            <motion.p variants={itemVariants} className="mt-6 text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {hero.bio}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
                style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
              >
                View Projects
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold glass glow-hover transition-all duration-300 text-[var(--text-primary)]"
              >
                <Send size={16} />
                Contact Me
              </a>

              <a
                href={hero.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--color-primary)] transition-all duration-300"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={itemVariants} className="mt-8 flex items-center justify-center lg:justify-start gap-3">
              {hero.socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  aria-label={s.label}
                >
                  <s.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile image placeholder */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full opacity-60"
                style={{
                  background: 'conic-gradient(from 0deg, var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary))',
                }}
              />
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden glass flex items-center justify-center"
                style={{ background: 'var(--bg-card)' }}>
                <span className="text-6xl md:text-7xl font-bold gradient-text">AS</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[var(--text-secondary)] flex justify-center pt-2 opacity-40">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'var(--color-primary)' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
