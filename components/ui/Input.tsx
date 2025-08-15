import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  validationMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, required = false, validationMessage }) => {const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (required && e.target.value.trim() === '') {
      setIsValid(false);} else {
      setIsValid(true);
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="text-orange-600 font-bold mb-1">{label}</label>
      <motion.div
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className={p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
          isValid ? 'border-gray-300' : 'border-red-500'
        } bg-white shadow-lg hover:shadow-xl}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      />
      {!isValid && <span className="text-red-500 text-sm mt-1">{validationMessage || 'This field is required.'}</span>}
    </div>
  );
};

export default Input;