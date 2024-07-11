import React from "react";

const AdvanceEthicalHackingCard = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-section py-16 px-4">
        <div className="container mx-auto">
          <div className=" mb-12">
            <h2 className="text-4xl font-bold font text-violet-800">
              Mastering Ethical Hacking: Transform Your Skills
            </h2>
            <p className="text-lg text-orange-600 font-semibold md:px-28 mt-2">
              Elevate your skills with our Ethical Hacking courses. Dive deep
              into principles and gain hands-on experience. Whether novice or
              pro, unlock your potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
             
                src: "https://spacema-dev.com/elevate/assets/images/portfolio-1.png",
                title: "Explore Course Catalog",
                description:
                  "Browse our extensive catalog of Ethical Hacking courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
                gradientFrom: "from-green-400",
                gradientTo: "to-blue-500",
              },
              {

                src: "https://spacema-dev.com/elevate/assets/images/portfolio-2.png",
                title: "Enroll in Foundational Courses",
                description:
                  "Start with foundational courses covering basic concepts, algorithms, and programming languages essential for Ethical Hacking.",
                gradientFrom: "from-yellow-400",
                gradientTo: "to-red-500",
              },
              {

                src: "https://spacema-dev.com/elevate/assets/images/portfolio-3.png",
                title: "Practice with Real-world Projects",
                description:
                  "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in data analysis, model building, and evaluation under the guidance of industry experts.",
                gradientFrom: "from-pink-500",
                gradientTo: "to-purple-500",
              },
              {
              
                src: "https://spacema-dev.com/elevate/assets/images/portfolio-4.png",
                title: "Track Your Progress",
                description:
                  "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Machine Learning concepts as you advance through the courses.",
                gradientFrom: "from-purple-400",
                gradientTo: "to-indigo-500",
              },
              {
           
                src: "https://spacema-dev.com/elevate/assets/images/portfolio-5.png",
                title: "Specialize and Advance",
                description:
                  "Choose specialized tracks or advanced courses to delve deeper into specific areas of Ethical Hacking, such as penetration testing, network security, or digital forensics. Customize your learning path to align with your interests and career goals.",
                gradientFrom: "from-red-400",
                gradientTo: "to-yellow-500",
              },
              {
             
                src: "https://spacema-dev.com/elevate/assets/images/portfolio-6.png",
                title: "Earn Recognized Certifications",
                description:
                  "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
                gradientFrom: "from-blue-400",
                gradientTo: "to-green-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden"
              >
                <a>
                  <img
                    className="w-full h-60 object-cover"
                    src={item.src}
                    alt={item.title}
                  />
                  <div
                    className={`absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} opacity-30 transition duration-300 ease-in-out group-hover:opacity-70`}
                  ></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                      {item.title}
                    </h3>
                    <span className="text-sm font-bold text-[#219ebc] group-hover:text-white pt-4">
                      {item.description}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvanceEthicalHackingCard;
