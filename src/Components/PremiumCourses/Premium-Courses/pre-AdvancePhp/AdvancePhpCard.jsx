import React from "react";

const AdvancedPhpCard = () => {
  return (
    <section id="portfolio" className="portfolio-section py-10 md:py-0 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl font-medium">
            <span className="text-[#f6ac14]">Advanced</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              PHP Development{" "}
            </span>
            <span className="text-[#0098f1]"> Skills</span>
          </h2>
         {/*} <p className="text-md text-gray-600 pt-4">
            Take your PHP expertise to the next level with our advanced courses.
            Master complex concepts and develop high-performance, scalable web
            applications.
          </p>*/}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              imgSrc: "https://img.freepik.com/premium-photo/php-programming-language-developing-programming-coding-technologiescyber-space-concept_161452-4583.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
              title: "Dive into PHP Frameworks",
              description: "Learn to build robust applications using popular PHP frameworks like Laravel and Symfony. Understand their architecture and best practices.",
            },
            {
              imgSrc: "https://img.freepik.com/free-photo/technology-circuit-processor-innovation-network-concept_53876-124249.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
              title: "Master API Integration",
              description: "Enhance your applications by integrating with various APIs. Learn about RESTful services, OAuth, and third-party API integration.",
            },
            {
              imgSrc: "https://img.freepik.com/premium-photo/laptop-with-screen-that-says-world-it_1243200-19137.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
              title: "Performance Optimization",
              description: "Learn advanced techniques for optimizing the performance of your PHP applications. Dive into caching, profiling, and SQL optimization.",
            },
            {
              imgSrc: "https://img.freepik.com/premium-photo/php-programming-text_272306-140.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
              title: "Design Scalable Architecture",
              description: "Understand the principles of scalable architecture. Learn to design systems that handle increased load and ensure high availability.",
            },
            {
              imgSrc: "https://img.freepik.com/premium-photo/programming-language-php-code-with-person-laptop_102583-4799.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
              title: "Implement Security Best Practices",
              description: "Secure your applications by learning about common vulnerabilities and how to protect against them. Explore authentication, encryption, and secure coding practices.",
            },
            {
              imgSrc: "https://img.freepik.com/free-vector/illustration-technology-vector_53876-18164.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
              title: "Conduct Code Reviews",
              description: "Learn how to conduct effective code reviews to ensure code quality and consistency. Understand the principles of clean code and collaborative development.",
            },
          ].map((course, index) => (
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

export default AdvancedPhpCard;
