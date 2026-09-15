/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { DealsSection } from './components/DealsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerReviews } from './components/CustomerReviews';
import { ContactFooter } from './components/ContactFooter';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <CartProvider>
      {/* Animated Dark Preloader Screen with Gold Progress Bar */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col selection:bg-[#f59e0b] selection:text-black relative overflow-x-hidden font-sans">
        {/* Immersive UI ambient glowing gradient spheres */}
        <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="fixed bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-[#f97316]/10 to-transparent rounded-full blur-[80px] pointer-events-none z-0" />

        {/* Sticky Dynamic Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow relative z-10">
          {/* High-Converting Hero Section */}
          <Hero />

          {/* Interactive Fast Food Menu with Category Filters & Multi-Item Selection */}
          <MenuSection />

          {/* Super Saver Deals & Combos */}
          <DealsSection />

          {/* Why Choose Us: Fresh Halal Meat & 30-Min Fast Delivery */}
          <WhyChooseUs />

          {/* Customer Reviews & Social Proof */}
          <CustomerReviews />
        </main>

        {/* Comprehensive Store Footer & Hours */}
        <ContactFooter />

        {/* Slide-over Cart Drawer & WhatsApp Checkout */}
        <CartDrawer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppFloatingButton />
      </div>
    </CartProvider>
  );
}
