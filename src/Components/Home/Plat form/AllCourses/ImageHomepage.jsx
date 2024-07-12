import React from "react";
import img1 from "../../../../assets/imgstudents.png";
import img2 from "../../../../assets/img2students.png";
import img3 from "../../../../assets/img3students.png";
import { Link } from "react-router-dom";

const cardData = [
  {
    img: img1,
    title: "it's popular",
    description:
      "Technical skills are in high demand. Over 60% of new jobs worldwide will require tech skills.",
  },
  {
    img: img2,
    title: "it's promising",
    description:
      "Unlock your potential as a programmer. Entry-level developers start with a strong foundation in their careers.",
  },
  {
    img: img3,
    title: "it's fun",
    description:
      "Imagine combining your passion and skill with your creativity, and making something new everyday.",
  },
];

const ImageHomePage = () => {
  return (
    <div className="flex justify-center items-center font-sans mb-4 ml-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-4 h-auto relative bottom-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="max-w-full rounded overflow-y-visible flex flex-col"
            >
              <div className="mx-auto flex-1 relative top-24">
                <img
                  className="w-60 h-60 md:h-auto"
                  src={card.img}
                  alt="student"
                />
              </div>
              <div className="px-6 flex-1 p-4 shadow-lg md:w-[347px] text-center">
                <br />
                <div
                  id="title"
                  className="font-bold bg-gradient-to-r from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent text-3xl mb-2 text-center pt-10"
                >
                  {card.title}
                </div>
                <p className="text-black text-base">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageHomePage;
