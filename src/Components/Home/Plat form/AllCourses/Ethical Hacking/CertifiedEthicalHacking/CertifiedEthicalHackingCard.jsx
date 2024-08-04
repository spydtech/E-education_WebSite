import React from "react";

const CertifiedEthicalHackingCard = () => {
  const courseData = [
    {
      imgSrc: "https://img.freepik.com/premium-vector/people-working-concept-illustration_1283348-4222.jpg?w=740",
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of Ethical Hacking courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
      gradientFrom: "from-green-400",
      gradientTo: "to-blue-500",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/steal-data-concept-with-man-desk_23-2148555128.jpg?t=st=1722363436~exp=1722367036~hmac=43ebd5ed7ae5171c5da017c1b798f5e9255c9f977ab910c1b5b3b093ab3492c7&w=900",
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts, algorithms, and programming languages essential for Ethical Hacking.",
      gradientFrom: "from-yellow-400",
      gradientTo: "to-red-500",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/hand-drawn-multitask-business-woman-illustration_23-2148818823.jpg?t=st=1722364111~exp=1722367711~hmac=ee8fd17ebed20a03ac61a807d857adafbd5a1b04842faffa23032bb6e267c84f&w=900",
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in data analysis, model building, and evaluation under the guidance of industry experts.",
      gradientFrom: "from-pink-500",
      gradientTo: "to-purple-500",
    },
    {
      imgSrc: "https://img.freepik.com/premium-vector/vector-illustration-programmer-guycartoon-scene-programmer-sitting-table-with-computer-laptop-desk-lampwriting-programand-plant-pot-isolated-blue-background_812561-1378.jpg?w=900",
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Ethical Hacking concepts as you advance through the courses.",
      gradientFrom: "from-purple-400",
      gradientTo: "to-indigo-500",
    },
    {
      imgSrc: "https://img.freepik.com/premium-vector/vector-illustration-view-highrise-buildings-from-river-bank-new-york-houses-built-by-lake-rest-shore-with-grass-trees-with-clear-weather_812561-576.jpg?w=1060",
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of Ethical Hacking, such as penetration testing, network security, or digital forensics. Customize your learning path to align with your interests and career goals.",
      gradientFrom: "from-red-400",
      gradientTo: "to-yellow-500",
    },
    {
      imgSrc: "https://img.freepik.com/premium-vector/programmer-work-with-code-develop-application-website-computer-freelance-writing-code_258153-635.jpg?w=826",
      title: "Earn Recognized Certifications",
      description:
        "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
      gradientFrom: "from-blue-400",
      gradientTo: "to-green-500",
    },
  ];

  return (
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
          {courseData.map((item, index) => (
            <div
              key={index}
              className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
            >
              <a href="#">
                <div className={`relative h-[210px] bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo}`}>
                  <img
                    className="w-full h-full object-cover"
                    src={item.imgSrc}
                    alt={item.title}
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-md text-gray-600 pt-4">
                    {item.description}
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

export default CertifiedEthicalHackingCard;
