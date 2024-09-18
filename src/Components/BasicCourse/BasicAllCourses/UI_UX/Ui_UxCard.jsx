import React from "react";
import img2 from '../../../../assetss/professionalimages/image14.png';

const Ui_UxCard = () => {
  const courseData = [
    {
      imgSrc:
        img2,
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of UI/UX design courses. Discover programs designed for all skill levels, from beginner to advanced.",
    },
    {
      imgSrc:
      img2,
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses that cover UI/UX design basics, tools, and methodologies essential for development.",
    },
    {
      imgSrc:
      img2,
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge with hands-on projects that mirror real-world scenarios. Gain practical experience in UI/UX design and prototyping.",
    },
    {
      imgSrc:
      img2,
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards. Set goals, track milestones, and measure your expertise as you advance through the courses.",
    },
    {
      imgSrc:
      img2,
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to deepen your knowledge in areas like user research, interaction design, or accessibility. Customize your learning path to fit your interests and career goals.",
    },
    {
      imgSrc:
      img2,
      title: "Earn Recognized Certifications",
      description:
        "Upon completing courses and projects, earn industry-recognized certifications to showcase your expertise and enhance your career prospects.",
    },
  ];

  return (
    // <section id="portfolio" className="portfolio-section py-10 md:py-0 px-4">
    //   <div className="container mx-auto">
    //     <div className="text-center mb-12 mt-10">
    //       <h2 className="text-xl sm:pb-2 md:text-4xl lg:text-5xl font-medium">
    //         <span className="text-[#f6ac14]">Mastering</span>
    //         <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
    //           {" "}
    //           UI/UX Design:{" "}
    //         </span>
    //         <span className="text-[#0098f1]"> Create Intuitive and Engaging Experiences</span>
    //       </h2>
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    //       {courseData.map((course, index) => (
    //         <div
    //           key={index}
    //           className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
    //         >
    //           <a href="#">
    //             <div className="h-[210px] bg-white">
    //               <img
    //                 className="w-full h-full object-cover"
    //                 src={course.imgSrc}
    //                 alt={`Course ${index + 1}`}
    //               />
    //             </div>
    //             <div className="p-4 flex flex-col items-center justify-between">
    //               <h3 className="text-lg font-medium text-[#f6ac14] group-hover:text-gray-900">
    //                 {course.title}
    //               </h3>
    //               <p className="text-md text-gray-600 pt-4">
    //                 {course.description}
    //               </p>
    //             </div>
    //           </a>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section id="portfolio" className="portfolio-section py-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl font-medium">
            <span className="text-[#f6ac14]">The</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              Future of{" "}
            </span>
            <span className="text-[#0098f1]"> Learning</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
            >
              <a href="#">
              <div className="h-[180px]">
                  <img
                    className="w-full h-full bg-cover"
                    src={course.imgSrc}
                    alt={`Course ${index + 1}`}
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-between">
                  <h3 className="text-lg font-medium text-[#FF9B26] group-hover:text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-md text-gray-600 pt-4">
                    {course.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ui_UxCard;
