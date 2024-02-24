"use client";

import Circle from "./Circle";
import HomeContent from "./HomeContent";

export function LampDemo() {
  return (
    <div className="relative bg-cover bg-no-repeat bg-center h-screen flex items-center px-10 max-sm:w-full max-sm:overflow-hidden  ">
      {/* Background Image (For larger screens) */}
      <div className="hidden max-sm:hidden lg:block absolute w-[225vh] ml-[-35rem] left-0 inset-0 bg-[url('/lap.svg')] bg-cover  bg-center opacity-50"></div>

      {/* Background Image (For mobile screens) */}
      <div className="hidden mt-[-8rem] max-sm:block absolute inset-0 bg-[url('/red-bg.svg')] bg-cover bg-no-repeat bg-center h-[180vh] opacity-100"></div>

      <div className="relative z-10 w-full">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-sm: lg:text-left">
            <div className="pl-2 w-[72%] lg:ml-[-18rem] mt-0 flex items-center max-sm:w-full max-sm:px-20 max-sm:ml-[4rem] pr-4  md:ml-[10rem]">
              {/* HomeContent */}
              <HomeContent />
            </div>
          </div>
        </div>
      </div>

      {/* Circle (Visible only on larger screens) */}
      <div className="hidden lg:block absolute top-0 right-0 mr-[-13rem] mt-4">
        <Circle />
      </div>
    </div>
  );
}
