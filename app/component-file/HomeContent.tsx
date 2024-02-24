// components/HomeContent.tsx
import React, { useEffect } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import "./homecontent.css";

const HomeContent: React.FC = () => {
  useEffect(() => {
    let words = document.querySelectorAll<HTMLDivElement>(".word");
    words.forEach((word) => {
      let letters = word.textContent!.split("");
      word.textContent = "";
      letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.appendChild(span);
      });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";
    let changeText = () => {
      let currentWord = words[currentWordIndex];
      let nextWord =
        currentWordIndex === maxWordIndex
          ? words[0]
          : words[currentWordIndex + 1];
      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = "letter out";
        }, i * 80);
      });
      nextWord.style.opacity = "1";
      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
          letter.className = "letter in";
        }, 340 + i * 80);
      });
      currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };
    changeText();
    const interval = setInterval(changeText, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="home-content flex justify-start  text-sm font-mono flex-col max-sm:pl-[10px] max-sm:ml-[-16rem]  max-sm:pr-5  max-sm:mt-[-5rem]
     "
    >
      <h1 className=" font-semibold align-middle ml-5 text-amber-300 text-5xl max-sm:text-2xl max-sm:ml-20">
        Hi! I'm Ajay S
      </h1>
      <div className="change-text flex-col justify-center ml-[1rem] mt-5 mr-58 gap-x-25 font-extrabold text-4xl max-sm:ml-20">
        <h3 className="">And I'm&nbsp;</h3>
        <h3>
          <span className="word  text-amber-500 max-sm:text-[20px]">
            Full Stack&nbsp; Developer.
          </span>
          <span className="word text-amber-500  max-sm:text-[20px]">
            Web &nbsp;Designer.
          </span>
          <span className="word text-amber-500 max-sm:text-[19px]">
            MERN&nbsp;Stack&nbsp;Developer.
          </span>
          <span className="word text-amber-500 max-sm:text-[20px]">
            UX/UI&nbsp; developer.
          </span>
        </h3>
      </div>
      <p className="mt-6 pl-4 self-start text-xl text-gray-700  dark:text-white max-sm:text-[15px] max-sm:bg-black/0 max-sm:ml-[4rem] max-sm:w-[340px] ">
        "Embark on a journey through my software development world, where I
        translate ideas into code and turn challenges into elegant solutions.
        Specializing in Java,Ui/Ux,MySql,Node js,React js, I bring a blend of
        innovation and precision to every project. Let's connect and bring your
        next digital endeavor to life."
      </p>
      <div className="info-box">
        <div className="email-info flex items-center  font-extrabold pl-4 text-xl justify-start   text-white max-sm:text-[14px] max-sm:ml-20">
          <h5>Email :</h5>
          <span>ajayshetty636013@gmail.com</span>
        </div>
      </div>
      <div className="btn-box mt-3 pl-4 max-sm:ml-20">
        <button className="bg-gray-700 text-white border border-gray-800 hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-200 active:bg-gray-800 w-40 h-8 rounded-full">
          <a href="/Resume-Ajay-Update.pdf" className="btn text-sm ">
            Download CV
          </a>
        </button>
      </div>
      <div className="social-icons flex items-center justify-start pl-4 text-white mt-6 gap-x-4 text-3xl max-sm:ml-20">
        <a
          href="https://www.facebook.com/profile.php?id=61550777027537&mibextid=ZbWKwL"
          className="hover:transform hover:translate-y-[-2px] hover:text-red-500 transition-transform"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com/ajay.shetty?utm_source=qr&igshid=ZDExYjZkNGI0OA=="
          className="hover:transform hover:translate-y-[-2px] hover:text-red-500 transition-transform"
        >
          <RiInstagramFill />
        </a>
        <a
          href="https://www.linkedin.com/in/ajay-s-4b368b21b/"
          className="hover:transform hover:translate-y-[-2px] hover:text-red-500 transition-transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/Ajayshe71837324?t=eX_DRKgQrJxhU2KY2HviPg&s=09"
          className="hover:transform hover:translate-y-[-2px] hover:text-red-500 transition-transform"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default HomeContent;
