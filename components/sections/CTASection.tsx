import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="bg-white p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center">
      <motion.div
        className="text-4xl font-bold text-orange-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="text-lg text-gray-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <motion.div
        href={buttonLink}
        className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.a>
    </section>
  );
};

const CTA: React.FC = () => {
  return (
    <CTASection
      title="Elevate Your Beauty with luxury LRP cosmetics"
      description="Discover our exclusive range of luxury cosmetics crafted with the finest ingredients. Experience elegance and sophistication like never before."
      buttonText="Shop Now"
      buttonLink="/shop"
    />
  );
};

export default CTA;