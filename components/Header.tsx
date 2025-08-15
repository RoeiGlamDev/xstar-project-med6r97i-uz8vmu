import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  // You can add any props if needed later
}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <motion.div 
              className="text-2xl font-extrabold text-orange-600 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              luxury LRP cosmetics
            </motion.h1>
          </div>
          <div className="hidden md:block">
            <nav className="flex space-x-4">
              <motion.div 
                href="#home" 
                className="text-gray-800 hover:text-orange-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Home
              </motion.a>
              <motion.div 
                href="#about" 
                className="text-gray-800 hover:text-orange-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                About Us
              </motion.a>
              <motion.div 
                href="#products" 
                className="text-gray-800 hover:text-orange-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Products
              </motion.a>
              <motion.div 
                href="#contact" 
                className="text-gray-800 hover:text-orange-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Contact
              </motion.a>
            </nav>
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-800 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      <motion.div 
        className={md:hidden ${isMenuOpen ? 'block' : 'hidden'}} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: isMenuOpen ? 1 : 0 }} 
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col space-y-2 bg-white p-4">
          <motion.div 
            href="#home" 
            className="text-gray-800 hover:text-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.a>
          <motion.div 
            href="#about" 
            className="text-gray-800 hover:text-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div 
            href="#products" 
            className="text-gray-800 hover:text-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.div 
            href="#contact" 
            className="text-gray-800 hover:text-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;