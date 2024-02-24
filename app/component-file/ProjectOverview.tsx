"use client";
import React, { useState } from "react";
import ProjectPopup from "./ProjectPopup";

const ProjectOverview: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpenPopup}
        className="mt-3 bg-gray-700 text-white border border-gray-800 hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-200 active:bg-gray-800 w-40 h-8 rounded-full"
      >
        Project Overview
      </button>

      {isPopupOpen && <ProjectPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default ProjectOverview;
