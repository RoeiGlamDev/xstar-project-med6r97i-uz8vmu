import { Product } from './product';
import { User } from './user';

/
 * Represents a review for a product in luxury LRP cosmetics.
 */
export interface Review {
  id: string; // Unique identifier for the review
  productId: string; // The ID of the product being reviewed
  userId: string; // The ID of the user who made the review
  rating: number; // Rating given to the product (1 to 5)
  comment: string; // Optional comment about the product
  createdAt: Date; // Date the review was created
}

/
 * Represents a shopping cart for luxury LRP cosmetics.
 */
export interface ShoppingCart {
  id: string; // Unique identifier for the cart
  userId: string; // The ID of the user who owns the cart
  items: CartItem[]; // List of items in the cart
}

/
 * Represents an item in the shopping cart.
 */
export interface CartItem {
  product: Product; // The product being added to the cart
  quantity: number; // Quantity of the product
}

/
 * Represents a luxury LRP cosmetics product.
 */
export interface LuxuryLRPProduct extends Product {
  id: string; // Unique identifier for the product
  name: string; // Name of the product
  description: string; // Detailed description of the product
  price: number; // Price of the product
  imageUrl: string; // URL of the product image
  ingredients: string[]; // List of ingredients used in the product
  category: string; // Category of the product (e.g., skincare, makeup)
  isFeatured: boolean; // Whether the product is featured
}

/
 * Represents the state of an order in luxury LRP cosmetics.
 */
export interface Order {
  id: string; // Unique identifier for the order
  userId: string; // The ID of the user who placed the order
  items: CartItem[]; // List of items in the order
  totalAmount: number; // Total amount for the order
  orderDate: Date; // Date the order was placed
  status: 'pending' | 'shipped' | 'delivered' | 'canceled'; // Current status of the order
}

/
 * Represents the user profile for luxury LRP cosmetics customers.
 */
export interface LuxuryLRPUser extends User {
  id: string; // Unique identifier for the user
  firstName: string; // First name of the user
  lastName: string; // Last name of the user
  email: string; // Email address of the user
  password: string; // User password (hashed)
  address: string; // Shipping address of the user
  createdAt: Date; // Date the user was created
}

/
 * Represents settings for the luxury LRP cosmetics application.
 */
export interface AppSettings {
  currency: string; // Currency used in the application (e.g., USD)
  language: string; // Language setting for the application
  themeColor: string; // Primary theme color (orange in this case)
}

/
 * Exports the interfaces for use in other parts of the application.
 */
export {
  Review,
  ShoppingCart,
  CartItem,
  LuxuryLRPProduct,
  Order,
  LuxuryLRPUser,
  AppSettings,
};