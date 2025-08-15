import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
    name: string;
    title: string;
    description: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Sophia Taylor',
        title: 'Founder & CEO',
        description: 'With over a decade in the cosmetics industry, Sophia creates innovative luxury products that redefine beauty standards.'
    },
    {
        name: 'James Li',
        title: 'Head of Product Development',
        description: 'A chemist by trade, James specializes in formulating high-end skincare solutions that cater to the discerning customer.'
    },
    {
        name: 'Olivia Martinez',
        title: 'Marketing Director',
        description: 'Olivia brings a wealth of experience in luxury branding, ensuring luxury LRP cosmetics resonates with elegance and sophistication.'
    }
];

const AboutSection: React.FC = () => {
    return (
        <section className="bg-white text-orange-600 py-12">
            <motion.div 
                className="container mx-auto px-4"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}>
                
                <h2 className="text-4xl font-bold text-center mb-8">About luxury LRP cosmetics</h2>
                
                <motion.div 
                    className="text-lg text-center mb-6"
                    initial={{ y: -20 }} 
                    animate={{ y: 0 }} 
                    transition={{ duration: 0.5 }}>
                    At luxury LRP cosmetics, we believe that beauty is an art form. Our story began with a vision to create exquisite cosmetics that celebrate individuality and elegance. With a commitment to quality, we source the finest ingredients to craft luxurious products that not only enhance beauty but also nourish the skin.
                </motion.p>

                <h3 className="text-2xl font-semibold text-center mb-4">Our Mission</h3>
                <motion.div 
                    className="text-lg text-center mb-8"
                    initial={{ y: -20 }} 
                    animate={{ y: 0 }} 
                    transition={{ duration: 0.5 }}>
                    Our mission at luxury LRP cosmetics is to empower individuals through luxurious beauty products that inspire confidence and self-expression. We aim to set new standards in the cosmetics industry by blending innovation with timeless elegance.
                </motion.p>

                <h3 className="text-2xl font-semibold text-center mb-4">Meet Our Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-orange-100 p-6 rounded-lg shadow-lg" 
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}>
                            <h4 className="text-xl font-bold">{member.name}</h4>
                            <h5 className="text-lg italic">{member.title}</h5>
                            <p className="text-sm mt-2">{member.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                    <p className="text-lg">Luxury, Quality, Innovation, and Sustainability are at the core of everything we do at luxury LRP cosmetics. We strive to exceed expectations and create a lasting impact in the world of beauty.</p>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;