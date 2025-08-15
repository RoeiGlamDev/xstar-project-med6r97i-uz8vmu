import { Color, Brand } from './types';

/
 * Constants and configuration for the luxury LRP cosmetics application.
 * This file contains brand-specific constants, including colors and configurations
 * tailored for a high-end cosmetics brand experience.
 * 
 * @module constants
 */

/ Brand name for the luxury cosmetics line */
export const BRAND_NAME: Brand = "luxury LRP cosmetics";

/ Primary colors used throughout the luxury LRP cosmetics website */
export const COLORS: Record<string, Color> = {
    primary: "#FFA500", // orange
    secondary: "#FFFFFF", // white
};

/ Configuration settings for the luxury LRP cosmetics website */
export const CONFIG = {
    websiteTitle: ${BRAND_NAME} - Elevate Your Beauty,
    tagline: "Indulge in the luxury of premium cosmetics crafted for elegance.",
    footerText: © ${new Date().getFullYear()} ${BRAND_NAME}. All rights reserved.,
    heroSection: {
        heading: "Discover the Essence of Luxury",
        subheading: "Experience beauty like never before with our exclusive range of cosmetics.",
        buttonText: "Shop Now",
        buttonLink: "/shop",
    },
    productCategories: [
        { name: "Face", link: "/shop/face" },
        { name: "Eyes", link: "/shop/eyes" },
        { name: "Lips", link: "/shop/lips" },
        { name: "Skincare", link: "/shop/skincare" },
    ],
};

/ Types and interfaces for luxury LRP cosmetics */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    luxuryEffect: boolean; // Indicates if the product has a luxury 3D effect
}

export interface Category {
    name: string;
    link: string;
}

/ Sample product data for demonstration */
export const SAMPLE_PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Radiant Glow Foundation",
        description: "A luxurious foundation that offers a radiant finish and long-lasting wear.",
        price: 59.99,
        category: "Face",
        imageUrl: "/images/radiant-glow-foundation.jpg",
        luxuryEffect: true,
    },
    {
        id: "2",
        name: "Silken Matte Lipstick",
        description: "Experience the richness of our silken matte lipstick that glides effortlessly.",
        price: 39.99,
        category: "Lips",
        imageUrl: "/images/silken-matte-lipstick.jpg",
        luxuryEffect: false,
    },
    {
        id: "3",
        name: "Crystal Clear Eye Shadow Palette",
        description: "A palette of opulent shades designed for the modern luxury lover.",
        price: 49.99,
        category: "Eyes",
        imageUrl: "/images/crystal-clear-palette.jpg",
        luxuryEffect: true,
    },
];