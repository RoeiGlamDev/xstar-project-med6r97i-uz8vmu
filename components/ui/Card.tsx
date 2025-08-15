import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h2 className="text-orange-500 text-2xl font-bold mt-4">{title}</h2>
      <p className="text-white text-lg mt-2">{description}</p>
      <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-orange-600">
        Shop Now
      </button>
    </motion.div>
  );
};

export default Card;