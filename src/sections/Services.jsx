import { motion } from 'framer-motion';
import { services } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'var(--color-primary)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
          <motion.p variants={fadeUp} className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-2">What I offer</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-extrabold gradient-text">My Services</motion.h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-6 md:p-8 transition-all duration-300 glow-hover group relative overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.05), rgba(168,85,247,0.05))' }} />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}>
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">{service.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
