import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="flex justify-center items-center p-6"
    >
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">
          Welcome to luxury LRP cosmetics
        </h2>
        <p className="text-gray-700 text-lg">
          Discover our exquisite range of high-end cosmetics, designed for those who appreciate the finer things in life. 
          Our products embody elegance and sophistication, perfect for elevating your beauty routine.
        </p>
        <button className="mt-6 bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
          Shop Now
        </button>
      </div>
      {children}
    </motion.div>
  );
};

export default FadeIn;