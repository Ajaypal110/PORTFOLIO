import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { projects, projectCategories } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'var(--color-primary)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-2">My work</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-extrabold gradient-text">Featured Projects</motion.h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp} custom={2}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                active === cat
                  ? 'text-white shadow-lg shadow-[var(--color-primary)]/25'
                  : 'glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              style={active === cat ? { background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' } : {}}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div layout className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl overflow-hidden transition-all duration-300 glow-hover group"
              >
                {/* Image placeholder */}
                <div className="relative h-48 overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--color-dark-700), var(--color-dark-600))' }}>
                  <Folder size={48} className="text-[var(--color-primary)] opacity-30 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium"
                        style={{ background: 'var(--color-primary)' + '15', color: 'var(--color-primary)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
                      style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium glass text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
