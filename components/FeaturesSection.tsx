import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Premium Formulations',
    description: 'Experience the elegance of luxury LRP cosmetics with our exclusive range of premium skincare and makeup products, meticulously crafted for radiant beauty.',
    icon: <i className="fas fa-gem text-orange-500"></i>,
  },
  {
    title: 'Elegant Packaging',
    description: 'Our products come in exquisite packaging that reflects the luxurious quality of luxury LRP cosmetics, making every unboxing a delightful experience.',
    icon: <i className="fas fa-box-open text-orange-500"></i>,
  },
  {
    title: 'Cruelty-Free & Eco-Friendly',
    description: 'We believe in beauty without compromise. All our products are cruelty-free and made with eco-friendly ingredients, ensuring you look good and feel good.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Exclusive Collections',
    description: 'Discover our limited edition collections that embody the essence of luxury LRP cosmetics, designed for the discerning individual who appreciates the finer things in life.',
    icon: <i className="fas fa-star text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-4xl font-bold text-center mb-10 text-orange-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the Luxury of luxury LRP cosmetics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-500">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;