import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  / The placeholder for the email input field */
  emailPlaceholder?: string;
  / The text to display on the submit button */
  buttonText?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  emailPlaceholder = "Enter your email address",
  buttonText = "Subscribe Now"
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    setIsSubmitted(true);
  };

  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-semibold text-orange-500 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join the Luxury LRP Cosmetics Family
        </motion.h2>
        <motion.div
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Be the first to know about our exclusive products, offers, and beauty tips!
        </motion.p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center">
          <motion.div
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={emailPlaceholder}
            required
            className="border border-gray-300 rounded-lg p-3 mb-4 md:mb-0 md:mr-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
          />
          <motion.div
            type="submit"
            className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {buttonText}
          </motion.button>
        </form>
        {isSubmitted && (
          <motion.div
            className="mt-4 text-green-500"
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to Luxury LRP Cosmetics!
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;