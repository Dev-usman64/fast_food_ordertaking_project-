import React from 'react';
import { motion } from 'motion/react';
import { Flame, ShieldCheck, Clock, Award, Sparkles, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Flame,
      title: 'Flame-Seared Perfection',
      description:
        'We never microwave or reheat. Every single burger patty and chicken fillet is grilled fresh-to-order on intense cast-iron flat tops.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: ShieldCheck,
      title: '100% Halal & Fresh Daily',
      description:
        'Certified 100% Halal prime meat sourced daily from licensed local farms. Zero frozen fillers, zero artificial tenderizers.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Clock,
      title: '30-Min Fast Delivery',
      description:
        'Thermal insulated insulated delivery bags ensure your burgers stay sizzling hot and your loaded fries stay irresistibly crispy.',
      color: 'from-yellow-400 to-amber-600',
    },
    {
      icon: Award,
      title: 'Signature Secret Sauces',
      description:
        'Crafted in-house by our executive chef: Garlic Truffle Mayo, Firehouse Ghost Relish, and Smoky Texas Hickory BBQ sauce.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white/5 w-fit px-4 py-1.5 rounded-full border border-white/10 mb-3">
            <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-300">The SizzleBite Standard</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            WHY FOOD LOVERS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#f97316]">CHOOSE US</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-lg mx-auto leading-relaxed">
            No compromises on flavor, freshness, or speed. Here is what makes our burgers and pizzas stand out.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#f59e0b]/15 border border-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b] font-bold mb-5 shadow-lg">
                    <Icon className="w-6 h-6 stroke-[2.5]" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-[#f59e0b] font-bold">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Quality Assured</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
