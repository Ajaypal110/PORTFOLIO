import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center transition-colors duration-300"
      style={{ background: 'var(--bg-primary)' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.8 }}
      onAnimationComplete={onComplete}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center border border-[var(--border-color)] bg-[var(--bg-secondary)]"
        >
          <span className="text-[var(--color-primary)] text-3xl font-bold tracking-tighter">A</span>
        </motion.div>
 
        {/* Loading bar */}
        <div className="w-40 h-[2px] rounded-full overflow-hidden bg-[var(--border-color)]">
          <motion.div
            className="h-full rounded-full bg-[var(--color-primary)]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
 
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-[var(--text-secondary)] tracking-[0.3em] uppercase font-bold"
        >
          Loading…
        </motion.p>
      </div>
    </motion.div>
  );
}
