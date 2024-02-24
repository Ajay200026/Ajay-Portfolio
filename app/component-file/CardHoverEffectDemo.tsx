"use client";

import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div id="skills" className="max-w-6xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Google",
    description:
      "Completed the Foundations of User Experience (UX) Design specialization! ",
    link: "https://coursera.org/share/5b57a2951b638ec397eea764a8d03a13",
    image: "/google.jpg",
  },
  {
    title: "Meta",
    description:
      "Completed the Full Stack Meta specialization!-This course equips you with the skills to build full-stack Django applications",
    link: "https://coursera.org/share/5e67b3ce5aa22ac9b8c2c6af69b77b6b",
    image: "/Meta.jpg",
  },
  {
    title: "React js",
    description:
      " React - The Complete Guide 2024 (incl. React Router & Redux) ",
    link: "https://www.udemy.com/certificate/UC-944f532c-da49-4ed6-922a-bc3f783bb7d6/",
    image: "/React.jpg",
  },
  {
    title: "Javascript",
    description: "The Complete JavaScript Course 2024: From Zero to Expert!",
    link: "https://www.udemy.com/certificate/UC-279b4d15-0483-4d0e-a80b-a6c33c2c9cd3/",
    image: "/Javascript.jpg",
  },
  {
    title: "Frontend Developer Workshop",
    description:
      "Joined 5 Days Frontend Developer Workshops by #TheScholarHat and Delivered by Shailendra Chauhan",
    link: "#",
    image: "/Frontend-workshop.jpg",
  },
  {
    title: "Microsoft",
    description:
      "Hey Everyone, I am excited to share that I have completed the Java Zero to Hero (5 Days) course from Letsupgrade.in. ",
    link: "https://https://lnkd.in/gYGgWT8h",
    image: "/java.jpg",
  },
];
