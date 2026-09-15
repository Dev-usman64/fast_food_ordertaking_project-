import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/menuData';

export const WhatsAppFloatingButton: React.FC = () => {
  const { generateWhatsAppUrl } = useCart();
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-2 relative bg-[#0a0a0a]/95 border border-white/10 backdrop-blur-xl text-white px-3.5 py-2.5 rounded-2xl shadow-2xl max-w-xs text-xs flex items-center gap-2"
          >
            <span className="text-gray-300">💬 Need help or custom party deal? Chat with us!</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-gray-400 hover:text-white p-0.5 rounded-full cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#0a0a0a] border-r border-b border-white/10 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        id="floating-whatsapp-btn"
        href={generateWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-500 text-white flex items-center justify-center shadow-[0_4px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_30px_rgba(16,185,129,0.6)] transition-shadow"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white" />

        {/* Outer pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        {/* Live indicator dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-black rounded-full" />
      </motion.a>
    </div>
  );
};
