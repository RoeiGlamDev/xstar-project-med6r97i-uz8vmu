import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-orange-300 h-screen flex items-center justify-center">
      <motion.div
        className="text-center p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-orange-600">
          Welcome to luxury LRP cosmetics
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Discover the epitome of elegance with our premium range of cosmetics,
          crafted to enhance your natural beauty and elevate your self-care
          routine.
        </p>
        <div className="mt-6 flex justify-center">
          <motion.div
            href="#shop"
            className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            Shop Now
          </motion.a>
          <motion.div
            href="#about"
            className="bg-white text-orange-600 font-semibold py-3 px-6 rounded-lg shadow-lg ml-4 transform transition-transform duration-200 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            Learn More
          </motion.a>
        </div>
      </motion.div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-500">
          Trusted by beauty enthusiasts worldwide
        </p>
        <div className="flex justify-center mt-2">
          <img src="/path/to/trust-icon1.png" alt="Trust Icon 1" className="h-8 mx-2" />
          <img src="/path/to/trust-icon2.png" alt="Trust Icon 2" className="h-8 mx-2" />
          <img src="/path/to/trust-icon3.png" alt="Trust Icon 3" className="h-8 mx-2" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;