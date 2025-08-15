import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, delay = 0 }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: delay, duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-orange-500">
          Welcome to luxury LRP cosmetics
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Indulge in our luxurious range of cosmetics designed to elevate your beauty.
        </p>
      </header>

      <SlideUp delay={0.2}>
        <section className="p-6 bg-orange-100 rounded-lg shadow-md max-w-2xl">
          <h2 className="text-3xl font-semibold text-orange-600">
            Discover Our Luxurious Products
          </h2>
          <p className="mt-3 text-gray-700">
            Each product is crafted with the finest ingredients to ensure quality and effectiveness. Experience the luxury of beauty with our exclusive collections.
          </p>
        </section>
      </SlideUp>

      <SlideUp delay={0.4}>
        <footer className="mt-10 text-center">
          <p className="text-gray-500">
            © 2023 luxury LRP cosmetics. All rights reserved.
          </p>
        </footer>
      </SlideUp>
    </div>
  );
};

export default LuxuryLRPCosmetics;