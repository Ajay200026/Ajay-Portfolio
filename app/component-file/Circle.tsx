"use client";

import React from "react";
import "./circle.css";
const Circle: React.FC = () => {
  return (
    <div className="rounded-text rotating">
      <svg viewBox="0 0 200 200">
        <path
          id="textPath"
          d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
          transform="translate(100,100)"
          fill="none"
          strokeWidth="0"
        ></path>
        <g fontSize="14.1px">
          <text textAnchor="start">
            <textPath
              xlinkHref="#textPath"
              startOffset="0%"
              className="coloring rotating-text text-2xl"
            >
              - Hi - I Am - Software - Developer - Hire Me -
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};
export default Circle;
