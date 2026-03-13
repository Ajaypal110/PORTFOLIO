import { useState, useRef } from 'react';
import { Send, Mail, MapPin, Clock, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { contact } from '../data/content';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  // EmailJS Configuration - REPLACE PLACEHOLDERS
  const SERVICE_ID = 'Ajay@110125';
  const TEMPLATE_ID = 'template_50nhnb8'; 
  const PUBLIC_KEY = '0xjutl8DL6lunqORh';  

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

    try {
      // Direct Email Sending via EmailJS sendForm
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      toast.success('Message sent successfully!', {
        duration: 4000,
        style: {
          background: 'var(--bg-secondary)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-color)',
          borderRadius: '1rem',
        },
      });
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      console.error('EmailJS Error Detail:', error);
      toast.error(`Error: ${error.text || 'Failed to send'}. Check console.`);
    } finally {
      setSending(false);
    }
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const inputClass = (field) =>
    `w-full px-5 py-4 rounded-2xl text-sm outline-none transition-all duration-200 bg-[var(--bg-primary)] border ${
      errors[field]
        ? 'border-red-500/50 focus:border-red-500'
        : 'border-[var(--border-color)] focus:border-[var(--color-primary)] focus:shadow-sm'
    } text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50`;

  return (
    <section id="contact" className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16 fade-in">
          <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-[0.2em] mb-3">Connection</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">Initiate Inquiry</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Info Side */}
          <div className="lg:col-span-2 space-y-10 fade-in">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Seeking collaboration on high-impact projects or technical architectural guidance. My inbox is monitored for professional inquiries.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Standard Communication', value: contact.email },
                { icon: MapPin, label: 'Regional Presence', value: contact.location },
                { icon: Clock, label: 'Current Availability', value: contact.availability },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--color-primary)]">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-[var(--text-primary)] tracking-tight">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Status Indicator */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--bg-primary)] border border-[var(--border-color)]">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
              <span className="text-xs font-black uppercase tracking-widest text-[var(--text-primary)]">Ready for Engagement</span>
            </div>
          </div>

          {/* Inquiry Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-[2.5rem] p-8 lg:p-12 fade-in"
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Identity / Entity Name"
                  value={form.name}
                  onChange={handleChange('name')}
                  className={inputClass('name')}
                />
                {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase mt-2 ml-4">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Return Address / Email"
                  value={form.email}
                  onChange={handleChange('email')}
                  className={inputClass('email')}
                />
                {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase mt-2 ml-4">{errors.email}</p>}
              </div>
            </div>

            <div className="mb-6">
              <input
                type="text"
                name="subject"
                placeholder="Inquiry Subject"
                value={form.subject}
                onChange={handleChange('subject')}
                className={inputClass('subject')}
              />
              {errors.subject && <p className="text-[10px] text-red-500 font-bold uppercase mt-2 ml-4">{errors.subject}</p>}
            </div>

            <div className="mb-8">
              <textarea
                name="message"
                placeholder="Detailed Message Details"
                rows={6}
                value={form.message}
                onChange={handleChange('message')}
                className={`${inputClass('message')} resize-none`}
              />
              {errors.message && <p className="text-[10px] text-red-500 font-bold uppercase mt-2 ml-4">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto px-10 py-5 rounded-full font-black uppercase tracking-widest text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 transition-all duration-200 shadow-lg shadow-[var(--color-primary)]/20 disabled:opacity-50"
            >
              {sending ? (
                <span className="flex items-center gap-3">
                  <Loader2 size={20} className="animate-spin" />
                  Transmitting…
                </span>
              ) : (
                <span className="flex items-center gap-3">
                  Transmit Inquiry
                  <Send size={20} />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
