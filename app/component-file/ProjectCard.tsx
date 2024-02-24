"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbView360 } from "react-icons/tb";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  githubLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  githubLink,
  demoLink,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="max-w-[320px] rounded-xl mx-auto overflow-hidden shadow-lg  px-2 py-8 mt-[3rem]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          style={{
            overflowY: "scroll",
            scrollbarWidth: "thin",
            scrollbarColor: "transparent transparent",
          }}
        >
          <Image
            className="w-full h-48 object-contain"
            src={image}
            alt={title}
          />

          <div className="p-4 text-white">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <div className="h-16 overflow-y-auto mb-4">{description}</div>
            <div className="flex justify-between items-center">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="h-6 w-6 text-2xl ml-7 text-white">
                  <FaGithub />
                  source code
                </svg>
                <h4 className="text-white">source code</h4>
              </a>
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="h-6 w-6 text-2xl ml-5 text-white">
                  <TbView360 />
                </svg>
                <h4 className="text-white"> live demo</h4>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectCard;
