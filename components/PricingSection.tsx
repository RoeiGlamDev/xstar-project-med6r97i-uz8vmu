import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Luxury Glow Package',
    price: '$150',
    features: [
      'Custom Skin Consultation',
      'Premium Makeup Application',
      'Luxury Skincare Products',
      'Complimentary Touch-Up Service',
    ],
  },
  {
    title: 'Radiant Elegance Package',
    price: '$250',
    features: [
      'Advanced Skin Analysis',
      'Full Makeup Transformation',
      'Luxury Skincare Regimen',
      'Exclusive Access to New Products',
    ],
  },
  {
    title: 'Opulent Beauty Experience',
    price: '$500',
    features: [
      'Personal Beauty Concierge',
      'Custom Makeup and Skincare Plan',
      'Private Makeup Masterclass',
      'VIP Membership with Discounts',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-500 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Luxury LRP Cosmetics Pricing
        </motion.h2>
        <p className="text-lg text-gray-700 mb-12">
          Discover our exclusive packages designed for your beauty journey.
        </p>
        <div className="flex justify-center space-x-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-orange-500 text-white rounded-lg shadow-lg p-6 max-w-xs transition-transform transform hover:scale-105"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{tier.title}</h3>
              <p className="text-xl font-bold mb-4">{tier.price}</p>
              <ul className="mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-orange-500 font-semibold py-2 px-4 rounded-lg shadow hover:bg-orange-200 transition-colors">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;