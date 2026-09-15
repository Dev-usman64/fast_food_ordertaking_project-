import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag, Star, Clock, Flame, Check } from 'lucide-react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ item, onClose }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!item) return null;

  const handleAdd = () => {
    addToCart(item, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
      setIsCartOpen(true);
    }, 500);
  };

  const totalPrice = item.price * quantity;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-[#0a0a0a]/95 border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 text-left backdrop-blur-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-2xl bg-white/10 backdrop-blur-md text-gray-300 hover:text-white flex items-center justify-center border border-white/10 hover:bg-white/20 transition-all cursor-pointer"
            aria-label="Close product view"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Image Header */}
          <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#111]">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {item.badge && (
                <span className="px-3 py-1 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-black text-[10px] font-black uppercase tracking-wider shadow-lg">
                  {item.badge}
                </span>
              )}
              {item.isSpicy && (
                <span className="px-2.5 py-1 rounded-xl bg-red-600/90 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-white" /> Spicy
                </span>
              )}
            </div>

            {/* Time & Rating */}
            <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-gray-200">
                <Star className="w-3.5 h-3.5 text-[#f59e0b] fill-[#f59e0b]" />
                <span className="font-bold text-[#f59e0b]">{item.rating}</span>
                <span className="text-gray-400">({item.reviewsCount}+)</span>
              </div>

              {item.preparationTime && (
                <div className="flex items-center gap-1 px-3 py-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-gray-300 font-mono text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>Prep: {item.preparationTime}</span>
                </div>
              )}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2 leading-tight">
              {item.name}
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {item.description}
            </p>

            {/* Quantity Selector & Live Total Price */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
              <div>
                <span className="text-[10px] text-gray-400 block uppercase tracking-widest font-bold">Quantity</span>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    className="w-9 h-9 rounded-xl bg-white/10 text-gray-200 hover:bg-white/20 disabled:opacity-40 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-bold text-white w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-black hover:opacity-90 flex items-center justify-center font-bold transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-gray-400 block uppercase tracking-widest font-bold">Total</span>
                <div className="text-2xl font-black text-[#f59e0b] mt-1">
                  PKR {totalPrice}
                </div>
              </div>
            </div>

            {/* Add to Cart CTA */}
            <button
              onClick={handleAdd}
              disabled={addedAnimation}
              className={`w-full py-4 rounded-2xl font-black uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all shadow-xl cursor-pointer ${
                addedAnimation
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-[#f59e0b] to-[#f97316] hover:from-amber-400 hover:to-orange-400 text-black shadow-orange-500/20 active:scale-95'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-5 h-5 stroke-[2.5]" />
                  <span>Added to Order!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
                  <span>Add {quantity} to Cart • PKR {totalPrice}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
