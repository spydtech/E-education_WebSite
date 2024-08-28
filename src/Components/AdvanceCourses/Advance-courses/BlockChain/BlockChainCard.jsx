import React from "react";

const BlockChainCard = () => {
  const courseData = [
    {
      href: "/blockchain-course-catalog",
      imgSrc: "https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480220.jpg?t=st=1722979497~exp=1722983097~hmac=154a4ede4b079d85ce3e5cbe86932e6529a007344fb431e7929d9098c1b0e864&w=360",
      title: "Explore Course Catalog",
      description: "Browse our extensive catalog of blockchain courses. Discover programs designed for all skill levels, from beginner to advanced.",
    },
    {
      href: "/blockchain-foundational-courses",
      imgSrc: "https://img.freepik.com/free-photo/3d-render-modern-technology-background-with-low-poly-design_1048-15445.jpg?t=st=1722979541~exp=1722983141~hmac=965cce7839734faaeeedf8083660d306dfa73a7fc6e17dc75ec6974b594c6929&w=826",
      title: "Enroll in Foundational Courses",
      description: "Start with foundational courses that cover blockchain basics, tools, and methodologies essential for development.",
    },
    {
      href: "/blockchain-projects",
      imgSrc: "https://img.freepik.com/free-photo/3d-render-network-communications-background-with-connecting-lines-dots_1048-14022.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Practice with Real-world Projects",
      description: "Apply your knowledge with hands-on projects that mirror real-world scenarios. Gain practical experience in blockchain development and smart contracts.",
    },
    {
      href: "/blockchain-progress-tracking",
      imgSrc: "https://img.freepik.com/premium-photo/large-piece-metal-with-word-x-it_972969-62009.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Track Your Progress",
      description: "Monitor your progress with intuitive dashboards. Set goals, track milestones, and measure your expertise as you advance through the courses.",
    },
    {
      href: "/blockchain-specialize",
      imgSrc: "https://img.freepik.com/free-vector/vivid-neon-lights-background_23-2148488876.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Specialize and Advance",
      description: "Choose specialized tracks or advanced courses to deepen your knowledge in areas like smart contracts, blockchain frameworks, or performance optimization. Customize your learning path to fit your interests and career goals.",
    },
    {
      href: "/blockchain-certifications",
      imgSrc: "https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176818.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid",
      title: "Earn Recognized Certifications",
      description: "Upon completing courses and projects, earn industry-recognized certifications to showcase your expertise and enhance your career prospects.",
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
              Blockchain:{" "}
            </span>
            <span className="text-[#0098f1]"> Develop Secure and Decentralized Applications</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
            >
              <a href={course.href}>
                <div className="h-[210px] bg-[#0098f1]">
                  <img
                    className="w-full h-full object-cover"
                    src={course.imgSrc}
                    alt={course.title}
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

export default BlockChainCard;
