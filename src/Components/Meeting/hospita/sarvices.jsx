import React from "react";

const Services = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Learn to build web applications using full stack development.",
      image: "path/to/image1.png", // Replace with your actual image paths
    },
    {
      id: 2,
      title: "Full Stack JavaScript",
      description: "Master JavaScript and its frameworks for web development.",
      image: "path/to/image2.png", // Replace with your actual image paths
    },
    {
      id: 3,
      title: "MEAN Stack Development",
      description: "Build dynamic websites using the MEAN stack.",
      image: "path/to/image3.png", // Replace with your actual image paths
    },
    {
      id: 4,
      title: "Full Stack Python",
      description: "Learn to create web applications using Python.",
      image: "path/to/image4.png", // Replace with your actual image paths
    },
    {
      id: 5,
      title: "Full Stack Java",
      description: "Develop robust applications with Java technologies.",
      image: "path/to/image5.png", // Replace with your actual image paths
    },
    {
      id: 6,
      title: "Dot Net Development",
      description: "Create applications using .NET technologies.",
      image: "path/to/image6.png", // Replace with your actual image paths
    },
    {
        id: 7,
        title: "Dot Net Development",
        description: "Create applications using .NET technologies.",
        image: "path/to/image6.png", // Replace with your actual image paths
      },
    //   {
    //     id: 8,
    //     title: "Dot Net Development",
    //     description: "Create applications using .NET technologies.",
    //     image: "path/to/image6.png", // Replace with your actual image paths
    //   },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Full Stack Development Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
