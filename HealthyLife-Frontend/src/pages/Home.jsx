import React from 'react';
import Products from '../components/Products';
import ProductModal from '../components/Product.modal';

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(null);

  const showProductModal = (product) => {
    setModalContent(product);
    setShowModal(true);
  };

  return (
    <section className="flex flex-col items-center bg-whitePrimary w-full overflow-x-hidden">
      <Products showProductModal={showProductModal} />
      {showModal && modalContent ? (
        <ProductModal product={modalContent} setShowModal={setShowModal} />
      ) : null}
    </section>
  );
}
