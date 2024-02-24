import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

const Card: React.FC<{ title: string; imageUrl: string }> = ({
  title,
  imageUrl,
}) => {
  const [isHovered, setHovered] = useState(false);
  const controls = useAnimation();

  const handleMouseEnter = () => {
    setHovered(true);
    controls.start({ opacity: 1, y: 0, scale: 1.1 });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    controls.start({ opacity: 0, y: 20, scale: 1 });
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-md w-[400px] h-[300px]  drop-shadow-5xl  max-sm: max-sm:w-[350px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-contain object-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0.8 : 1, scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black drop-shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 100 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center p-4 max-sm:w-[100%]"
        style={{ pointerEvents: "none" }}
      >
        <motion.h2
          className="text-white text-lg font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default Card;
