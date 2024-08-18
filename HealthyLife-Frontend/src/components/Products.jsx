import React from 'react';
import { motion } from 'framer-motion';
import ProductsMock from '../../mock/ProductsMock.json';
import ProductCard from '../UI/ProductsCard';
import Filters from './Filters';
import Pagination from './Pagination';
import ProductCardSkeleton from '../UI/Producs.skeleton';

export default function Products({ showProductModal }) {
  const [ProductsItems, setProductsItems] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  React.useEffect(() => {
    setProductsItems(ProductsMock);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = ProductsItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex flex-col justify-center items-center bg-white py-10 pl-4 w-full h-full text-Courier overflow-x-hidden">
      <div className="border-2 rounded-md shadow-sm w-auto p-6">
        <h1 className="text-4xl text-center text-secondary">Products</h1>
        <p className="text-center text-primary font-sans">
          Get the best products with the best prices
        </p>
      </div>
      <Filters />
      <p className="font-sans">Click cards to see pricing and details</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {selectedProducts.length > 0
          ? selectedProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                showProductModal={showProductModal}
              />
            ))
          : Array.from({ length: 10 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
      </div>
      <Pagination
        totalItems={ProductsItems.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
