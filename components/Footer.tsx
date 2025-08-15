import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  links: { name: string; url: string }[];
  socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = () => {
  const companyName = "luxury LRP cosmetics";
  const links = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'About Us', url: '/about' },
    { name: 'Contact', url: '/contact' },
  ];

  const socialMedia = [
    { platform: 'Instagram', url: 'https://instagram.com/luxurylrpcosmetics' },
    { platform: 'Facebook', url: 'https://facebook.com/luxurylrpcosmetics' },
    { platform: 'Twitter', url: 'https://twitter.com/luxurylrpcosmetics' },
  ];

  return (
    <footer className="bg-white text-orange-600 py-8">
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">{companyName}</h2>
        <nav className="mb-6">
          {links.map((link) => (
            <motion.div
              key={link.name}
              href={link.url}
              className="mx-4 text-lg hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
        <p className="text-md mb-4">Discover the elegance of luxury in every product.</p>
        <div className="flex justify-center mb-4">
          {socialMedia.map((media) => (
            <motion.div
              key={media.platform}
              href={media.url}
              className="mx-2 text-orange-600 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {media.platform}
            </motion.a>
          ))}
        </div>
        <p className="text-sm">© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;