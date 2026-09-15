import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem, CustomerDetails } from '../types';
import { RESTAURANT_INFO } from '../data/menuData';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  getItemQuantity: (itemId: string) => number;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  totalItems: number;
  subtotal: number;
  deliveryFee: number;
  freeDeliveryThreshold: number;
  totalAmount: number;
  customerDetails: CustomerDetails;
  setCustomerDetails: React.Dispatch<React.SetStateAction<CustomerDetails>>;
  formatWhatsAppMessage: () => string;
  generateWhatsAppUrl: () => string;
  whatsappNumber: string;
  setWhatsappNumber: (num: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_CART_KEY = 'sizzlebite_cart_v1';
const LOCAL_STORAGE_CUSTOMER_KEY = 'sizzlebite_customer_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState(RESTAURANT_INFO.whatsappNumber);

  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_CUSTOMER_KEY);
      return saved
        ? JSON.parse(saved)
        : {
            name: '',
            phone: '',
            address: '',
            notes: '',
            paymentMethod: 'Cash on Delivery',
          };
    } catch {
      return {
        name: '',
        phone: '',
        address: '',
        notes: '',
        paymentMethod: 'Cash on Delivery',
      };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_CUSTOMER_KEY, JSON.stringify(customerDetails));
    } catch {
      // ignore
    }
  }, [customerDetails]);

  const addToCart = (item: MenuItem, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + quantity } : ci
        );
      }
      return [...prev, { item, quantity }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const getItemQuantity = (itemId: string): number => {
    const found = cart.find((ci) => ci.item.id === itemId);
    return found ? found.quantity : 0;
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, ci) => acc + ci.quantity, 0);

  const subtotal = cart.reduce((acc, ci) => acc + ci.item.price * ci.quantity, 0);

  const freeDeliveryThreshold = RESTAURANT_INFO.freeDeliveryThreshold;
  const deliveryFee = subtotal === 0 || subtotal >= freeDeliveryThreshold ? 0 : RESTAURANT_INFO.deliveryFee;

  const totalAmount = subtotal + deliveryFee;

  // Formatted WhatsApp text exactly as specified in the prompt requirement
  const formatWhatsAppMessage = (): string => {
    const customerName = customerDetails.name.trim() || '[Name]';
    const phone = customerDetails.phone.trim() || '[Phone]';
    const address = customerDetails.address.trim() || '[Address]';
    const notes = customerDetails.notes.trim() || 'None';

    const orderItemsText = cart
      .map((ci, index) => {
        const itemTotal = ci.item.price * ci.quantity;
        return `${index + 1}. ${ci.item.name} - Qty: ${ci.quantity} - Price: PKR ${itemTotal}`;
      })
      .join('\n');

    const deliveryNote = deliveryFee > 0 ? `\n🛵 *Delivery Fee:* PKR ${deliveryFee}` : '\n🛵 *Delivery Fee:* FREE';
    const paymentNote = customerDetails.paymentMethod ? `\n💳 *Payment Method:* ${customerDetails.paymentMethod}` : '';

    return `🍔 *NEW ONLINE ORDER* 🍔
--------------------------------
👤 *Customer Name:* ${customerName}
📞 *Phone:* ${phone}
📍 *Delivery Address:* ${address}
📝 *Notes:* ${notes}${paymentNote}

🛒 *ORDER DETAILS:*
${orderItemsText}${deliveryNote}

--------------------------------
💰 *TOTAL AMOUNT:* PKR ${totalAmount}
--------------------------------
Please confirm my order!`;
  };

  const generateWhatsAppUrl = (): string => {
    const rawNumber = whatsappNumber.replace(/[^\d]/g, '');
    const message = formatWhatsAppMessage();
    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getItemQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        deliveryFee,
        freeDeliveryThreshold,
        totalAmount,
        customerDetails,
        setCustomerDetails,
        formatWhatsAppMessage,
        generateWhatsAppUrl,
        whatsappNumber,
        setWhatsappNumber,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
