import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  photoUrl: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophia L.',
    photoUrl: '/images/testimonials/sophia.jpg',
    content: 'Luxury LRP cosmetics transformed my skincare routine. The hydration serum is a game changer!',
    rating: 5,
  },
  {
    id: 2,
    name: 'James T.',
    photoUrl: '/images/testimonials/james.jpg',
    content: 'I love the elegance of their packaging and the quality of their products. Highly recommend!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Emily R.',
    photoUrl: '/images/testimonials/emily.jpg',
    content: 'The color palettes are stunning and perfect for any occasion. Luxury LRP cosmetics never disappoints!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.div 
          className="text-4xl font-bold text-orange-600 mb-8"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, photoUrl, content, rating }) => (
            <motion.div 
              key={id} 
              className="bg-orange-50 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: id * 0.2 }}
            >
              <img 
                src={photoUrl} 
                alt={name} 
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600">{name}</h3>
              <p className="text-gray-700 italic mb-4">"{content}"</p>
              <div className="flex justify-center">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg 
                    key={index} 
                    className={w-5 h-5 ${index < rating ? 'text-orange-600' : 'text-gray-300'}} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15.27L16.18 19 14.54 12.97 20 8.64 13.81 8.63 10 2 6.19 8.63 0 8.64 5.46 12.97 3.82 19 10 15.27z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;