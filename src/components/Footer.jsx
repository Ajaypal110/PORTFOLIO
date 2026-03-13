import { motion } from 'framer-motion';
import { navLinks, hero } from '../data/content';
import { Heart } from 'lucide-react';

export default function Footer() {
  const handleClick = (href) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Brand Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleClick('#home'); }}
            className="text-2xl font-bold tracking-tighter text-[var(--text-primary)] mb-8"
            whileHover={{ scale: 1.02 }}
          >
            AJAYPAL<span className="text-[var(--color-primary)]">.</span>
          </motion.a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mb-16">
            {hero.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 p-2"
                aria-label={s.label}
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="w-full pt-8 border-t border-[var(--border-color)] flex flex-col items-center gap-6">
            <p className="text-xs font-medium text-[var(--text-secondary)] text-center">
              © {new Date().getFullYear()} Ajaypal Singh. Crafted with <Heart size={12} className="inline-block text-red-500/60 mx-1" /> from India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
