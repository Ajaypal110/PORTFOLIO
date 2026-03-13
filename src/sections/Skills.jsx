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
 
              {/* Icon Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-3 group">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-all duration-300">
                      <skill.icon size={28} />
                    </div>
                    <span className="text-xs font-bold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors text-center">
                      {skill.name}
                    </span>
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
