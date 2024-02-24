"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div id="about" className=" px-8 mt-4 max-sm:w-[100%] max-sm:mt-[4rem]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className=" mt-6 h-[32rem] flex items-center justify-center bg-transparent "
      >
        <Head>
          <title>About Me</title>
        </Head>
        <motion.div className="p-8 bg-transparentshadow-md rounded-md flex items-center max-sm:mt-[15rem] max-sm:flex-col max-sm:items-center max-sm:justify-center">
          <div className="mr-8">
            {/* Your image code goes here */}
            <Image
              src="/img3.png"
              alt="Image"
              width={600}
              height={300}
              className="w-[600px] h-[300px] rounded-lg max-sm:w-[250px] max-sm:ml-[2rem] max-sm:h-[250px] max-sm:rounded-full md:h-[200px]"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4 text-white mt-[-3rem] font-anta uppercase  max-sm:mt-5 max-sm:text-center">
              About Me
            </h1>
            <p className=" text-white font-mono font-bold max-md: max-sm: max-xl: max-sm:indent-[10%] max-sm:text-center max-sm:w-[330px] max-sm:px-2 max-sm:flex   max-sm:align-middle ">
              "Motivated and detail-oriented entry-level software developer with
              a strong foundation in programming languages and a passion for
              creating efficient and innovative solutions. Eager to leverage
              academic knowledge and hands-on projects to contribute effectively
              to a dynamic development team. Committed to continuous learning
              and growth in the field of software development."
            </p>
            <button
              className=" mt-3 bg-gray-700 text-white border border-gray-800 hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-200 active:bg-gray-800 w-40 h-8 rounded-full max-sm:ml-[5.5rem]"
              onClick={openModal}
            >
              Read More
            </button>
          </div>
        </motion.div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <p className=" font-mono font-bold max-sm:w-96 max-sm:h-50 max-sm:mt-30 max-sm:z-100 ">
            Portfolio Description: Welcome to my digital realm, where lines of
            code transform into solutions and ideas take shape in the language
            of software. As a seasoned software developer, I am on a perpetual
            quest for innovation and excellence. My portfolio is a testament to
            the diverse projects I've undertaken and the skills I've honed along
            the way. Explore the intricacies of my coding journey, from crafting
            elegant algorithms to architecting scalable applications. With a
            foundation in Html and Css ,Java,MySql,Javascript ,Ui/Ux,Node js
            ,React js,Api,Tailwind css, I thrive on turning complex challenges
            into elegant, user-centric solutions. Whether it's developing robust
            backend systems, creating intuitive user interfaces, or delving into
            the realms of machine learning, each project in this portfolio
            reflects my dedication to pushing boundaries and exceeding
            expectations. Let's collaborate and bring your ideas to life in the
            ever-expanding landscape of software development.
          </p>
        </Modal>
      </motion.div>
    </div>
  );
};

export default About;
