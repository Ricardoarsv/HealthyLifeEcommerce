import React from 'react';
import ProductCard from '../UI/ProductsCard';
import RecomendationCard from '../UI/RecomendationCard';
import Filters from './Filters';
import Pagination from './Pagination';
import ProductCardSkeleton from '../UI/Producs.skeleton';
import apiUrl from '../utils/getApiUrl';
import AlertModal from '../UI/Alert.modal';

export default function Products({ showProductModal }) {
  const [ProductsItems, setProductsItems] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [showFilterProducts, setShowFilterProducts] = React.useState(false);
  const [filterProducts, setFilterProducts] = React.useState([]);
  const [showAlertModal, setShowAlertModal] = React.useState(false);
  const [errormsg, setErrormsg] = React.useState('');
  const itemsPerPage = 10;

  React.useEffect(() => {
    const response = fetch(`${apiUrl}/products/getProducts`);
    response
      .then((res) => res.json())
      .then((data) => {
        setProductsItems(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleAlertModal = (message) => {
    setErrormsg(message);
    setShowAlertModal(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleShowFilteredProducts = (data) => {
    console.log(data);
    if (data.length === 0) {
      setShowFilterProducts(false);
      return;
    }
    setShowFilterProducts(true);
    setFilterProducts(data);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = ProductsItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex flex-col justify-center items-center bg-white py-10 pl-2 w-full h-full text-Courier overflow-x-hidden">
      <div className="border-2 rounded-md shadow-sm w-auto p-6">
        <h1 className="text-4xl text-center text-secondary">Products</h1>
        <p className="text-center text-primary font-sans">
          Get the best products with the best prices
        </p>
      </div>
      <Filters
        handleShowFilteredProducts={handleShowFilteredProducts}
        handleAlertModal={handleAlertModal}
      />
      {showAlertModal ? (
        <AlertModal message={errormsg} setShowAlertModal={setShowAlertModal} />
      ) : null}
      {!showFilterProducts && (
        <p className="font-sans">Click cards to see pricing and details</p>
      )}
      {!showFilterProducts ? (
        <>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            {selectedProducts.length > 0
              ? selectedProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    product={product}
                    showProductModal={showProductModal}
                    index={index}
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
        </>
      ) : (
        <div className="flex flex-col md:flex-row justify-center h-full gap-12 p-4">
          {filterProducts.length > 0
            ? filterProducts.map((product, index) => (
                <RecomendationCard key={index} productData={product} />
              ))
            : Array.from({ length: 3 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
        </div>
      )}
    </div>
  );
}
