import React from "react";
import { Link } from "react-router-dom";
import Rectangle from "../../../assets/Rectangle.jpg";
import Footer from "../footer/Footer";
import StudentCourses from "./StudentCourses";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Student = () => {
  return (
    <>
      <div
        id="main"
        className="flex justify-center items-center bg-cover bg-center h-[582px] w-full"
        style={{ backgroundImage: `url(${Rectangle})` }}
      >
        <div className="flex flex-col justify-center items-center h-auto space-y-4 p-4 md:p-8 lg:p-12">
          <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-[58px] flex justify-center items-center">
            <span className="text-center text-white text-3xl md:text-4xl lg:text-5xl">
              Master <span className="text-[#f6ac14]">Tech</span> Fundamentals
            </span>
          </div>
          <div className="w-full max-w-2xl lg:max-w-3xl h-auto flex justify-center items-center">
            <p className="text-center text-white text-base md:text-lg lg:text-xl">
              Accelerate your tech skills with hands-on courses designed for
              students. Gain expertise in programming, data analysis,
              cybersecurity, and more. Prepare yourself for success in the
              digital world.
            </p>
          </div>
          <div className="flex justify-center items-center rounded-lg top-16 relative">
            <motion.button className="rounded-lg w-[200px] md:w-[265px] h-[50px] md:h-[70px] px-4 text-lg md:text-2xl group flex justify-center items-center gap-1.5 bg-[#0098f1] py-2 text-white transition-colors">
              <Link to="/" className="flex items-center gap-1.5">
                Find the Courses
                <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
              </Link>
            </motion.button>
          </div>
        </div>
      </div>

      <StudentCourses />
      <Footer />
    </>
  );
};

export default Student;
