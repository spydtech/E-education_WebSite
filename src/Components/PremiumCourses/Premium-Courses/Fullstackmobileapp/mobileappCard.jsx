import React from "react";

const MobileappCard = () => {
  const courseData = [
    {
      href: "/oop-concepts",
      imgSrc: "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/app-category-trends.jpeg",
      title: "Explore Advanced OOP Concepts",
      description: "Dive into advanced Object-Oriented Programming concepts, including inheritance, polymorphism, and design patterns to create robust and scalable mobile applications.",
    },
    {
      href: "/app-design-patterns",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQan8WaCsAPKuHiftlimvz16pjyW1dC4RHu4g&s",
      title: "Master Mobile App Design Patterns",
      description: "Learn and implement various design patterns such as Singleton, Factory, and Strategy to solve common problems and improve code maintainability in mobile app development.",
    },
    {
      href: "/app-performance",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVlS-BJv3RKMiBOLVTEv196TQvqBlAkYzRA&s",
      title: "Optimize Mobile App Performance",
      description: "Gain insights into performance optimization techniques including caching, database indexing, and memory management to build high-performing mobile applications.",
    },
    {
      href: "/scalable-applications",
      imgSrc: "https://helios-i.mashable.com/imagery/articles/036SM7saRgnSGmvT3XNLYXQ/hero-image.fill.size_1200x900.v1623372406.jpg",
      title: "Build Scalable Mobile Applications",
      description: "Learn how to build scalable applications using advanced techniques like microservices architecture, load balancing, and horizontal scaling in mobile app development.",
    },
    {
      href: "/modern-frameworks",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzB3bS2psJF1lqzTj3Pg2HTuGIsAtRESANg&s",
      title: "Integrate with Modern Mobile App Frameworks",
      description: "Get hands-on experience with modern mobile app frameworks such as React Native, Flutter, and Xamarin to accelerate your development workflow and build robust applications.",
    },
    {
      href: "/app-security",
      imgSrc: "https://www.odozitech.com/wp-content/uploads/2021/04/mobileapp.jpg",
      title: "Secure Mobile Applications",
      description: "Understand advanced security practices to protect your mobile applications against common threats and vulnerabilities, ensuring data integrity and user safety.",
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
              Advanced Mobile App Development:{" "}
            </span>
            <span className="text-[#0098f1]"> Elevate Your Development Skills</span>
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

export default MobileappCard;
