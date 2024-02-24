import About from "./component-file/About";
import { CardHoverEffectDemo } from "./component-file/CardHoverEffectDemo";
import Gallery from "./component-file/Gallery";
import { LampDemo } from "./component-file/LampDemo";
import MainContact from "./component-file/MainContact";
import NavBar from "./component-file/NavBar";
import ProgressBar from "./component-file/ProgressBar";
import SkillsSection from "./component-file/SkillsSection";
import EducationGalleryPage from "./components/ui/EducationGalleryPage";

import Portfolio from "./components/ui/portfolio";

export default function Home() {
  return (
    <main id="home">
      <div className="h-[auto] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center flex-col">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"></p>
        <NavBar />
        <div className="z-10 max-sm:w-[100%] ">
          <LampDemo />
        </div>
        <div
          id="about"
          className=" z-10  h-[70vh] max-sm:w-[100%] md:mt-[-11rem] lg:mt-[1rem] "
        >
          <About />
        </div>
        <div
          id="skills"
          className="max-sm:mt-[18rem] max-sm:w-[100%] z-10 md:mt-[-20rem] lg:mt-[1rem]"
        >
          <h3 className=" text-white text-center font-mono font-bold text-[20px]">
            Core Competencies
          </h3>
          <SkillsSection />
        </div>
        <div id="projects" className=" max-sm:w-[100%] z-10 mt-5">
          <h3 className=" text-white text-center font-mono font-bold text-[20px]">
            Design & Development Showcase
          </h3>
          <Portfolio />
        </div>
        <div id="courses" className="max-sm:w-[100%]">
          <h3 className=" text-white text-center font-mono font-bold text-[20px]">
            Certification Gallery
          </h3>
          <CardHoverEffectDemo />
        </div>
        <div id="education" className="max-sm:w-[100%] z-10 px-5">
          <h3 className=" text-white text-center font-mono font-bold text-[20px]">
            Academic Achievements
          </h3>
          <EducationGalleryPage />
        </div>

        <div className=" mt-[3rem] pb-6 max-sm:w-[100%] px-5">
          <h3 className=" text-white text-center font-mono font-bold text-[20px]">
            Project Snapshots
          </h3>
          <Gallery />
        </div>
        <div id="contact-form" className=" mt-[1rem] z-10 max-sm:w-[100%] ">
          <h3 className=" text-white text-center font-mono font-bold text-[20px]">
            Contact Us
          </h3>
          <MainContact />
        </div>
        <footer>
          <p className=" bg-black text-white text-center z-20">
            &copy; AJAY S <span> 2024</span>. All rights reserved.
          </p>
        </footer>
      </div>

      <div>
        <ProgressBar />
      </div>
    </main>
  );
}
