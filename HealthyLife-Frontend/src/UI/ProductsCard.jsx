import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, showProductModal, index }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 * index }}
      whileHover={{ scale: 1.1 }}
      onClick={() => showProductModal(product)}
      className="p-4 border rounded-lg shadow-md w-full hover:shadow-lg transition-shadow duration-300"
    >
      {loading && (
        <div className="w-full h-48 flex items-center justify-center">
          <div className="animate-spin border-4 border-t-4 border-gray-200 rounded-full w-12 h-12"></div>
        </div>
      )}
      <img
        src={product.image}
        alt={product.name}
        className={`w-full h-48 object-cover rounded-t-lg ${loading ? 'hidden' : 'block'}`}
        onLoad={handleImageLoad}
      />
      <h3 className="text-md font-bold mt-4 text-center font-sans">
        {product.name}
      </h3>
    </motion.div>
  );
};

export default ProductCard;
