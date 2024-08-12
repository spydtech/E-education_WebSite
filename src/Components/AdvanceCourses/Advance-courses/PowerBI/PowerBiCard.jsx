import React from "react";

const PowerBiCard = () => {
  return (
    <section id="portfolio" className="portfolio-section py-10 md:py-0 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl font-medium">
            <span className="text-[#f6ac14]">Mastering</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              Data Visualization with Power BI{" "}
            </span>
            <span className="text-[#0098f1]"> Create Impactful Visualizations</span>
          </h2>
          {/*<p className="text-lg text-[#31cb00] font-semibold mt-2">
            Enhance your data visualization skills with our comprehensive Power BI courses. Dive deep into Power BI services and gain hands-on experience. Whether novice or pro, create impactful data visualizations with confidence.
          </p>*/}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden">
            <a href="/powerbi-course-catalog">
              <div className="h-[210px] bg-[#0098f1]">
                <img
                  className="w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241207.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid"
                  alt="Course Catalog"
                />
              </div>
              <div className="p-4 flex flex-col items-center justify-between">
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-gray-900">
                  Explore Course Catalog
                </h3>
                <p className="text-md text-gray-600 pt-4">
                  Browse our extensive catalog of Power BI courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.
                </p>
              </div>
            </a>
          </div>
          <div className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden">
            <a href="/powerbi-foundational-courses">
              <div className="h-[210px] bg-[#0098f1]">
                <img
                  className="w-full h-full object-cover"
                  src="https://img.freepik.com/premium-photo/abstract-digital-technology-background-illustration_1028938-138148.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid"
                  alt="Foundational Courses"
                />
              </div>
              <div className="p-4 flex flex-col items-center justify-between">
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-gray-900">
                  Enroll in Foundational Courses
                </h3>
                <p className="text-md text-gray-600 pt-4">
                  Start with foundational courses covering basic concepts, tools, and methodologies essential for Power BI data visualization.
                </p>
              </div>
            </a>
          </div>
          <div className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden">
            <a href="/powerbi-projects">
              <div className="h-[210px] bg-[#0098f1]">
                <img
                  className="w-full h-full object-cover"
                  src="https://img.freepik.com/free-vector/people-working-with-technology-isometric-style_52683-16806.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid"
                  alt="Real-world Projects"
                />
              </div>
              <div className="p-4 flex flex-col items-center justify-between">
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-gray-900">
                  Practice with Real-world Projects
                </h3>
                <p className="text-md text-gray-600 pt-4">
                  Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in Power BI services, data modeling, and report design under the guidance of industry experts.
                </p>
              </div>
            </a>
          </div>
          <div className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden">
            <a href="/powerbi-progress-tracking">
              <div className="h-[210px] bg-[#0098f1]">
                <img
                  className="w-full h-full object-cover"
                  src="https://img.freepik.com/free-vector/isometric-financial-analysis_1262-16542.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid"
                  alt="Progress Tracking"
                />
              </div>
              <div className="p-4 flex flex-col items-center justify-between">
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-gray-900">
                  Track Your Progress
                </h3>
                <p className="text-md text-gray-600 pt-4">
                  Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Power BI services as you advance through the courses.
                </p>
              </div>
            </a>
          </div>
          <div className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden">
            <a href="/powerbi-specialize">
              <div className="h-[210px] bg-[#0098f1]">
                <img
                  className="w-full h-full object-cover"
                  src="https://img.freepik.com/free-vector/isometric-data-visialization-concept-illustration_23-2148074448.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid"
                  alt="Specialize and Advance"
                />
              </div>
              <div className="p-4 flex flex-col items-center justify-between">
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-gray-900">
                  Specialize and Advance
                </h3>
                <p className="text-md text-gray-600 pt-4">
                  Choose specialized tracks or advanced courses to delve deeper into specific areas of Power BI, such as data analytics, dashboard creation, or Power Query. Customize your learning path to align with your interests and career goals.
                </p>
              </div>
            </a>
          </div>
          <div className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden">
            <a href="/powerbi-certifications">
              <div className="h-[210px] bg-[#0098f1]">
                <img
                  className="w-full h-full object-cover"
                  src="https://img.freepik.com/premium-photo/computer-monitor-with-blue-screen-that-says-graph-it_1103290-80279.jpg?ga=GA1.1.124895894.1693499002&semt=ais_hybrid"
                  alt="Certifications"
                />
              </div>
              <div className="p-4 flex flex-col items-center justify-between">
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-gray-900">
                  Earn Recognized Certifications
                </h3>
                <p className="text-md text-gray-600 pt-4">
                  Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerBiCard;
