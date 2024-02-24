// ProjectPopup.tsx
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface ProjectPopupProps {
  onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !(containerRef.current as any).contains(event.target)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        ref={containerRef}
        className="bg-white p-6 rounded-md w-96"
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-xl font-bold mb-4">Project Descriptions</h2>
        {/* Replace the following with your actual project descriptions */}
        <p>
          Project 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <p>Project 2: Description here.</p>
        <p>Project 3: Description here.</p>
        <p>Project 4: Description here.</p>
        <p>Project 5: Description here.</p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPopup;
