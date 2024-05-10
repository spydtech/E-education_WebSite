import React from 'react'

const MachineLearningCard = () => {
  return (
    <>
 <section id="portfolio" className="portfolio-section py-16 px-4">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold ">Mastering Machine Learning: Transform Your Skills</h2>
      <p className="text-lg text-indigo-500 font-semibold px-28 mt-2 ">
      Elevate your skills with our machine learning courses. Dive deep into principles and gain hands-on experience. Whether novice or pro, unlock your potential.
      </p>
    </div>
    {/* <div className="flex flex-col md:flex-row items-center mb-8">
      <button className="filter-button bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
        All
      </button>
      <button className="filter-button  bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
        Web Design
      </button>
      <button className="filter-button  bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
        App Development
      </button>
      <button className="filter-button  bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
        Branding
      </button>
    </div> */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
        <a href="/project-1">
          <img
            className="w-full h-60 object-cover"
            src="https://spacema-dev.com/elevate/assets/images/portfolio-1.png"
            alt="Project 1"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
          <div className="p-4 flex flex-col items-center justify-between relative z-10">
            <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
            Explore Course Catalog
            </h3>
            <span className="text-sm font-bold text-pink-500 group-hover:text-white pt-4">
            Browse our extensive catalog of Machine Learning courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.
            </span>
          </div>
        </a>
      </div>
      <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
        <a href="/project-2">
          <img
            className="w-full h-60 object-cover"
            src="https://spacema-dev.com/elevate/assets/images/portfolio-2.png"
            alt="Project 1"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
          <div className="p-4 flex flex-col items-center justify-between relative z-10">
            <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
            Enroll in Foundational Courses
            </h3>
            <span className="text-sm font-bold text-pink-500 group-hover:text-white pt-4">
            Start with foundational courses covering basic concepts, algorithms, and programming languages essential for Machine Learning. 
            </span>
          </div>
        </a>
      </div>
      <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
        <a href="/project-3">
          <img
            className="w-full h-60 object-cover"
            src="https://spacema-dev.com/elevate/assets/images/portfolio-3.png"
            alt="Project 1"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
          <div className="p-4 flex flex-col items-center justify-between relative z-10">
            <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
            Practice with Real-world Projects
            </h3>
            <span className="text-sm font-bold text-pink-500 group-hover:text-white pt-4">
            Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in data analysis, model building, and evaluation under the guidance of industry experts.
            </span>
          </div>
        </a>
      </div>
      <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
        <a href="/project-4">
          <img
            className="w-full h-60 object-cover"
            src="https://spacema-dev.com/elevate/assets/images/portfolio-4.png"
            alt="Project 1"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
          <div className="p-4 flex flex-col items-center justify-between relative z-10">
            <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
            Track Your Progress
            </h3>
            <span className="text-sm font-bold text-pink-500 group-hover:text-white pt-4">
            Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Machine Learning concepts as you advance through the courses.
            </span>
          </div>
        </a>
      </div>
      <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
        <a href="/project-5">
          <img
            className="w-full h-60 object-cover"
            src="https://spacema-dev.com/elevate/assets/images/portfolio-5.png"
            alt="Project 1"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
          <div className="p-4 flex flex-col items-center justify-between relative z-10">
            <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
            Specialize and Advance
            </h3>
            <span className="text-sm font-bold text-pink-500 group-hover:text-white pt-4">
            Choose specialized tracks or advanced courses to delve deeper into specific areas of Machine Learning, such as deep learning, natural language processing, or computer vision. Customize your learning path to align with your interests and career goals.
            </span>
          </div>
        </a>
      </div>
      <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
        <a href="/project-6">
          <img
            className="w-full h-60 object-cover"
            src="https://spacema-dev.com/elevate/assets/images/portfolio-6.png"
            alt="Project 1"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
          <div className="p-4 flex flex-col items-center justify-between relative z-10">
            <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
            Earn Recognized Certifications
            </h3>
            <span className="text-sm font-bold text-pink-500 group-hover:text-white pt-4">
            Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default MachineLearningCard