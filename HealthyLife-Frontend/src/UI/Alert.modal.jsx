import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const AlertModal = ({ message, setShowAlertModal }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlertModal(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowAlertModal(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="font-sans font-bold bg-red-500 z-50 text-white p-4 rounded-md fixed bottom-0 right-0 m-4 flex items-center gap-2"
        onClick={closeModal}
      >
        <FontAwesomeIcon
          className="text-yellow-300 font-bold w-5 h-5"
          icon={faExclamationTriangle}
        />
        <p>{message}</p>
      </motion.div>
    </>
  );
};

export default AlertModal;
