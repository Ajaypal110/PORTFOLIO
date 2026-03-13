import { motion } from 'framer-motion';
import { skillCategories } from '../data/content';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16 fade-in">
          <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-[0.2em] mb-3">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">Technical Arsenal</h2>
        </div>
 
        {/* Identity Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((cat, ci) => (
            <div 
              key={cat.title}
              className="card-hover bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-3xl p-8 lg:p-10"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--color-primary)]">
                  <cat.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">{cat.title}</h3>
              </div>
 
              {/* Enhanced Skills List */}
              <div className="space-y-6">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span className="text-[var(--text-primary)]">{skill.name}</span>
                      <span className="text-[var(--text-secondary)] opacity-60">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-[var(--color-primary)] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
