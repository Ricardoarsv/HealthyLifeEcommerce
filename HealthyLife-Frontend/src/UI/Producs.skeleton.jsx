import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="p-4 min-w-56 border rounded-lg shadow-md w-full hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-48 bg-gray-300 animate-pulse rounded-t-lg"></div>
      <div className="mt-4">
        <div className="h-4 bg-gray-300 animate-pulse rounded w-3/4 mx-auto"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
