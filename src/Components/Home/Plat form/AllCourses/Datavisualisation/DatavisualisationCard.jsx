// import React from "react";

// const DatavisualisationCard = () => {
//   return (
//     <>
//       <section id="portfolio" className="portfolio-section py-16 px-4">
//         <div className="container mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold ">
//               Mastering Machine Learning: Transform Your Skills
//             </h2>
//             <p className="text-lg text-indigo-500  font-semibold  mt-2 ">
//               Elevate your skills with our machine learning courses. Dive deep
//               into principles and gain hands-on experience. Whether novice or
//               pro, unlock your potential.
//             </p>
//           </div>
//           {/* <div className="flex flex-col md:flex-row items-center mb-8">
//       <button className="filter-button bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
//         All
//       </button>
//       <button className="filter-button  bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
//         Web Design
//       </button>
//       <button className="filter-button  bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
//         App Development
//       </button>
//       <button className="filter-button  bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
//         Branding
//       </button>
//     </div> */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-1">
//                 <img
//                   className="w-full h-60 object-cover"
//                   src="https://spacema-dev.com/elevate/assets/images/portfolio-1.png"
//                   alt="Project 1"
//                 />
//                 <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div className="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Explore Course Catalog
//                   </h3>
//                   <span className="text-sm font-bold text-[#219ebc] group-hover:text-white pt-4">
//                     Browse our extensive catalog of Machine Learning courses.
//                     Discover beginner-friendly to advanced-level programs
//                     designed to accommodate learners of all backgrounds.
//                   </span>
//                 </div>
//               </a>
//             </div>
//             <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-2">
//                 <img
//                   className="w-full h-60 object-cover"
//                   src="https://spacema-dev.com/elevate/assets/images/portfolio-2.png"
//                   alt="Project 1"
//                 />
//                 <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div className="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Enroll in Foundational Courses
//                   </h3>
//                   <span className="text-sm font-bold text-[#219ebc] group-hover:text-white pt-4">
//                     Start with foundational courses covering basic concepts,
//                     algorithms, and programming languages essential for Machine
//                     Learning.
//                   </span>
//                 </div>
//               </a>
//             </div>
//             <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-3">
//                 <img
//                   className="w-full h-60 object-cover"
//                   src="https://spacema-dev.com/elevate/assets/images/portfolio-3.png"
//                   alt="Project 1"
//                 />
//                 <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div className="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Practice with Real-world Projects
//                   </h3>
//                   <span className="text-sm font-bold text-[#219ebc] group-hover:text-white pt-4">
//                     Apply your knowledge by working on hands-on projects
//                     tailored to real-world scenarios. Gain practical experience
//                     in data analysis, model building, and evaluation under the
//                     guidance of industry experts.
//                   </span>
//                 </div>
//               </a>
//             </div>
//             <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-4">
//                 <img
//                   className="w-full h-60 object-cover"
//                   src="https://spacema-dev.com/elevate/assets/images/portfolio-4.png"
//                   alt="Project 1"
//                 />
//                 <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div className="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Track Your Progress
//                   </h3>
//                   <span className="text-sm font-bold text-[#219ebc] group-hover:text-white pt-4">
//                     Monitor your progress with intuitive dashboards and tracking
//                     tools. Set goals, track milestones, and measure your
//                     proficiency in various Machine Learning concepts as you
//                     advance through the courses.
//                   </span>
//                 </div>
//               </a>
//             </div>
//             <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-5">
//                 <img
//                   className="w-full h-60 object-cover"
//                   src="https://spacema-dev.com/elevate/assets/images/portfolio-5.png"
//                   alt="Project 1"
//                 />
//                 <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div className="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Specialize and Advance
//                   </h3>
//                   <span className="text-sm font-bold text-[#219ebc] group-hover:text-white pt-4">
//                     Choose specialized tracks or advanced courses to delve
//                     deeper into specific areas of Machine Learning, such as deep
//                     learning, natural language processing, or computer vision.
//                     Customize your learning path to align with your interests
//                     and career goals.
//                   </span>
//                 </div>
//               </a>
//             </div>
//             <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
//               <a href="/project-6">
//                 <img
//                   className="w-full h-60 object-cover"
//                   src="https://spacema-dev.com/elevate/assets/images/portfolio-6.png"
//                   alt="Project 1"
//                 />
//                 <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
//                 <div className="p-4 flex flex-col items-center justify-between relative z-10">
//                   <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
//                     Earn Recognized Certifications
//                   </h3>
//                   <span className="text-sm font-bold text-[#219ebc] group-hover:text-white pt-4">
//                     Upon successful completion of courses and projects, earn
//                     industry-recognized certifications to showcase your
//                     expertise to employers and enhance your career prospects.
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

