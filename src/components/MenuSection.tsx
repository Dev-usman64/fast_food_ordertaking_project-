import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Plus, Minus, Star, Search, Clock, Sparkles, Filter } from 'lucide-react';
import { MenuCategory, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { ProductModal } from './ProductModal';

export const MenuSection: React.FC = () => {
  const { addToCart, updateQuantity, getItemQuantity, setIsCartOpen } = useCart();
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [filterSpicyOnly, setFilterSpicyOnly] = useState(false);
  const [filterPopularOnly, setFilterPopularOnly] = useState(false);

  const categories: { id: MenuCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'All Items', icon: '🍽️' },
    { id: 'burgers', label: 'Burgers', icon: '🍔' },
    { id: 'pizzas', label: 'Pizzas', icon: '🍕' },
    { id: 'fries', label: 'Fries & Sides', icon: '🍟' },
    { id: 'drinks', label: 'Drinks & Shakes', icon: '🥤' },
    { id: 'deals', label: 'Special Deals', icon: '🔥' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSpicy = filterSpicyOnly ? item.isSpicy : true;
      const matchesPopular = filterPopularOnly ? item.isPopular : true;

      return matchesCategory && matchesSearch && matchesSpicy && matchesPopular;
    });
  }, [activeCategory, searchQuery, filterSpicyOnly, filterPopularOnly]);

  return (
    <section
      id="menu"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative scroll-mt-20"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 w-fit px-4 py-1.5 rounded-full border border-white/10 mb-3">
            <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-300">Fast Food Selection</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase">
            EXPLORE OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#f97316]">HOT CRAVINGS</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Handcrafted with 100% fresh halal chicken and prime beef. Choose multiple items, customize your order,
            and checkout directly via WhatsApp in seconds!
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="menu-search-input"
              type="text"
              placeholder="Search burgers, pizzas, loaded fries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#f59e0b] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Filter Badges */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setFilterSpicyOnly(!filterSpicyOnly)}
              className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap border ${
                filterSpicyOnly
                  ? 'bg-red-950/80 border-red-500 text-white shadow-md shadow-red-500/20'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Flame className="w-3.5 h-3.5 fill-red-500 text-red-500" />
              <span>Spicy Only</span>
            </button>

            <button
              onClick={() => setFilterPopularOnly(!filterPopularOnly)}
              className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap border ${
                filterPopularOnly
                  ? 'bg-[#f59e0b] border-[#f59e0b] text-black shadow-md shadow-orange-500/20'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Best Sellers</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-3 mb-10 border-b border-white/10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? 'bg-[#f59e0b] border-[#f59e0b] text-black shadow-lg shadow-orange-500/20'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-sm">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-gray-400 text-base mb-3">No delicious items match your search or filter.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setFilterSpicyOnly(false);
                setFilterPopularOnly(false);
              }}
              className="px-6 py-2.5 rounded-full bg-[#f59e0b] text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const inCartQty = getItemQuantity(item.id);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={item.id}
                  id={`product-card-${item.id}`}
                  className="bg-white/5 border border-white/10 rounded-3xl p-4 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 shadow-xl group"
                >
                  {/* Card Image Area with overlay badges */}
                  <div
                    onClick={() => setSelectedProduct(item)}
                    className="relative h-48 sm:h-52 w-full overflow-hidden cursor-pointer rounded-2xl bg-[#111] border border-white/5 mb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Tag Badges */}
                    <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 z-10">
                      {item.badge && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#f59e0b] text-black text-[10px] font-black uppercase tracking-wider shadow">
                          {item.badge}
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="px-2.5 py-0.5 rounded-full bg-red-600/90 text-white text-[10px] font-bold flex items-center gap-1 shadow">
                          <Flame className="w-3 h-3 fill-white" /> Spicy
                        </span>
                      )}
                    </div>

                    {/* Rating & Prep Time Badge */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px]">
                      <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 text-[#f59e0b] font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-[#f59e0b] text-[#f59e0b]" />
                        {item.rating} ({item.reviewsCount})
                      </span>
                      {item.preparationTime && (
                        <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 text-gray-300 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#f59e0b]" />
                          {item.preparationTime}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        onClick={() => setSelectedProduct(item)}
                        className="text-base sm:text-lg font-bold text-white group-hover:text-[#f59e0b] transition-colors cursor-pointer leading-tight tracking-tight"
                      >
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Price and Add/Quantity Controller Bar */}
                    <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between gap-3">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg sm:text-xl font-black text-[#f59e0b]">
                            PKR {item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-xs text-gray-500 line-through">
                              PKR {item.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Multi-Item Selection Quantity Control */}
                      {inCartQty > 0 ? (
                        <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-xl p-1 shadow-sm">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label={`Decrease quantity of ${item.name}`}
                            className="w-7 h-7 rounded-lg bg-white/5 text-gray-200 hover:bg-white/10 flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-xs font-black text-[#f59e0b]">
                            {inCartQty}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label={`Increase quantity of ${item.name}`}
                            className="w-7 h-7 rounded-lg bg-[#f59e0b] text-black hover:bg-amber-400 flex items-center justify-center transition-colors font-black"
                          >
                            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                          </button>
                        </div>
                      ) : (
                        <button
                          id={`add-to-cart-btn-${item.id}`}
                          onClick={() => addToCart(item, 1)}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-black font-black uppercase tracking-wider text-xs flex items-center gap-1.5 shadow-md shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Add</span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
