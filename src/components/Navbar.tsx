import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, ShoppingBag, Menu as MenuIcon, X, Phone, Clock, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/menuData';

export const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen, generateWhatsAppUrl } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Special Deals', href: '#deals' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#0a0a0a] border-b border-white/10 text-xs py-1.5 px-4 sm:px-10 text-gray-400 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-gray-300">
              <span className="inline-block w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
              Kitchen Open Now
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="hidden sm:flex items-center gap-1 text-gray-400">
              <Clock className="w-3.5 h-3.5 text-[#f59e0b]" />
              12:00 PM – 03:00 AM
            </span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="hidden md:inline text-gray-400">
              Free Delivery on orders above <span className="text-[#f59e0b] font-semibold">PKR 2,500</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              id="topbar-whatsapp-direct"
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#f59e0b] hover:text-amber-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Orders: <span className="text-white">{RESTAURANT_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 border-b border-white/10 ${
          scrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-2xl py-3.5'
            : 'bg-[#0a0a0a]/85 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#f59e0b] to-[#f97316] rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-black fill-black" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black tracking-tighter text-white">
                SIZZLE<span className="text-[#f59e0b]">BITE</span>
              </span>
              <span className="block text-[9px] tracking-[0.2em] uppercase font-bold text-gray-400 -mt-1">
                PREMIUM FAST FOOD
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-gray-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#f59e0b]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Direct WhatsApp Call/Chat Button */}
            <a
              id="nav-call-link"
              href={`tel:${RESTAURANT_INFO.whatsappNumber}`}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-gray-300 bg-white/5 border border-white/10 hover:border-[#f59e0b]/50 hover:text-white transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>Call Us</span>
            </a>

            {/* Cart Button with Live Counter Badge (Matching Immersive UI theme) */}
            <button
              id="nav-cart-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open shopping cart"
              className="relative flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-bold text-white transition-all active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span className="hidden xs:inline uppercase tracking-wider text-[11px]">Cart</span>

              {/* Dynamic Live Counter Badge */}
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    id="cart-badge-counter"
                    key={totalItems}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="w-5 h-5 bg-[#f59e0b] rounded-full text-[10px] text-black font-bold flex items-center justify-center border-2 border-[#0a0a0a]"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden px-6 py-5"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm font-semibold uppercase tracking-wider text-gray-300 hover:bg-white/5 hover:text-[#f59e0b] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  Order on WhatsApp: {RESTAURANT_INFO.displayPhone}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
