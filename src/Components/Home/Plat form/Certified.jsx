import React from "react";
import IMG1 from "../../../assets/E- education logo .png";
import IMG from "../../../assets/Platform/Ai.jpg";
import { Link } from "react-router-dom";

function Certified() {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  // Function to handle card expansion
  function expandCard(index) {
    setExpandedIndex(null); // Always set expandedIndex to null to prevent expansion
  }

  // Array of image URLs
  const imageUrls = [
    "https://miro.medium.com/v2/resize:fit:800/1*WHoAzsTbRrz4HMTdeSEa8w.png",
    IMG1,
    "https://www.shutterstock.com/image-photo/businessman-holding-showing-best-quality-600nw-2104451759.jpg",
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-y-16 place-items-center bg-white py-8 font-lora">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className={`relative flex border-2 border-[#0ea5e9] flex-col rounded-xl   bg-clip-border text-gray-700 shadow-md transition-all w-80 hover:scale-110`}
          >
            <div className="relative mx-4 -mt-10 h-44 overflow-hidden  bg-gray-200 rounded-xl bg-blue-gray-500 bg-clip-border shadow-lg shadow-blue-gray-500/40">
              {/* Dummy image */}
              <img
                src={imageUrls[index - 1]}
                alt={`Card ${index}`}
                className="w-full h-full bg-[#006d77] "
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-lora text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased ">
                {index === 1 && "Get Start Learning with E-education"}
                {index === 2 && "Improve Your Skills with E-education"}
                {index === 3 && "Get Certified with E-education Courses"}
              </h5>
            </div>
            <div className="p-6 pt-0">
              <Link to="/features">
                <button
                  onClick={() => expandCard(index)}
                  data-ripple-light="true"
                  type="button"
                  className=" font-lora select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          /* Add any custom styles here */
        `}
      </style>
    </div>
  );
}

export default Certified;
