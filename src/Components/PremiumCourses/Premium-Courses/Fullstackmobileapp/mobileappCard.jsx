import React from "react";
import img2 from '../../../../assetss/professionalimages/image14.png';
import { GoArrowUpRight } from "react-icons/go";

const MobileappCard = () => {
  const courseData = [
    {
      href: "/oop-concepts",
      imgSrc: `${img2}`,
      title: "Explore Advanced OOP Concepts",
      description: "Dive into advanced Object-Oriented Programming concepts, including inheritance, polymorphism, and design patterns to create robust and scalable mobile applications.",
    },
    {
      href: "/app-design-patterns",
      imgSrc: `${img2}`,
      title: "Master Mobile App Design Patterns",
      description: "Learn and implement various design patterns such as Singleton, Factory, and Strategy to solve common problems and improve code maintainability in mobile app development.",
    },
    {
      href: "/app-performance",
      imgSrc: `${img2}`,
      title: "Optimize Mobile App Performance",
      description: "Gain insights into performance optimization techniques including caching, database indexing, and memory management to build high-performing mobile applications.",
    },
    {
      href: "/scalable-applications",
      imgSrc: `${img2}`,
      title: "Build Scalable Mobile Applications",
      description: "Learn how to build scalable applications using advanced techniques like microservices architecture, load balancing, and horizontal scaling in mobile app development.",
    },
    {
      href: "/modern-frameworks",
      imgSrc: `${img2}`,
      title: "Integrate with Modern Mobile App Frameworks",
      description: "Get hands-on experience with modern mobile app frameworks such as React Native, Flutter, and Xamarin to accelerate your development workflow and build robust applications.",
    },
    {
      href: "/app-security",
      imgSrc: `${img2}`,
      title: "Secure Mobile Applications",
      description: "Understand advanced security practices to protect your mobile applications against common threats and vulnerabilities, ensuring data integrity and user safety.",
    },
  ];

  return (
    // <section id="portfolio" className="portfolio-section py-10 px-4">
    //   <div className="container mx-auto">
    //     <div className="text-center mb-12">
    //       <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl font-medium">
    //         <span className="text-[#f6ac14]">Mastering</span>
    //         <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
    //           {" "}
    //           Advanced Mobile App Development:{" "}
    //         </span>
    //         <span className="text-[#0098f1]"> Elevate Your Development Skills</span>
    //       </h2>
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    //       {courseData.map((course, index) => (
    //         <div
    //           key={index}
    //           className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
    //         >
    //           <a href={course.href}>
    //             {/* <div className="h-[210px]">
    //               <img
    //                 className="w-full h-full object-cover"
    //                 src={course.imgSrc}
    //                 alt={course.title}
    //               />
    //             </div> */}
    //             <div className="h-[180px]">
    //               <img
    //                 className="w-full h-full bg-cover"
    //                 src={course.imgSrc} 
    //                 alt={`Course ${index + 1}`}
    //               />
    //             </div>
    //             <div className="p-4 flex flex-col items-center justify-between">
    //               <h3 className="text-lg flex justify-center items-center font-medium text-[#f6ac14] group-hover:text-black">
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

export default MobileappCard;
