import { motion } from 'framer-motion';
import { skillCategories } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'var(--color-accent)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
          <motion.p variants={fadeUp} className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-2">What I work with</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-extrabold gradient-text">Skills & Technologies</motion.h2>
        </motion.div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={ci}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 md:p-8 transition-all duration-300 glow-hover"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${cat.color}20`, color: cat.color }}>
                  <cat.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">{cat.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-[var(--text-primary)]">{skill.name}</span>
                      <span className="text-[var(--text-secondary)]">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--border-color)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: si * 0.08, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}aa)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
