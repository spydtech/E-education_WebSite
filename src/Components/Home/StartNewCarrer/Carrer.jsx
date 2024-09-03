import React, { useEffect } from "react";
import Carrerimg from "../../../assetss/Home/carrer.png";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Carrer = () => {
  return (
    <>
      <div class="w-full text-center mt-32  ">
        <div class="md:text-4xl text-xl font-bold   font text-center">
          Start a new{" "}
          <span class="bg-gradient-to-r from-[#F6AC14] to-[#0098F1] inline-block text-transparent bg-clip-text">
            career
          </span>{" "}
          with E-education &#8594;
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center md:px-16 md:mb-24 md:gap-x-8 md:mx-16 mt-6">
        <div className=" ">
          <img src={Carrerimg} />
        </div>
        <div className="ml-6 ">
          <div className="flex  flex-col items-start justify-start md:min-w-[400px] gap-4">
            <div className="font font-bold  text-xl md:text-3xl ">
              Unlocking Career Horizons: Navigating New Paths With E-education
            </div>
            <div className="font md:text-md text-base mb-8 ">
              Embracing E-education for a new career path offers flexible
              learning opportunities accessible anytime, anywhere. In today's
              digital era, online platforms provide vast resources for skill
              acquisition and career development. With dedication and curiosity,
              individuals can explore diverse fields and chart their
              professional journey with the convenience of E-education.
            </div>
          </div>
          <div className="mb-10">
            <motion.button className=" group relative flex w-fit items-center gap-1.5 bg-[#0098F1] px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50">
              <Link to="/pricing">Start Now</Link>
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrer;
