"use client";

import emailjs, { init } from "emailjs-com";
import React, { useRef, useState } from "react";

init("vdeCQSzNTuCZDohXL");

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          "Ajay_wqcwbm8",
          "template_8oyo3jx",
          form.current,
          "vdeCQSzNTuCZDohXL"
        );
        console.log(result.text);
        setIsSuccess(true);
        // Reset the form if it is not null
        form.current && form.current.reset();
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } catch (error) {}
    }
  };

  return (
    <div>
      {isSuccess && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative "
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            {" "}
            Your message has been sent successfully.
          </span>
        </div>
      )}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto mt-8 p-6  bg-transparent rounded-md shadow-md"
      >
        <div className="mb-4 ">
          <label
            htmlFor="user_name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="from_name"
            className="mt-1 p-2 w-[300px] border rounded-md"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="user_email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="mt-3 bg-gray-700 text-white border border-gray-800 hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-200 active:bg-gray-800 w-40 h-8 rounded-full"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
