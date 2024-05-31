// import React from "react";

// const MobileappCard = () => {
//   return (
//     <>
//       <section id="portfolio" className="portfolio-section py-16 px-4">
//         <div className="container mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold">
//               Mastering Advanced PHP: Elevate Your Development Skills
//             </h2>
//             <p className="text-lg text-[#f9ac13] font-semibold mt-2">
//               Take your PHP skills to the next level with our advanced courses.
//               Explore complex concepts and enhance your backend development
//               expertise.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-1">
//                 <img
//                   className="w-full h-60 object-cover"
//                   src="https://img.freepik.com/free-vector/software-development-testing-abstract-concept-illustration_335657-3741.jpg?w=740"
//                   alt="Project 1"
//                 />
//                 <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#d62828] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div className="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Explore Advanced OOP Concepts
//                   </h3>
//                   <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
//                     Dive into advanced Object-Oriented Programming concepts,
//                     including inheritance, polymorphism, and design patterns to
//                     create robust and scalable PHP applications.
//                   </span>
//                 </div>
//               </a>
//             </div>
//             <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-2">
//                 <img
//                   className="w-full h-60 object-cover"
//                   src="https://img.freepik.com/free-vector/software-quality-assurance-abstract-concept-illustration_335657-3722.jpg?w=740"
//                   alt="Project 2"
//                 />
//                 <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#d62828] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div className="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Master PHP Design Patterns
//                   </h3>
//                   <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
//                     Learn and implement various PHP design patterns such as
//                     Singleton, Factory, and Strategy to solve common problems
//                     and improve code maintainability.
//                   </span>
//                 </div>
//               </a>
//             </div>
//             <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-3">
//                 <img
//                   className="w-full h-60 object-cover"
//                   src="https://img.freepik.com/free-vector/software-testing-quality-assurance-abstract-concept-illustration_335657-3844.jpg?w=740"
//                   alt="Project 3"
//                 />
//                 <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#d62828] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div className="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Optimize PHP Performance
//                   </h3>
//                   <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
//                     Gain insights into performance optimization techniques
//                     including caching, database indexing, and memory management
//                     to build high-performing PHP applications.
//                   </span>
//                 </div>
//               </a>
//             </div>
//             <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-4">
//                 <img
//                   className="w-full h-60 object-cover"
//                   src="https://img.freepik.com/free-vector/software-development-testing-abstract-concept-illustration_335657-3741.jpg?w=740"
//                   alt="Project 4"
//                 />
//                 <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#d62828] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div className="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Build Scalable PHP Applications
//                   </h3>
//                   <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
//                     Learn how to build scalable applications using advanced
//                     techniques like microservices architecture, load balancing,
//                     and horizontal scaling with PHP.
//                   </span>
//                 </div>
//               </a>
//             </div>
//             <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-5">
//                 <img
//                   className="w-full h-60 object-cover"
//                   src="https://img.freepik.com/free-vector/software-testing-abstract-concept-illustration_335657-3857.jpg?w=740"
//                   alt="Project 5"
//                 />
//                 <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#d62828] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div className="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Integrate with Modern PHP Frameworks
//                   </h3>
//                   <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
//                     Get hands-on experience with modern PHP frameworks such as
//                     Laravel, Symfony, and Zend to accelerate your development
//                     workflow and build robust applications.
//                   </span>
//                 </div>
//               </a>
//             </div>
//             <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-6">
//                 <img
//                   className="w-full h-60 object-cover"
//                   src="https://img.freepik.com/free-vector/quality-assurance-abstract-concept-illustration_335657-3790.jpg?w=740"
//                   alt="Project 6"
//                 />
//                 <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#d62828] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div className="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Secure PHP Applications
//                   </h3>
//                   <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
//                     Understand advanced security practices to protect your PHP
//                     applications against common threats and vulnerabilities,
//                     ensuring data integrity and user safety.
//                   </span>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default MobileappCard;

import React from "react";

const MobileappCard = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-section py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Mastering Advanced Mobile App Development: Elevate Your
              Development Skills
            </h2>
            <p className="text-lg text-[#f9ac13] font-semibold mt-2">
              Take your mobile app development skills to the next level with our
              advanced courses. Explore complex concepts and enhance your
              expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-1">
                <img
                  className="w-full h-60 object-cover"
                  src="https://www.mindinventory.com/blog/wp-content/uploads/2022/10/app-category-trends.jpeg"
                  alt="Project 1"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#ea8dd4] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Explore Advanced OOP Concepts
                  </h3>
                  <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
                    Dive into advanced Object-Oriented Programming concepts,
                    including inheritance, polymorphism, and design patterns to
                    create robust and scalable mobile applications.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-2">
                <img
                  className="w-full h-60 object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQan8WaCsAPKuHiftlimvz16pjyW1dC4RHu4g&s"
                  alt="Project 2"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#ff7f51] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Master Mobile App Design Patterns
                  </h3>
                  <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
                    Learn and implement various design patterns such as
                    Singleton, Factory, and Strategy to solve common problems
                    and improve code maintainability in mobile app development.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-3">
                <img
                  className="w-full h-60 object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVlS-BJv3RKMiBOLVTEv196TQvqBlAkYzRA&s"
                  alt="Project 3"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#f80500] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Optimize Mobile App Performance
                  </h3>
                  <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
                    Gain insights into performance optimization techniques
                    including caching, database indexing, and memory management
                    to build high-performing mobile applications.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-4">
                <img
                  className="w-full h-60 object-cover"
                  src="https://helios-i.mashable.com/imagery/articles/036SM7saRgnSGmvT3XNLYXQ/hero-image.fill.size_1200x900.v1623372406.jpg"
                  alt="Project 4"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#cc25a2] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Build Scalable Mobile Applications
                  </h3>
                  <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
                    Learn how to build scalable applications using advanced
                    techniques like microservices architecture, load balancing,
                    and horizontal scaling in mobile app development.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-5">
                <img
                  className="w-full h-60 object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzB3bS2psJF1lqzTj3Pg2HTuGIsAtRESANg&s"
                  alt="Project 5"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#567147] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Integrate with Modern Mobile App Frameworks
                  </h3>
                  <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
                    Get hands-on experience with modern mobile app frameworks
                    such as React Native, Flutter, and Xamarin to accelerate
                    your development workflow and build robust applications.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-6">
                <img
                  className="w-full h-60 object-cover"
                  src="https://www.odozitech.com/wp-content/uploads/2021/04/mobileapp.jpg"
                  alt="Project 6"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#41ead4] opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                    Secure Mobile Applications
                  </h3>
                  <span className="text-sm font-bold text-[#f9ac13] group-hover:text-white pt-4">
                    Understand advanced security practices to protect your
                    mobile applications against common threats and
                    vulnerabilities, ensuring data integrity and user safety.
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileappCard;
