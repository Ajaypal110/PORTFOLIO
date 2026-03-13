import { Target, Lightbulb, Code2 } from 'lucide-react';
import { about } from '../data/content';

export default function About() {
  const cards = [
    { icon: Code2, title: 'My Journey', text: about.journey },
    { icon: Target, title: 'Career Objective', text: about.objective },
    { icon: Lightbulb, title: 'Problem Solving', text: about.problemSolving },
  ];

  return (
    <section id="about" className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16 fade-in">
          <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-[0.2em] mb-3">Foundation</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">Personal Narrative</h2>
        </div>
 
        {/* Summary */}
        <p className="max-w-3xl mx-auto text-center text-[var(--text-secondary)] text-lg leading-relaxed mb-16 fade-in">
          {about.summary}
        </p>
 
        {/* Detail cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="card-hover bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-3xl p-8 lg:p-10"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--color-primary)]">
                <card.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{card.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
