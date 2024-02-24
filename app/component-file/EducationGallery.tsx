"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ImageDetails {
  image: string;
  title: string;
  description: string;
}

interface EducationGalleryProps {
  images: ImageDetails[];
}

const EducationGallery: React.FC<EducationGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ImageDetails | null>(null);

  const handleClick = (imageDetails: ImageDetails) => {
    setSelectedImage(selectedImage === imageDetails ? null : imageDetails);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 max-sm:w-[100%]">
      {images.map((imageDetails, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          onClick={() => handleClick(imageDetails)}
        >
          <Image
            className="w-[400px] h-full object-contain aspect-w-7 aspect-h-3"
            src={imageDetails.image}
            alt={`Image ${index + 1}`}
            width={500} // Set the desired width
            height={100} // Set the desired height
          />

          <AnimatePresence>
            {selectedImage === imageDetails && (
              <motion.div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white/30 backdrop-blur-md p-4 font-mono">
                  <h2 className="text-xl font-semibold mb-2">
                    {imageDetails.title}
                  </h2>
                  <p>{imageDetails.description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationGallery;
