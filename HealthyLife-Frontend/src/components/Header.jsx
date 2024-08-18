import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const btns = [
    { name: 'Home' },
    { name: 'Offers' },
    { name: 'Products' },
    { name: 'Contact' },
  ];

  return (
    <header className="sticky z-50 flex font-sans flex-row gap-2 justify-center top-0 w-full h-auto p-2 shadow-lg bg-white">
      {btns.map((btn, index) => (
        <motion.button
          whileHover={{ scale: 1.1, y: -5 }}
          initial={{ scale: 0, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.1, ease: 'easeInOut' }}
          className="p-2 underline text-primary rounded-md font-bold hover:text-darkness"
          key={btn.name}
        >
          {btn.name}
        </motion.button>
      ))}
    </header>
  );
}
