export type MenuCategory = 'all' | 'burgers' | 'pizzas' | 'drinks' | 'fries' | 'deals';

export interface MenuItem {
  id: string;
  name: string;
  category: 'burgers' | 'pizzas' | 'drinks' | 'fries' | 'deals';
  price: number; // in PKR
  originalPrice?: number; // for discount strikethrough in deals
  description: string;
  image: string;
  rating: number;
  reviewsCount: number;
  isSpicy?: boolean;
  isPopular?: boolean;
  isDeal?: boolean;
  preparationTime?: string;
  badge?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedOption?: string;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  notes: string;
  paymentMethod?: 'Cash on Delivery' | 'Online Banking / Digital Wallet';
}
