import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import JavaPic from "../../../../../src/assetss/Basic_Courses/java.png";

const BasicJavaHero = () => {
  const [courseName] = useState("Basic Java");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2  w-10/12 mx-auto overflow-x-hidden md:py-14 lg:py-24 xl:py-14 ">
        <div className="order-2 lg:order-1 w-auto h-auto pr-10 md:mb-14 flex flex-col justify-start items-start md:justify-center md:items-center  font md:py-0 mx-auto">
          <p className="text-lg text-start text-gray-500 md:py-6 leading-10">
            Empower yourself with advanced Java programming techniques to optimize performance and reliability for your projects. Our comprehensive course will guide you from the basics to advanced concepts, ensuring you're ready to tackle real-world challenges.
          </p>
          <div className="mt-4 md:w-[250px] md:h-[70px] w-auto h-auto lg:w-[160px] lg:h-[60px]  ">
            <button
              onClick={handleEnroll}
              className="px-5 w-auto font-sans h-full py-3 text-[26px] font-medium text-white bg-[#0098f1] rounded-[22px] md:px-6"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 pb-10 mx-auto w-auto h-auto overflow-hidden md:p-10 lg:p-0 sm:pb-0  md:mb-10">
          <img
            id="heroImg1"
            className=" rounded-full object-cover w-[250px] h-[250px] sm:w-[375px] sm:h-[375px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] 2xl:w-[600px] 2xl:h-[600px] mx-auto"
            src="https://ioflood.com/blog/wp-content/uploads/2023/10/Streamlined-display-of-Java-programming-keywords.jpg"
            // src="https://img.freepik.com/free-vector/programmers-concept-with-flat-design_23-2147851367.jpg?t=st=1722598533~exp=1722602133~hmac=28024f166c07b7913d73796e469324d89866d11795997aaa55e8ef7a319e3da4&w=740"
            // src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/292544620/original/01259a62d10be914d5fe3b518d2e29a67b851883/api-integration-with-java.png"
            alt="Java Programming hero image"
          />
        </div>
      </div>
    </>
  );
};

export default BasicJavaHero;
