import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  MessageSquare,
  Copy,
  Check,
  AlertCircle,
  Sparkles,
  Phone,
  User,
  MapPin,
  FileText,
  Truck,
  Settings,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/menuData';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    deliveryFee,
    freeDeliveryThreshold,
    totalAmount,
    totalItems,
    customerDetails,
    setCustomerDetails,
    formatWhatsAppMessage,
    generateWhatsAppUrl,
    whatsappNumber,
    setWhatsappNumber,
  } = useCart();

  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showNumberConfig, setShowNumberConfig] = useState(false);
  const [tempNumber, setTempNumber] = useState(whatsappNumber);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; address?: string }>({});

  const freeDeliveryRemaining = Math.max(0, freeDeliveryThreshold - subtotal);
  const freeDeliveryProgress = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  const validateForm = () => {
    const errs: { name?: string; phone?: string; address?: string } = {};
    if (!customerDetails.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!customerDetails.phone.trim()) {
      errs.phone = 'Please provide your WhatsApp/Phone number.';
    } else if (customerDetails.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!customerDetails.address.trim()) {
      errs.address = 'Please provide complete delivery address.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    if (!validateForm()) {
      // Scroll to form fields
      const formEl = document.getElementById('checkout-form-container');
      if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const url = generateWhatsAppUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyOrder = () => {
    const message = formatWhatsAppMessage();
    navigator.clipboard.writeText(message).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSaveCustomNumber = () => {
    const cleaned = tempNumber.replace(/[^\d]/g, '');
    if (cleaned.length >= 7) {
      setWhatsappNumber(cleaned);
      setShowNumberConfig(false);
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Slide-over Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#0d0d0d] border-l border-white/10 shadow-2xl flex flex-col h-full z-10 text-white"
          >
            {/* Drawer Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 bg-[#0d0d0d] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/15 text-[#f59e0b] flex items-center justify-center font-bold">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight uppercase text-white">
                    YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#f97316]">CART</span>
                  </h2>
                  <p className="text-xs text-gray-400">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="px-3 py-1.5 text-xs text-gray-400 hover:text-red-400 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={() => setIsCartOpen(false)}
                  aria-label="Close cart drawer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Free Delivery Tracker Bar */}
            <div className="px-6 py-3 bg-white/5 border-b border-white/10">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="flex items-center gap-1.5 text-gray-300 font-medium">
                  <Truck className="w-3.5 h-3.5 text-[#f59e0b]" />
                  {freeDeliveryRemaining === 0 ? (
                    <span className="text-emerald-400 font-bold">🎉 FREE Delivery unlocked!</span>
                  ) : (
                    <span>
                      Add <strong className="text-[#f59e0b]">PKR {freeDeliveryRemaining}</strong> more for FREE Delivery
                    </span>
                  )}
                </span>
                <span className="text-[10px] text-gray-500 font-mono">PKR {freeDeliveryThreshold}</span>
              </div>
              <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#f59e0b] to-[#f97316] rounded-full transition-all duration-300"
                  style={{ width: `${freeDeliveryProgress}%` }}
                />
              </div>
            </div>

            {/* Scrollable Cart Content Area */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center py-16 px-4">
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 mb-4">
                    <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Your cart is empty</h3>
                  <p className="text-gray-400 text-xs sm:text-sm max-w-xs mx-auto mb-6 leading-relaxed">
                    Add juicy flame-grilled burgers, loaded fries or pizza combos to begin your WhatsApp order!
                  </p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      const el = document.getElementById('menu');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-black font-black uppercase tracking-wider text-xs hover:scale-105 transition-all shadow-md shadow-orange-500/20"
                  >
                    Browse Delicious Menu
                  </button>
                </div>
              ) : (
                <>
                  {/* Selected Cart Items List */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                      Selected Items ({cart.length})
                    </span>

                    {cart.map((cartItem) => {
                      const { item, quantity } = cartItem;
                      const rowTotal = item.price * quantity;

                      return (
                        <div
                          key={item.id}
                          className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 hover:bg-white/10 transition-colors"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            referrerPolicy="no-referrer"
                            className="w-16 h-16 rounded-xl object-cover flex-shrink-0 bg-[#111] border border-white/5"
                          />

                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-white truncate leading-tight">
                              {item.name}
                            </h4>
                            <p className="text-xs text-[#f59e0b] font-semibold mt-0.5">
                              PKR {item.price} each
                            </p>
                            <p className="text-[11px] text-gray-400 font-bold mt-1">
                              Row: <span className="text-white font-bold">PKR {rowTotal}</span>
                            </p>
                          </div>

                          {/* Multi-Item Quantity Controls (+ / -) */}
                          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-xl p-1">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              aria-label="Decrease quantity"
                              className="w-6 h-6 rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 flex items-center justify-center transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-5 text-center text-xs font-black text-[#f59e0b]">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              aria-label="Increase quantity"
                              className="w-6 h-6 rounded-lg bg-[#f59e0b] hover:bg-amber-400 text-black flex items-center justify-center transition-colors font-black"
                            >
                              <Plus className="w-3 h-3 stroke-[2.5]" />
                            </button>
                          </div>

                          {/* Remove button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            aria-label="Remove item"
                            className="text-gray-500 hover:text-red-400 p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Customer Details Form */}
                  <div
                    id="checkout-form-container"
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#f59e0b]" />
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                          Delivery Information
                        </h3>
                      </div>
                      <span className="text-[10px] text-[#f59e0b] font-semibold">Required for WhatsApp</span>
                    </div>

                    {/* Customer Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">
                        Your Full Name <span className="text-[#f59e0b]">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="customer-name-input"
                          type="text"
                          placeholder="e.g. Usman Rajpoot"
                          value={customerDetails.name}
                          onChange={(e) => {
                            setCustomerDetails((prev) => ({ ...prev, name: e.target.value }));
                            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                          }}
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/40 border text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f59e0b] transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'
                            }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">
                        WhatsApp / Phone Number <span className="text-[#f59e0b]">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="customer-phone-input"
                          type="tel"
                          placeholder="e.g. 0326 2859331"
                          value={customerDetails.phone}
                          onChange={(e) => {
                            setCustomerDetails((prev) => ({ ...prev, phone: e.target.value }));
                            if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                          }}
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/40 border text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f59e0b] transition-colors ${errors.phone ? 'border-red-500' : 'border-white/10'
                            }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Delivery Address */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">
                        Complete Delivery Address <span className="text-[#f59e0b]">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                        <textarea
                          id="customer-address-input"
                          rows={2}
                          placeholder="House / Apartment #, Street, Block, Nearby landmark"
                          value={customerDetails.address}
                          onChange={(e) => {
                            setCustomerDetails((prev) => ({ ...prev, address: e.target.value }));
                            if (errors.address) setErrors((prev) => ({ ...prev, address: undefined }));
                          }}
                          className={`w-full pl-9 pr-3 py-2 rounded-xl bg-black/40 border text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f59e0b] transition-colors resize-none ${errors.address ? 'border-red-500' : 'border-white/10'
                            }`}
                        />
                      </div>
                      {errors.address && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.address}
                        </p>
                      )}
                    </div>

                    {/* Special Notes / Instructions */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">
                        Special Instructions / Notes <span className="text-gray-500">(Optional)</span>
                      </label>
                      <div className="relative">
                        <FileText className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="customer-notes-input"
                          type="text"
                          placeholder="e.g. Extra garlic mayo, less spicy, call before arrival"
                          value={customerDetails.notes}
                          onChange={(e) =>
                            setCustomerDetails((prev) => ({ ...prev, notes: e.target.value }))
                          }
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f59e0b] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Payment Mode Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Payment Method
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setCustomerDetails((prev) => ({ ...prev, paymentMethod: 'Cash on Delivery' }))
                          }
                          className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-left flex items-center justify-between ${customerDetails.paymentMethod === 'Cash on Delivery'
                            ? 'bg-[#f59e0b]/20 border-[#f59e0b] text-[#f59e0b]'
                            : 'bg-black/40 border-white/10 text-gray-400 hover:text-white'
                            }`}
                        >
                          <span>💵 Cash on Delivery</span>
                          {customerDetails.paymentMethod === 'Cash on Delivery' && (
                            <Check className="w-3.5 h-3.5 text-[#f59e0b]" />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            setCustomerDetails((prev) => ({
                              ...prev,
                              paymentMethod: 'Online Banking / Digital Wallet',
                            }))
                          }
                          className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-left flex items-center justify-between ${customerDetails.paymentMethod === 'Online Banking / Digital Wallet'
                            ? 'bg-[#f59e0b]/20 border-[#f59e0b] text-[#f59e0b]'
                            : 'bg-black/40 border-white/10 text-gray-400 hover:text-white'
                            }`}
                        >
                          <span>📱 Bank / JazzCash</span>
                          {customerDetails.paymentMethod === 'Online Banking / Digital Wallet' && (
                            <Check className="w-3.5 h-3.5 text-[#f59e0b]" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Formatted Message Preview Toggle */}
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs">
                    <button
                      type="button"
                      onClick={() => setShowPreview(!showPreview)}
                      className="w-full flex items-center justify-between text-gray-400 hover:text-[#f59e0b] font-semibold"
                    >
                      <span className="flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#f59e0b]" />
                        {showPreview ? 'Hide WhatsApp Text Preview' : '👁️ View Formatted WhatsApp Message Preview'}
                      </span>
                      <span className="text-[10px] uppercase font-mono">{showPreview ? '▲' : '▼'}</span>
                    </button>

                    {showPreview && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <pre className="font-mono text-[11px] text-gray-300 whitespace-pre-wrap bg-black/60 p-3 rounded-xl border border-white/10 max-h-48 overflow-y-auto leading-relaxed">
                          {formatWhatsAppMessage()}
                        </pre>
                        <div className="mt-2 flex justify-end">
                          <button
                            onClick={handleCopyOrder}
                            className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-medium flex items-center gap-1"
                          >
                            {copied ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy Text</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Sticky Drawer Footer with Bill Calculation & WhatsApp Checkout Button */}
            {cart.length > 0 && (
              <div className="p-5 sm:p-6 border-t border-white/10 bg-[#0d0d0d] shadow-2xl">
                {/* Bill Breakdown */}
                <div className="space-y-2 text-xs text-gray-400 mb-4">
                  <div className="flex justify-between">
                    <span>Items Subtotal:</span>
                    <span className="font-bold text-white">PKR {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1">
                      Delivery Fee:
                      {deliveryFee === 0 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                          FREE
                        </span>
                      )}
                    </span>
                    <span className="font-bold text-white">
                      {deliveryFee === 0 ? 'PKR 0' : `PKR ${deliveryFee}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-black text-white pt-2 border-t border-white/10">
                    <span>Total Bill:</span>
                    <span className="text-[#f59e0b] text-xl font-black">PKR {totalAmount}</span>
                  </div>
                </div>

                {/* Primary Automated WhatsApp Button matching Immersive UI */}
                <button
                  id="confirm-whatsapp-order-btn"
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#f59e0b] to-[#f97316] hover:from-amber-400 hover:to-orange-400 text-black font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  <MessageSquare className="w-5 h-5 fill-black text-black" />
                  <span>Confirm Order via WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Quick Helper Subtext & Copy Order button */}
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-gray-400 px-1">
                  <span>To: +{whatsappNumber}</span>
                  <button
                    onClick={handleCopyOrder}
                    className="hover:text-[#f59e0b] flex items-center gap-1 transition-colors"
                  >
                    {copied ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Copied to clipboard
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Copy className="w-3 h-3" /> Copy Order Text
                      </span>
                    )}
                  </button>
                </div>

                {/* Optional WhatsApp Number Switcher Tooltip for Testing */}
                <div className="mt-2 text-center">
                  <button
                    onClick={() => setShowNumberConfig(!showNumberConfig)}
                    className="text-[10px] text-gray-500 hover:text-gray-300 underline"
                  >
                    Change WhatsApp target number for testing
                  </button>

                  {showNumberConfig && (
                    <div className="mt-2 p-3 rounded-xl bg-white/5 border border-white/10 text-left">
                      <p className="text-[11px] text-gray-400 mb-1">
                        Enter WhatsApp phone (international digits, e.g. 923262859331):
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={tempNumber}
                          onChange={(e) => setTempNumber(e.target.value)}
                          className="flex-1 px-2.5 py-1 text-xs bg-black/60 border border-white/10 rounded-lg text-white"
                        />
                        <button
                          onClick={handleSaveCustomNumber}
                          className="px-3 py-1 text-xs font-bold bg-[#f59e0b] text-black rounded-lg"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
