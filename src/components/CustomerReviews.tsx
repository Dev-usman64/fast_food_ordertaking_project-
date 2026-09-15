import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Hamza Tariq',
      location: 'Gulberg III, Lahore',
      rating: 5,
      comment:
        'Hands down the crispiest Zinger I have tasted in Lahore! The chicken was thick, juicy on the inside, and delivered in just 22 minutes steaming hot. WhatsApp ordering is super smooth.',
      order: 'Ordered: Midnight Hunger Deal',
      date: 'Yesterday',
    },
    {
      id: 2,
      name: 'Ayesha Malik',
      location: 'DHA Phase 5, Lahore',
      rating: 5,
      comment:
        'Their Cheesy Beast loaded fries are absolute fire! Smothered in genuine melted cheddar and jalapenos. The Double Smash Burger had that perfect crispy crust edges.',
      order: 'Ordered: Double Smash + Loaded Fries',
      date: '3 days ago',
    },
    {
      id: 3,
      name: 'Bilal Ahmed',
      location: 'Model Town, Lahore',
      rating: 5,
      comment:
        'Ordering on WhatsApp is a breeze. Just selected 3 items, pressed order, and their staff replied within 30 seconds to confirm. The Pepperoni Supreme Pizza is top tier sourdough crust.',
      order: 'Ordered: Pepperoni Feast Supreme',
      date: '1 week ago',
    },
  ];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white/5 w-fit px-4 py-1.5 rounded-full border border-white/10 mb-3">
            <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-300">Customer Love</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            REAL FOODIES, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#f97316]">REAL SIZZLE</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-lg mx-auto leading-relaxed">
            Over 3,800+ 5-star ratings across Lahore. Hear what our regular late-night burger enthusiasts say!
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative shadow-xl hover:bg-white/10 transition-colors"
            >
              <Quote className="w-8 h-8 text-[#f59e0b]/20 absolute top-5 right-5 pointer-events-none" />

              <div>
                {/* Stars */}
                <div className="flex text-[#f59e0b] gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-sm">{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-[11px] text-gray-500 font-mono">{rev.date}</span>
                </div>

                <p className="text-xs text-gray-400">{rev.location}</p>

                <div className="mt-2.5 inline-block px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-[11px] text-[#f59e0b] font-semibold">
                  {rev.order}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
