// pages/index.tsx
import React from "react";
import ContactForm from "../component-file/ContactForm";

const MainContact: React.FC = () => {
  return (
    <div className="container w-full p-8 flex max-sm:flex max-sm:flex-col max-sm:w-[100%] md:w-[100%] md:flex ">
      <div className="flex justify-center items-center mb-8">
        {/* Your image goes here */}
        <img
          src="/contact.png" // Replace with the path to your image
          alt="Portfolio Image"
          className="lg:max-w-[500px] h-auto rounded-md max-sm:w-[100%] md:max-w-[350px]"
        />
      </div>

      <div className="flex justify-center ">
        {/* Use the ContactForm component here */}
        <ContactForm />
      </div>
    </div>
  );
};

export default MainContact;
