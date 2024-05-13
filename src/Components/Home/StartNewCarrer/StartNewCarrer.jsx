import React, { useEffect } from "react";
import Girl1 from "./Girl1";
import { FiArrowRight } from "react-icons/fi";
import {motion} from "framer-motion";



const StartNewCarrer = () => {
    
  return (
    <>
      <div class="w-full px-16  pb-16">
        <span class="text-5xl font-bold text-[#2A063D]  font-lora">
          Start a new career with E-education &#8594;
        </span>
      </div>
      <div className="flex md:flex-row justify-center items-center px-16 md:mb-24 md:gap-x-8 md:mx-16">
        <div className="border-r-2 border-[#023047] ">
          <Girl1  />
        </div>
        <div className=" ">
          <div className="flex flex-col items-start justify-start min-w-[400px] gap-8">
            <div className="font-lora font-bold text-3xl text-[#2A063D] ">
              Unlocking Career Horizons: Navigating New Paths with E-education
            </div>
            <div className="font-lora text-md mb-8 ">
              Embracing E-education for a new career path offers flexible
              learning opportunities accessible anytime, anywhere. In today's
              digital era, online platforms provide vast resources for skill
              acquisition and career development. With dedication and curiosity,
              individuals can explore diverse fields and chart their
              professional journey with the convenience of E-education.
            </div>
          </div>
          <div>
          <motion.button
        
          className="group relative flex w-fit items-center gap-1.5 bg-[#2A063D] px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Start Now
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartNewCarrer;
