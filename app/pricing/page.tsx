import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Essential Glow Package',
    price: '$49',
    features: [
      'Luxury Facial Treatment',
      'Skin Analysis',
      'Personalized Skincare Regimen',
      'Exclusive Sample Products',
    ],
  },
  {
    title: 'Radiant Luxe Package',
    price: '$89',
    features: [
      'All Essential Glow Package Features',
      'Luxury Makeup Application',
      'Exclusive Access to New Products',
      '10% Off Future Purchases',
    ],
  },
  {
    title: 'Ultimate Luxury Experience',
    price: '$149',
    features: [
      'All Radiant Luxe Package Features',
      'VIP Skincare Consultation',
      'Personalized Makeup Masterclass',
      'Luxury Gift Set',
    ],
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 px-6 py-12">
      <motion.div
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Luxury LRP Cosmetics Pricing
      </motion.h1>
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <table className="min-w-full bg-white border border-orange-300 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="py-4 px-6">Package</th>
              <th className="py-4 px-6">Price</th>
              <th className="py-4 px-6">Features</th>
            </tr>
          </thead>
          <tbody>
            {pricingOptions.map((option, index) => (
              <tr
                key={index}
                className="hover:bg-orange-100 transition-colors duration-300"
              >
                <td className="py-4 px-6 text-lg font-semibold">{option.title}</td>
                <td className="py-4 px-6 text-lg font-semibold">{option.price}</td>
                <td className="py-4 px-6">
                  <ul className="list-disc list-inside">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">{feature}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-orange-100 p-4 rounded-lg shadow">
            <h3 className="font-semibold">What is included in the packages?</h3>
            <p>Each package includes luxurious treatments tailored to enhance your beauty, complemented by exclusive products from luxury LRP cosmetics.</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg shadow">
            <h3 className="font-semibold">Are the products cruelty-free?</h3>
            <p>Absolutely! At luxury LRP cosmetics, we prioritize ethical practices and ensure all our products are cruelty-free.</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg shadow">
            <h3 className="font-semibold">How do I book a service?</h3>
            <p>You can easily book a service through our website or contact our customer service for personalized assistance.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PricingPage;