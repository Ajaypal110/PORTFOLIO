import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Clock, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { contact } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSending(true);
    setSending(true);
    
    // Construct mailto link
    const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    
    // Open default mail client
    window.location.href = mailtoLink;

    setSending(false);
    toast.success('Opening your email client...', {
      duration: 4000,
      style: {
        background: 'var(--bg-card)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-color)',
        backdropFilter: 'blur(12px)',
      },
    });
    setForm(initialForm);
    setErrors({});
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 glass ${
      errors[field]
        ? 'border-red-500/60 focus:border-red-500'
        : 'focus:border-[var(--color-primary)]'
    } text-[var(--text-primary)] placeholder-[var(--text-secondary)]`;

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'var(--color-primary)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
          <motion.p variants={fadeUp} className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-2">Get in touch</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-extrabold gradient-text">Contact Me</motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Info column */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.p variants={fadeUp} className="text-[var(--text-secondary)] leading-relaxed">
              Have a project in mind or need help with a bug? Feel free to reach out. I'm always excited to discuss new opportunities and challenges.
            </motion.p>

            {[
              { icon: Mail, label: 'Email', value: contact.email },
              { icon: MapPin, label: 'Location', value: contact.location },
              { icon: Clock, label: 'Status', value: contact.availability },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                custom={i + 1}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}>
                  <item.icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Availability badge */}
            <motion.div variants={fadeUp} custom={4} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-green-400">Available for freelance work</span>
            </motion.div>
          </motion.div>

          {/* Form column */}
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-3 glass rounded-2xl p-6 md:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <motion.div variants={fadeUp}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange('name')}
                  className={inputClass('name')}
                  id="contact-name"
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </motion.div>
              <motion.div variants={fadeUp} custom={1}>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange('email')}
                  className={inputClass('email')}
                  id="contact-email"
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </motion.div>
            </div>

            <motion.div variants={fadeUp} custom={2} className="mb-4">
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange('subject')}
                className={inputClass('subject')}
                id="contact-subject"
              />
              {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
            </motion.div>

            <motion.div variants={fadeUp} custom={3} className="mb-6">
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange('message')}
                className={`${inputClass('message')} resize-none`}
                id="contact-message"
              />
              {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
            </motion.div>

            <motion.button
              variants={fadeUp}
              custom={4}
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/25 disabled:opacity-60 cursor-pointer"
              style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
            >
              {sending ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