// export default DatavisualisationCard;

import React from "react";

const DatavisualisationCard = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-section py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-lora ">
              Mastering Data Visualization: Enhance Your Insights
            </h2>
            <p className="text-lg text-indigo-500 font-semibold mt-2">
              Elevate your skills with our data visualization courses. Dive deep
              into techniques and tools to create compelling visual narratives.
              Whether novice or pro, unlock your potential.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-1">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?size=626&ext=jpg&ga=GA1.1.2040392383.1714388533&semt=sph"
                  alt="Project 1"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg  text-blue-500  font-medium  font-lora text-txt group-hover:text-gray-dark">
                    Explore Course Catalog
                  </h3>
                  <span className="text-sm font-bold text-[#219ebc] group-hover:text-white pt-4">
                    Browse our extensive catalog of Data Visualization courses.
                    Discover beginner-friendly to advanced-level programs
                    designed to accommodate learners of all backgrounds.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-2">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_23-2148865274.jpg?size=626&ext=jpg&ga=GA1.1.2040392383.1714388533&semt=sph"
                  alt="Project 2"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-lora  text-blue-500  font-medium text-txt group-hover:text-gray-dark">
                    Enroll in Foundational Courses
                  </h3>
                  <span className="text-sm font-bold text-[#219ebc] group-hover:text-white pt-4">
                    Start with foundational courses covering basic principles,
                    tools, and techniques essential for Data Visualization.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-3">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/hand-drawn-innovation-concept_52683-76273.jpg?size=626&ext=jpg&ga=GA1.1.2040392383.1714388533&semt=sph"
                  alt="Project 3"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-blue-500  font-lora text-txt group-hover:text-gray-dark">
                    Practice with Real-world Projects
                  </h3>
                  <span className="text-sm font-bold text-[#219ebc] group-hover:text-white pt-4">
                    Apply your knowledge by working on hands-on projects
                    tailored to real-world scenarios. Gain practical experience
                    in data storytelling, dashboard design, and interactive
                    visualizations under the guidance of industry experts.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-4">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/video-conferencing-concept-landing-page_52683-12189.jpg?size=626&ext=jpg&ga=GA1.1.2040392383.1714388533&semt=sph"
                  alt="Project 4"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg  font-lora text-blue-500  font-lorafont-medium text-txt group-hover:text-gray-dark">
                    Track Your Progress
                  </h3>
                  <span className="text-sm font-bold text-[#219ebc] group-hover:text-white pt-4">
                    Monitor your progress with intuitive dashboards and tracking
                    tools. Set goals, track milestones, and measure your
                    proficiency in various Data Visualization techniques as you
                    advance through the courses.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-5">
                <img
                  className="w-full h-60 object-cover"
                  src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?size=626&ext=jpg&ga=GA1.1.2040392383.1714388533&semt=sph"
                  alt="Project 5"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg  text-blue-500  font-lora font-medium text-txt group-hover:text-gray-dark">
                    Specialize and Advance
                  </h3>
                  <span className="text-sm font-bold text-[#219ebc] group-hover:text-white pt-4">
                    Choose specialized tracks or advanced courses to delve
                    deeper into specific areas of Data Visualization, such as
                    interactive dashboards, geospatial analysis, or data
                    storytelling. Customize your learning path to align with
                    your interests and career goals.
                  </span>
                </div>
              </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <a href="/project-6">
                <img
                  className="w-full h-60 object-cover"
                  src="https://spacema-dev.com/elevate/assets/images/portfolio-6.png"
                  alt="Project 6"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg  text-blue-500  font-lora font-medium text-txt group-hover:text-gray-dark">
                    Earn Recognized Certifications
                  </h3>
                  <span className="text-sm font-bold text-[#219ebc] group-hover:text-white pt-4">
                    Upon successful completion of courses and projects, earn
                    industry-recognized certifications to showcase your
                    expertise to employers and enhance your career prospects.
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

export default DatavisualisationCard;
