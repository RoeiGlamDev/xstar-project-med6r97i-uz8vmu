import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
    title: string;
    description: string;
    icon: JSX.Element;
}

const features: Feature[] = [
    {
        title: 'Premium Ingredients',
        description: 'Our cosmetics are formulated with the finest ingredients to ensure luxury and effectiveness.',
        icon: <i className="fas fa-leaf text-orange-500"></i>,
    },
    {
        title: 'Elegant Packaging',
        description: 'Experience the allure of our beautifully designed packaging that reflects our luxury brand.',
        icon: <i className="fas fa-gift text-orange-500"></i>,
    },
    {
        title: 'Cruelty-Free',
        description: 'Luxury LRP cosmetics is committed to ethical beauty. Our products are never tested on animals.',
        icon: <i className="fas fa-paw text-orange-500"></i>,
    },
];

const HomePage: React.FC = () => {
    return (
        <div className="bg-white text-gray-800">
            <header className="relative bg-orange-500 h-screen flex items-center justify-center">
                <motion.div
                    className="text-5xl font-bold text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome to Luxury LRP Cosmetics
                </motion.h1>
            </header>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-semibold text-center text-orange-500 mb-10">
                        Discover Our Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="text-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-orange-500">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <footer className="bg-orange-500 text-white py-4 text-center">
                <p>&copy; {new Date().getFullYear()} Luxury LRP Cosmetics. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;