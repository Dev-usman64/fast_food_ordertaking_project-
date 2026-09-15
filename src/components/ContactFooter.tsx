import React from 'react';
import {
  Flame,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  ArrowUp,
  Heart,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { useCart } from '../context/CartContext';

export const ContactFooter: React.FC = () => {
  const { generateWhatsAppUrl, setIsCartOpen } = useCart();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/10 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#f59e0b] to-[#f97316] flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Flame className="w-6 h-6 text-black fill-black" />
              </div>
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#f97316]">
                SIZZLEBITE
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Lahore's premier fast-food hotspot for smashed beef patties, sizzling golden zingers, loaded cheese fries, and artisanal pizzas. Direct WhatsApp orders delivered hot in 30 minutes!
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-[#f59e0b] hover:bg-white/10 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-[#f59e0b] hover:bg-white/10 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-[#f59e0b] hover:bg-white/10 flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#f59e0b]" />
              <span>Opening Hours</span>
            </h3>

            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-gray-300">Monday – Thursday:</span>
                <span className="font-semibold text-[#f59e0b]">12:00 PM – 02:00 AM</span>
              </li>
              <li className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-gray-300">Friday – Saturday:</span>
                <span className="font-semibold text-[#f59e0b]">12:00 PM – 03:30 AM</span>
              </li>
              <li className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-gray-300">Sunday:</span>
                <span className="font-semibold text-[#f59e0b]">01:00 PM – 02:30 AM</span>
              </li>
              <li className="pt-2">
                <span className="inline-block px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs">
                  ⚡ Late Night Deliveries Available!
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Menu Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Burgers & Pizzas</a>
              </li>
              <li>
                <a href="#deals" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Family Deals</a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-[#f59e0b] transition-colors">Customer Reviews</a>
              </li>
              <li>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="text-[#f59e0b] hover:text-amber-300 font-bold cursor-pointer"
                >
                  View Cart & Checkout
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Store Address */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#f59e0b]" />
              <span>Visit & Order</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </p>

              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gray-500 shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.whatsappNumber}`} className="text-gray-200 hover:text-[#f59e0b]">
                  {RESTAURANT_INFO.displayPhone}
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-medium"
                >
                  Direct WhatsApp Hotline
                </a>
              </p>

              <div className="pt-2">
                <a
                  id="google-maps-directions-link"
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-[#f59e0b] hover:border-white/20 transition-colors"
                >
                  📍 Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SizzleBite Fast Food. All rights reserved.</p>

          <p className="flex items-center gap-1 text-gray-400">
            Crafted for pure flavor & instant WhatsApp online orders
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
