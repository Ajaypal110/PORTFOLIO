import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket, Code2 } from 'lucide-react';
import { about } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function About() {
  const cards = [
    { icon: Code2, title: 'My Journey', text: about.journey },
    { icon: Target, title: 'Career Objective', text: about.objective },
    { icon: Lightbulb, title: 'Problem Solving', text: about.problemSolving },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      {/* decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'var(--color-secondary)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
          <motion.p variants={fadeUp} className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-2">Get to know me</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-extrabold gradient-text">{about.headline}</motion.h2>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp} custom={2}
          className="max-w-3xl mx-auto text-center text-[var(--text-secondary)] text-lg leading-relaxed mb-16"
        >
          {about.summary}
        </motion.p>

        {/* Detail cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 md:p-8 transition-all duration-300 glow-hover"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}>
                <card.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{card.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
