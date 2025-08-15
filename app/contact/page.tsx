import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white text-orange-600 min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="bg-orange-100 p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="border rounded-lg p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="border rounded-lg p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            className="border rounded-lg p-2 w-full"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-600 text-white font-bold py-2 px-4 rounded shadow hover:bg-orange-500 transition duration-300"
        >
          Send Message
        </button>
      </motion.form>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
        <p className="text-lg">123 Luxury Ave, Elegance City, EC 4567</p>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-semibold mb-2">Business Hours</h2>
        <p className="text-lg">Monday - Friday: 9 AM - 6 PM</p>
        <p className="text-lg">Saturday: 10 AM - 4 PM</p>
        <p className="text-lg">Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;