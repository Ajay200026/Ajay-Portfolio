// components/Modal.tsx

import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode; // Add children prop here
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalVariants = {
    hidden: {
      x: "-100%", // Slide in from the left
    },
    visible: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-50 w-[900px] bg-white p-8 rounded-md">
            {children}
            <button
              className="mt-3 bg-gray-700 text-white border border-gray-800 hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-200 active:bg-gray-800 w-40 h-8 rounded-full"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
