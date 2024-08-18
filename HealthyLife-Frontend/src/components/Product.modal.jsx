import React from 'react';

const ProductModal = ({ product, setShowModal }) => {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center font-sans bg-black bg-opacity-50 z-50"
      onClick={handleClose}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-lg mt-2">Price: {product.price}</p>
        <p className="text-lg mt-2">
          Proteins: {product.macronutrients.proteins}g
        </p>
        <p className="text-lg mt-2">
          Carbohydrates: {product.macronutrients.carbohydrates}g
        </p>
        <p className="text-lg mt-2">Fats: {product.macronutrients.fats}g</p>
        <p className="text-lg mt-2">Gluten: {product.macronutrients.gluten}</p>
        <p className="text-lg mt-2">Description: {product.description}</p>
      </div>
    </div>
  );
};

export default ProductModal;
