import React from 'react';
import { motion } from 'motion/react';
import { Flame, Sparkles, ShoppingBag, Plus, Tag, ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { useCart } from '../context/CartContext';

export const DealsSection: React.FC = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const deals = MENU_ITEMS.filter((item) => item.category === 'deals');

  return (
    <section id="deals" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-y border-white/10 scroll-mt-20 relative">
      {/* Glow accent */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 w-fit px-4 py-1.5 rounded-full border border-white/10 mb-3">
              <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-300">Limited-Time Combos</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">
              SUPER SAVER <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#f97316]">DEALS & COMBOS</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Get the best value for friends, family, and late-night cravings. Packed with zingers, pizzas, loaded fries & ice-cold drinks.
            </p>
          </div>

          <a
            href="#menu"
            className="hidden md:inline-flex items-center gap-2 text-[#f59e0b] hover:text-amber-300 font-bold text-xs uppercase tracking-widest"
          >
            <span>View All Items</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={deal.id}
              className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden p-5 flex flex-col justify-between shadow-xl group hover:bg-white/10 transition-colors"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-black text-[10px] font-black uppercase tracking-wider shadow-lg">
                {deal.badge || 'Hot Deal'}
              </div>

              <div>
                <div className="relative h-44 rounded-2xl overflow-hidden mb-4 bg-[#111] border border-white/5">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-semibold text-[#f59e0b] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Includes Fries & Drink</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-[#f59e0b] transition-colors leading-tight">
                  {deal.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {deal.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[#f59e0b]">
                      PKR {deal.price}
                    </span>
                    {deal.originalPrice && (
                      <span className="text-xs text-gray-500 line-through">
                        PKR {deal.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold block">
                    Save PKR {(deal.originalPrice || deal.price) - deal.price}
                  </span>
                </div>

                <button
                  id={`deal-order-btn-${deal.id}`}
                  onClick={() => {
                    addToCart(deal, 1);
                    setIsCartOpen(true);
                  }}
                  className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#f59e0b] to-[#f97316] hover:from-amber-400 hover:to-orange-400 text-black font-black uppercase tracking-wider text-xs flex items-center gap-1.5 shadow-md shadow-orange-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Grab Deal</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
