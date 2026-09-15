import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, UtensilsCrossed } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 10;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-6"
        >
          {/* Subtle Background Glow */}
          <div className="absolute w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Pulsing Brand Logo / Flame Icon */}
          <div className="relative mb-6">
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#f59e0b] to-[#f97316] flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.35)] border border-white/20"
            >
              <div className="flex items-center justify-center relative">
                <Flame className="w-12 h-12 text-black fill-black" />
                <UtensilsCrossed className="w-6 h-6 text-black/70 absolute -bottom-1 -right-1" />
              </div>
            </motion.div>

            {/* Ripple rings */}
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-0 rounded-3xl border border-[#f59e0b]/40"
            />
          </div>

          {/* Restaurant Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h1 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#f97316]">
              SIZZLEBITE
            </h1>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold mt-1.5">
              Fresh • Flame Grilled • Fast Delivery
            </p>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-64 max-w-full mt-8">
            <div className="flex justify-between items-center text-xs font-mono text-gray-400 mb-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping inline-block" />
                Firing up the grill...
              </span>
              <span className="text-[#f59e0b] font-bold">{progress}%</span>
            </div>

            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/10 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#f59e0b] to-[#f97316] rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: 'linear' }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
