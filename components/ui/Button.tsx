import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition ease-in-out duration-300';
  const primaryStyles = 'bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300';
  const secondaryStyles = 'bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-300';

  const styles = variant === 'primary' ? ${baseStyles} ${primaryStyles} : ${baseStyles} ${secondaryStyles};

  return (
    <motion.div
      className="styles"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={Button for luxury LRP cosmetics: ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;