"use client";
// pages/SkillsSection.js
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface Skill {
  title: string;
  progress: number;
}
const skillsData = [
  { title: "Html & Css", progress: 90, image: "/skills-l (9).png" },
  { title: "Javascript", progress: 60, image: "/skills-l (13).png" },
  { title: "React js", progress: 80, image: "/skills-l (2).png" },
  { title: "Tailwaind css", progress: 80, image: "/skills-l (8).png" },
  { title: "Github", progress: 80, image: "/skills-l (11).png" },
  { title: "Figma", progress: 90, image: "/skills-l (7).png" },

  // Tab 2
  { title: "Java", progress: 90, image: "/skills-l (6).png" },
  { title: "Python", progress: 40, image: "/skills-l (3).png" },
  { title: "Node js", progress: 70, image: "/skills-l.png" },
  { title: "Api", progress: 60, image: "/skills-l (4).png" },
  { title: "MongoDB", progress: 70, image: "/skills-l (5).png" },
  { title: "Mysql", progress: 85, image: "/skills-l (1).png" },
  // Tab 3
  { title: "Basic AWS", progress: 45, image: "/skills-l (10).png" },
  { title: "Basic Linux", progress: 45, image: "/skills-l (14).png" },
  { title: "Basic Terraform", progress: 45, image: "/skills-l (12).png" },
];
const TabContent: React.FC<{ activeTab: number }> = ({ activeTab }) => {
  const itemsPerTab = [6, 6, 3]; // Define the number of items per tab

  const startIdx =
    activeTab === 0
      ? 0
      : itemsPerTab.slice(0, activeTab).reduce((acc, val) => acc + val, 0);
  const endIdx = startIdx + itemsPerTab[activeTab];

  return (
    <div className="grid grid-cols-2 gap-4  max-sm:flex max-sm:flex-col max-sm:overflow-hidden ">
      {skillsData.slice(startIdx, endIdx).map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: activeTab === index ? -200 : 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: activeTab === index ? 200 : -200 }}
          transition={{ duration: 0.5 }}
          className="p-4  rounded-md flex items-center"
        >
          {/* Image */}
          <Image
            src={skill.image}
            alt={skill.title}
            className="mr-4 rounded-md"
            width={100}
            height={100}
          />
          {/* Skill Information */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white font-mono">
              {skill.title}
            </h3>
            <div className="relative h-4 bg-gray-200 w-[200px] rounded-md ">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.progress}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-blue-500 rounded-md"
              ></motion.div>
            </div>
            <p className="text-sm text-white mt-2">{`${skill.progress}%`}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto mt-8 max-sm: ">
      <div className="flex space-x-0">
        {["Frontend", "Backend Skills", "Devops"].map((tabName, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 w-[400px] p-4 text-lg max-sm:h-[50px] font-semibold  ${
              activeTab === index
                ? "bg-lime-300 bg-opacity-20 text-white max-sm:text-[15px]"
                : "bg-opacity-50 backdrop-blur-md max-sm:text-[15px] bg-white bg-opacity-10 text-white border-opacity-30"
            } cursor-pointer`}
          >
            {tabName}
          </button>
        ))}
      </div>
      <AnimatePresence
        initial={false}
        custom={activeTab}
        exitBeforeEnter={false}
        mode="wait"
      >
        <TabContent key={activeTab} activeTab={activeTab} />
      </AnimatePresence>
    </div>
  );
};

export default SkillsSection;
