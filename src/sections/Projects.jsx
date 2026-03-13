import { useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { projects, projectCategories } from '../data/content';

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 fade-in">
          <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-[0.2em] mb-3">Showcase</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">Selected Works</h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 fade-in">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 border ${
                active === cat
                  ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-sm'
                  : 'bg-transparent border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="card-hover bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-3xl overflow-hidden group flex flex-col"
            >
              {/* Representational Image Area */}
              <div className="relative h-64 overflow-hidden bg-[var(--bg-primary)] border-b border-[var(--border-color)] flex items-center justify-center">
                <Folder size={64} className="text-[var(--text-secondary)] opacity-10 group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-transition inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:translate-x-1"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-transition inline-flex items-center gap-2 text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  >
                    View Code
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
