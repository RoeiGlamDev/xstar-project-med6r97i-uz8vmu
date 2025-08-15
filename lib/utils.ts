import { format } from 'date-fns';

/
 * Utility functions for luxury LRP cosmetics application.
 * This file contains functions and interfaces specific to the luxury cosmetics industry.
 * @module utils
 */

/
 * Interface representing a product in the luxury LRP cosmetics catalog.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    stock: number;
}

/
 * Interface representing a customer in the luxury LRP cosmetics application.
 */
export interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
}

/
 * Formats a currency value into a string with a luxury appeal.
 * @param value - The numeric value to format.
 * @returns A formatted string representing the currency.
 */
export function formatCurrency(value: number): string {
    return €${value.toFixed(2).replace('.', ',')};
}

/
 * Function to create a unique identifier for products.
 * This function generates a unique string that can be used as an ID.
 * @returns A unique identifier string.
 */
export function generateUniqueId(): string {
    return 'prod_' + Math.random().toString(36).substr(2, 9);
}

/
 * Formats the product description for luxury LRP cosmetics.
 * Enhances the description to include luxury terminology.
 * @param product - The product object to format.
 * @returns A string representing the enhanced product description.
 */
export function formatProductDescription(product: Product): string {
    return ${product.name} - A luxurious addition to your beauty collection. ${product.description};
}

/
 * Function to check product availability and return a luxury message.
 * @param product - The product object to check.
 * @returns A string indicating the product availability.
 */
export function checkProductAvailability(product: Product): string {
    if (product.stock > 0) {
        return Indulge in the luxury of ${product.name}, available now!;
    } else {
        return Unfortunately, ${product.name} is currently out of stock.;
    }
}

/
 * Formats the current date in a luxury-friendly manner.
 * @returns A string representing the current date in a luxurious format.
 */
export function formatDate(): string {
    return format(new Date(), 'MMMM d, yyyy');
}

/
 * Utility function to concatenate product attributes for display.
 * @param product - The product object with attributes to concatenate.
 * @returns A string of concatenated product attributes.
 */
export function cnFunction(product: Product): string {
    return ${product.name} | ${formatCurrency(product.price)} | ${product.category};
}