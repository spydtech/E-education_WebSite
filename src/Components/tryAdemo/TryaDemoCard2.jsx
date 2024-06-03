import React from 'react';
import { Link } from 'react-router-dom';
const TryaDemoCard2 = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="container mx-auto pt-12 pb-20">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Explore Our E-education Courses
          </h1>
          <p className="text-gray-700 text-lg text-center mb-12">
            Welcome to our platform! Start your journey of learning with our
            comprehensive E-education courses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to = '/pricing'>

            <div className="bg-white rounded-lg shadow-lg p-8 ring-2 ring-blue/10">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Courses</h2>
              <p className="text-gray-700">
    Welcome to our course selection! We invite you to explore our extensive array of educational offerings, encompassing diverse subjects and catering to varying levels of proficiency. Whether you're eager to delve into a specific field or broaden your knowledge across disciplines, our courses are designed to meet your learning goals. Take your time to peruse our offerings, and embark on a journey  with us.
</p>
            </div>
          </Link>
            <Link to = '/about_us'>

            <div className="bg-white rounded-lg shadow-lg p-8 ring-2 ring-blue/10">
              <h2 className="text-xl font-bold text-gray-800 mb-4">About Us</h2>
              <p className="text-gray-700">
    Delve into the narrative of E-education, our innovative platform committed to delivering inclusive and accessible educational opportunities. With a steadfast dedication to our mission of empowering individuals through learning, we strive to create an environment where knowledge knows no bounds. Join us in our journey to foster a community of lifelong learners and drive positive change through education.
</p>

            </div>
            </Link>
            <Link to = "/pricing">

            <div className="bg-white rounded-lg shadow-lg p-8 ring-2 ring-blue/10">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Explore</h2>
              <p className="text-gray-700">
    Welcome to our platform! We invite you to explore our extensive collection of courses, carefully curated to cover a diverse range of subjects and proficiency levels. Whether you're a beginner looking to dive into a new field or an expert seeking to deepen your knowledge, our courses cater to learners of all backgrounds and interests. Take your time to browse through our offerings and embark on a journey of discovery and learning with us.
</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TryaDemoCard2;
