import React from "react";

const AdvancephpCard = () => {
  const courseData = [
    {
      imgSrc: "https://img.freepik.com/free-vector/software-development-testing-abstract-concept-illustration_335657-3741.jpg?w=740",
      title: "Explore Advanced OOP Concepts",
      description: "Dive into advanced Object-Oriented Programming concepts, including inheritance, polymorphism, and design patterns to create robust and scalable PHP applications.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/software-quality-assurance-abstract-concept-illustration_335657-3722.jpg?w=740",
      title: "Master PHP Design Patterns",
      description: "Learn and implement various PHP design patterns such as Singleton, Factory, and Strategy to solve common problems and improve code maintainability.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/software-testing-quality-assurance-abstract-concept-illustration_335657-3844.jpg?w=740",
      title: "Optimize PHP Performance",
      description: "Gain insights into performance optimization techniques including caching, database indexing, and memory management to build high-performing PHP applications.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/software-development-testing-abstract-concept-illustration_335657-3741.jpg?w=740",
      title: "Build Scalable PHP Applications",
      description: "Learn how to build scalable applications using advanced techniques like microservices architecture, load balancing, and horizontal scaling with PHP.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/software-testing-abstract-concept-illustration_335657-3857.jpg?w=740",
      title: "Integrate with Modern PHP Frameworks",
      description: "Get hands-on experience with modern PHP frameworks such as Laravel, Symfony, and Zend to accelerate your development workflow and build robust applications.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/quality-assurance-abstract-concept-illustration_335657-3790.jpg?w=740",
      title: "Secure PHP Applications",
      description: "Understand advanced security practices to protect your PHP applications against common threats and vulnerabilities, ensuring data integrity and user safety.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section py-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl font-medium">
            <span className="text-[#f6ac14]">Mastering</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              Advanced PHP:{" "}
            </span>
            <span className="text-[#0098f1]"> Elevate Your Development Skills</span>
          </h2>
         {/*} <p className="text-lg text-[#31cb00] font-semibold mt-2">
            Take your PHP skills to the next level with our advanced courses. Explore complex concepts and enhance your backend development expertise.
          </p>*/}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
            >
              <a href="#">
                <div className="h-[210px] bg-[#0098f1]">
                  <img
                    className="w-full h-full object-cover"
                    src={course.imgSrc}
                    alt={`Project ${index + 1}`}
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-gray-900">
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

export default AdvancephpCard;
