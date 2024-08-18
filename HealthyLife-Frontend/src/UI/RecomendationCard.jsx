import React from 'react';
import { motion } from 'framer-motion';

const RecomendationCard = ({ productData }) => {
  const { product, reason } = productData;
  const { image, name, price, description, macronutrients } = product;
  console.log(product);
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative p-4 font-sans h-full border rounded-lg shadow-md w-full hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="text-md font-bold mt-4 text-center font-sans">{name}</h3>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 w-full h-full overflow-y-auto  bg-white p-4 rounded-lg shadow-lg overflow-hidden"
      >
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-sm mb-2">{description}</p>
        <p className="text-sm mb-2">Price: ${price}</p>
        <p className="text-sm mb-2">Proteins: {macronutrients.Protein}g</p>
        <p className="text-sm mb-2">Fats: {macronutrients.Fat}g</p>
        <p className="text-sm mb-2">Carbohydrates: {macronutrients.Carbs}g</p>
        <p className="text-sm mb-2">Gluten: {macronutrients.gluten}</p>
        <p className="text-sm mb-2">reason: {reason}</p>
      </motion.div>
    </motion.div>
  );
};

export default RecomendationCard;
