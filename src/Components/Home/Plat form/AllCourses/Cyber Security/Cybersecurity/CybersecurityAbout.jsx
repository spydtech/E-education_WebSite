import React from "react";

const CybersecurityAbout = () => {
  return (
    <div className="mx-auto w-full p-8 bg-gradient-to-br from-blue-300 via-teal-500 to-green-600">
      <div className="text-center mb-6">
        <h1 className="text-gray-800 text-3xl font-bold">
          About The Cybersecurity Cours
        </h1>
      </div>
      <div className="py-4 text-center">
        <h2 className="md:text-5xl text-2xl font font-semibold text-white">
          Discover the
          <span className="block text-violet-800 my-2">
            Cybersecurity Program
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap -mx-4 items-center pb-6 justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-teal-600">
                Career Assistance
              </h3>
              <p className="text-gray-700">
                Stay ahead with access to one-on-one career counseling sessions
                and mock interviews with industry professionals.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-teal-600">
                Student Support
              </h3>
              <p className="text-gray-700">
                Access student support via support@cybersecurity.com or through
                the "ask us?" option on our learning platform for urgent
                queries.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-teal-600">
                24/7 Support
              </h3>
              <p className="text-gray-700">
                Our support team is available 24/7 to assist you with any
                queries or issues you may face during the course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityAbout;
