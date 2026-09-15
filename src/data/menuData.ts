import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // --- BURGERS ---
  {
    id: 'b-1',
    name: 'Classic Crispy Zinger Burger',
    category: 'burgers',
    price: 650,
    description: 'Crispy fried chicken breast fillet coated in signature hot seasoning, iceberg lettuce & garlic mayo on a toasted brioche bun.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 384,
    isSpicy: true,
    isPopular: true,
    badge: 'Chef Choice',
    preparationTime: '12-15 min'
  },
  {
    id: 'b-2',
    name: 'Double Smash Beef Cheeseburger',
    category: 'burgers',
    price: 950,
    description: 'Two smashed 100% prime beef patties, double melted cheddar, caramelized onions, dill pickles and smoky house relish sauce.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 290,
    isPopular: true,
    badge: 'Best Seller',
    preparationTime: '15-18 min'
  },
  {
    id: 'b-3',
    name: 'Smoky BBQ Bacon Beef Stack',
    category: 'burgers',
    price: 1050,
    description: 'Thick grilled beef patty with crispy turkey bacon, smoked gouda cheese, crispy onion straws, and Texas hickory BBQ glaze.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 178,
    badge: 'Trending',
    preparationTime: '15 min'
  },
  {
    id: 'b-4',
    name: 'Firehouse Jalapeno Inferno Burger',
    category: 'burgers',
    price: 780,
    description: 'Fiery spiced fried chicken, pickled jalapenos, ghost pepper cheese slice, spicy sriracha sauce, and crushed nacho chips crunch.',
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewsCount: 142,
    isSpicy: true,
    preparationTime: '12-15 min'
  },
  {
    id: 'b-5',
    name: 'Mushroom Truffle Swiss Burger',
    category: 'burgers',
    price: 1100,
    description: 'Charbroiled beef patty smothered in sautéed buttery wild portobello mushrooms, real Swiss cheese and roasted garlic truffle aioli.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 215,
    badge: 'Gourmet',
    preparationTime: '16 min'
  },

  // --- PIZZAS ---
  {
    id: 'p-1',
    name: 'Pepperoni Feast Supreme',
    category: 'pizzas',
    price: 1350,
    originalPrice: 1500,
    description: 'Loaded with double layers of Italian beef pepperoni, whole milk mozzarella, rich marinara sauce on hand-stretched sourdough crust.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 420,
    isPopular: true,
    badge: 'Popular',
    preparationTime: '18-22 min'
  },
  {
    id: 'p-2',
    name: 'Smoky BBQ Chicken Tikka Pizza',
    category: 'pizzas',
    price: 1290,
    description: 'Charcoal-grilled tender spiced chicken tikka chunks, red onions, bell peppers, fresh coriander, mozzarella and smoky BBQ drizzle.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 310,
    isSpicy: true,
    badge: 'Local Favorite',
    preparationTime: '18-20 min'
  },
  {
    id: 'p-3',
    name: 'Creamy Fajita Cheesy Sensation',
    category: 'pizzas',
    price: 1390,
    description: 'Fajita chicken strips, sweet corn, black olives, jalapenos, oregano and our secret silky white cheddar cream base.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewsCount: 195,
    preparationTime: '20 min'
  },
  {
    id: 'p-4',
    name: 'Four Cheese Crown Margherita',
    category: 'pizzas',
    price: 1190,
    description: 'Pure blend of Mozzarella, Parmesan, Cheddar, and creamy Ricotta with sun-ripened San Marzano tomatoes and sweet basil leaves.',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 160,
    preparationTime: '15-18 min'
  },

  // --- FRIES ---
  {
    id: 'f-1',
    name: 'Cheesy Beast Loaded Fries',
    category: 'fries',
    price: 600,
    description: 'Golden crispy skin-on fries drowned in warm melted cheddar cheese, minced beef bits, diced jalapenos and house dynamite dressing.',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 512,
    isPopular: true,
    badge: 'Must Try',
    preparationTime: '10 min'
  },
  {
    id: 'f-2',
    name: 'Peri-Peri Crinkle Cut Fries',
    category: 'fries',
    price: 380,
    description: 'Crispy crinkle fries tossed in authentic Portuguese peri-peri seasoning with garlic dipping aioli.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviewsCount: 184,
    isSpicy: true,
    preparationTime: '8 min'
  },
  {
    id: 'f-3',
    name: 'Truffle & Parmesan Seasoned Fries',
    category: 'fries',
    price: 520,
    description: 'Gourmet shoe-string fries infused with aromatic white truffle oil, shaved aged parmesan cheese, and fresh Italian parsley.',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 220,
    badge: 'Gourmet',
    preparationTime: '10 min'
  },
  {
    id: 'f-4',
    name: 'Golden Crispy Onion Rings (8 Pcs)',
    category: 'fries',
    price: 450,
    description: 'Whole sweet onion slices in crunchy seasoned beer batter crumb, fried to golden perfection with honey mustard dip.',
    image: 'https://images.unsplash.com/photo-1639024471285-0afc3830f708?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewsCount: 130,
    preparationTime: '8-10 min'
  },

  // --- DRINKS ---
  {
    id: 'd-1',
    name: 'Oreo Madness Thick Milkshake',
    category: 'drinks',
    price: 480,
    description: 'Rich premium vanilla ice cream churned with crushed chocolate Oreo cookies, whipped cream and Hershey chocolate drizzle.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 340,
    isPopular: true,
    badge: 'Sweet Hit',
    preparationTime: '5-7 min'
  },
  {
    id: 'd-2',
    name: 'Fresh Mint Margarita Cooler',
    category: 'drinks',
    price: 350,
    description: 'Super refreshing blended drink made with crushed fresh garden mint, tangy Persian lime juice, rock salt and sparkling soda.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 210,
    preparationTime: '5 min'
  },
  {
    id: 'd-3',
    name: 'Chilled Cola Can (330ml)',
    category: 'drinks',
    price: 150,
    description: 'Ice-cold carbonated beverage served with ice cup and fresh lemon slice.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 190,
    preparationTime: '2 min'
  },
  {
    id: 'd-4',
    name: 'Iced Peach Passion Breeze Tea',
    category: 'drinks',
    price: 320,
    description: 'Slow-brewed black Ceylon tea infused with real ripe peach purée, served frosty with mint sprig.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewsCount: 95,
    preparationTime: '4 min'
  },

  // --- DEALS ---
  {
    id: 'deal-1',
    name: 'Midnight Hunger Combo Deal',
    category: 'deals',
    price: 999,
    originalPrice: 1250,
    description: '1x Crispy Zinger Burger + 1x Crispy Regular Fries + 1x Chilled Soft Drink Can + 1x Garlic Mayo Dip.',
    image: 'https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 680,
    isDeal: true,
    isPopular: true,
    badge: 'Save 20%',
    preparationTime: '15 min'
  },
  {
    id: 'deal-2',
    name: 'Duo Crave Feast (For 2)',
    category: 'deals',
    price: 1799,
    originalPrice: 2200,
    description: '2x Double Smash Cheeseburgers OR Zingers + 1x Large Loaded Cheesy Fries + 2x Chilled Soft Drink Cans.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 430,
    isDeal: true,
    badge: 'Best Value',
    preparationTime: '18 min'
  },
  {
    id: 'deal-3',
    name: 'Mega Family Pizza & Burger Platter',
    category: 'deals',
    price: 2999,
    originalPrice: 3800,
    description: '1x Large Pepperoni or Tikka Pizza + 2x Classic Zinger Burgers + 1x Huge Animal Style Loaded Fries + 1x 1.5 Litre Chilled Coke.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    reviewsCount: 310,
    isDeal: true,
    badge: 'Mega Saver',
    preparationTime: '22-25 min'
  }
];

export const RESTAURANT_INFO = {
  name: 'SizzleBite Fast Food',
  tagline: 'Flame-Grilled, Deep-Fried & Always Sizzling',
  whatsappNumber: '923262859331',
  displayPhone: '+92 326 2859331',
  address: 'Shop #14, Food Street, Gulberg III, Lahore, Pakistan',
  openingHours: 'Monday – Sunday: 12:00 PM – 03:00 AM',
  deliveryTime: '25 - 35 mins',
  freeDeliveryThreshold: 2500,
  deliveryFee: 150,
  googleMapsUrl: 'https://maps.google.com',
  rating: 4.9,
  totalReviews: '3,800+'
};
