import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  contactReason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    contactReason: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    if (!formData.name || !formData.email || !formData.message || !formData.contactReason) {
      setError('All fields are required.');
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '', contactReason: '' });
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-3xl font-bold text-center text-orange-600 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact luxury LRP cosmetics
        </motion.h2>
        <p className="text-center text-gray-600 mb-6">
          For inquiries about our luxury cosmetic products, please fill out the form below.
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">Thank you for your inquiry! We will get back to you shortly.</p>}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-orange-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-orange-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="contactReason">Reason for Contact</label>
            <select
              name="contactReason"
              value={formData.contactReason}
              onChange={handleChange}
              className="mt-1 block w-full border border-orange-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              required
            >
              <option value="">Select a reason</option>
              <option value="Product Inquiry">Product Inquiry</option>
              <option value="Order Support">Order Support</option>
              <option value="General Questions">General Questions</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-orange-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center">
          <h3 className="text-lg font-bold text-orange-600">Business Information</h3>
          <p className="text-gray-600">luxury LRP cosmetics</p>
          <p className="text-gray-600">123 Luxury St.</p>
          <p className="text-gray-600">Cosmetics City, CC 12345</p>
          <p className="text-gray-600">Phone: (123) 456-7890</p>
          <p className="text-gray-600">Business Hours: Mon - Fri, 9 AM - 5 PM</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;