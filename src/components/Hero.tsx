import React from 'react';
import { motion } from 'motion/react';
import { Flame, ArrowRight, ShoppingBag, Star, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/menuData';

export const Hero: React.FC = () => {
  const { setIsCartOpen } = useCart();

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#f59e0b]/15 to-[#f97316]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-10 left-10 w-72 h-72 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#f97316]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Headlines & High-Converting CTA */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Immersive UI status pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 w-fit px-4 py-1.5 rounded-full border border-white/10 mb-6"
          >
            <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-300">Open Now • Free Delivery</span>
          </motion.div>

          {/* Main Hero Headline with Immersive UI Gradients */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tighter text-white uppercase mb-6"
          >
            CRAFTING{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#f97316]">
              PREMIUM
            </span>
            <br />
            FAST FOOD
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal mb-8"
          >
            Indulge in our signature double-smashed beef burgers, ultra-crispy golden zingers, and loaded fries, crafted with 100% fresh ingredients and golden-standard spices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <a
              id="hero-explore-menu-btn"
              href="#menu"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-black font-black uppercase tracking-widest text-sm rounded-2xl shadow-xl shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2.5"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Explore Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              id="hero-order-now-btn"
              onClick={() => setIsCartOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <ShoppingBag className="w-4 h-4 text-[#f59e0b]" />
              <span>Quick Order (WhatsApp)</span>
            </button>
          </motion.div>

          {/* Highlights Mini Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 pt-6 border-t border-white/10 text-left"
          >
            <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
              <div className="p-2 rounded-lg bg-[#f59e0b]/15 text-[#f59e0b]">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">30-Min</p>
                <p className="text-[10px] text-gray-400">Express Courier</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
              <div className="p-2 rounded-lg bg-[#f59e0b]/15 text-[#f59e0b]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">100% Halal</p>
                <p className="text-[10px] text-gray-400">Fresh Daily Cuts</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
              <div className="p-2 rounded-lg bg-[#f59e0b]/15 text-[#f59e0b]">
                <Star className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">4.9 / 5.0</p>
                <p className="text-[10px] text-gray-400">3,800+ Foodies</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Floating Burger Visual & Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          {/* Circular frame decorative backdrop */}
          <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px]">
            {/* Animated outer glowing ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-dashed border-[#f59e0b]/20"
            />
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#f59e0b]/15 via-[#f97316]/10 to-transparent blur-2xl" />

            {/* Main Interactive Floating Burger Hero Visual */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.03 }}
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-[#111] border border-white/10 group"
            >
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85"
                alt="Signature Sizzle Zinger Burger"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 text-left pointer-events-none">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#f59e0b] text-black text-[10px] font-black uppercase tracking-wider mb-1.5">
                  Today's Signature
                </span>
                <p className="text-lg font-bold text-white leading-tight">Double Gold Zinger Tower</p>
                <p className="text-xs text-[#f59e0b] font-semibold">PKR 650 • Loaded with Jalapeno Ranch</p>
              </div>
            </motion.div>

            {/* Dynamic Badge Tag 1: Top Right "100% Fresh & Hot" */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-4 -right-2 sm:-right-6 bg-[#0d0d0d]/90 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-2xl shadow-2xl flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b]">
                <Flame className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
              </div>
              <div className="text-left">
                <p className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Quality First</p>
                <p className="text-xs font-black text-white">100% Fresh & Hot</p>
              </div>
            </motion.div>

            {/* Dynamic Badge Tag 2: Bottom Left "30-Min Fast Delivery" */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-2 sm:-left-6 bg-[#0d0d0d]/90 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-2xl shadow-2xl flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b] font-bold">
                ⚡
              </div>
              <div className="text-left">
                <p className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Express Courier</p>
                <p className="text-xs font-black text-white">30-Min Fast Delivery</p>
              </div>
            </motion.div>

            {/* Dynamic Badge Tag 3: Center Left Reviews */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex absolute top-1/2 -left-8 -translate-y-1/2 bg-[#0d0d0d]/95 backdrop-blur-md border border-white/10 px-3 py-2 rounded-xl shadow-2xl items-center gap-2"
            >
              <div className="flex text-[#f59e0b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-white">4.9 Star Rating</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
