import React from 'react';
import { Link } from 'react-router-dom';
const TryaDemoCard2 = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="container mx-auto pt-12 pb-20">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Explore Our E-Education Courses
          </h1>
          <p className="text-gray-700 text-lg text-center mb-12">
            Welcome to our platform! Start your journey of learning with our
            comprehensive e-education courses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to = '/pricing'>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Courses</h2>
              <p className="text-gray-700">
                Browse through our wide range of courses covering various
                subjects and levels.
              </p>
            </div>
          </Link>
            <Link to = '/about_us'>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">About Us</h2>
              <p className="text-gray-700">
                Learn more about our platform, our mission, and the team behind
                it.
              </p>
            </div>
            </Link>
            <Link to = "/login">

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Contact</h2>
              <p className="text-gray-700">
                Have questions or feedback? Reach out to us. We'd love to hear
                from you!
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
