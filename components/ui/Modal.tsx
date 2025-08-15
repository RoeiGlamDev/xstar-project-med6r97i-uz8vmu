import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-orange-500 mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{content}</p>
        <button
          onClick={onClose}
          className="bg-orange-500 text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;