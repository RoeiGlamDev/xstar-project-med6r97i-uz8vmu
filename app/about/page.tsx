import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    position: 'Founder & CEO',
    imageUrl: '/images/team/sophia.jpg',
  },
  {
    name: 'Liam Chen',
    position: 'Head of Product Development',
    imageUrl: '/images/team/liam.jpg',
  },
  {
    name: 'Isabella Johnson',
    position: 'Marketing Director',
    imageUrl: '/images/team/isabella.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600">
      <header className="text-center py-10">
        <motion.div
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About luxury LRP cosmetics
        </motion.h1>
      </header>
      
      <section className="max-w-4xl mx-auto py-8 px-4">
        <motion.div
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our History
        </motion.h2>
        <p className="mb-4">
          Established in 2020, luxury LRP cosmetics has swiftly emerged as a leader in the beauty industry, known for our commitment to quality and excellence. Our founders envisioned a brand that embodies sophistication and innovation, creating products that resonate with beauty enthusiasts around the globe.
        </p>
        <p>
          With a focus on sustainable and ethically sourced ingredients, luxury LRP cosmetics is dedicated to crafting luxurious formulas that enhance natural beauty while also caring for the environment. 
        </p>
      </section>

      <section className="bg-orange-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-3xl font-semibold mb-4 text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>
          <ul className="list-disc list-inside mb-4">
            <li>Quality: We never compromise on the quality of our products.</li>
            <li>Innovation: Constantly evolving, we embrace new ideas and technologies.</li>
            <li>Sustainability: We are committed to environmentally responsible practices.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-8 px-4">
        <motion.div
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={member.imageUrl} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;