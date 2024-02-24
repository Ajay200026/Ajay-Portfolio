"use client";

import { useEffect, useState } from "react";

const ProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollPosition / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-1 bg-black-200">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
