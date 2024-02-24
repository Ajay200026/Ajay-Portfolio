"use client";
import React from "react";
import Card from "../components/ui/Card";

const cardData = [
  { title: "Ecommerce-webpage-images", imageUrl: "/snap1.png" },
  { title: "Ecommerce-webpage-images", imageUrl: "/snap2.png" },
  { title: "Ecommerce-webpage-images", imageUrl: "/snap9.png" },
  { title: " Flavor Fiesta India Application", imageUrl: "/snap4.png" },
  { title: " Flavor Fiesta India Application", imageUrl: "/snap5.png" },
  { title: " Flavor Fiesta India Application", imageUrl: "/snap6.png" },
  { title: " Flavor Fiesta India Application", imageUrl: "/snap7.png" },
  { title: "Music App and Dash Board images", imageUrl: "/snap8.png" },
  { title: "Photography Webpage images", imageUrl: "/snap3.png" },
];

const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-x-7 gap-y-1 mt-7 mx-sm:grid max-sm:grid-cols-1 max-sm:w-[100%] md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};

export default Gallery;
