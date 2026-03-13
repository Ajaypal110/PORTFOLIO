import { services } from '../data/content';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 fade-in">
          <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-[0.2em] mb-3">Service Offerings</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">Professional Expertise</h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-3xl p-8 lg:p-10 flex flex-col group transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--color-primary)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">{service.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
