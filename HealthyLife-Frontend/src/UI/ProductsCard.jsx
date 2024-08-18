import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, showProductModal }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      onClick={() => showProductModal(product)}
      className="p-4 border rounded-lg shadow-md w-full hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="text-md font-bold mt-4 text-center font-sans">
        {product.name}
      </h3>
    </motion.div>
  );
};

export default ProductCard;
