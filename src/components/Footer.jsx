import { motion } from 'framer-motion';
import { navLinks, hero } from '../data/content';
import { Heart } from 'lucide-react';

export default function Footer() {
  const handleClick = (href) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[var(--border-color)]" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="text-xl font-bold gradient-text">&lt;Ajaypal /&gt;</a>
            <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs">
              Full Stack Developer specializing in MERN Stack. Building modern web applications that make an impact.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3">
              {hero.socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-10 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-secondary)]">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Ajaypal Singh. Built with <Heart size={12} className="text-red-500" /> and React.
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
