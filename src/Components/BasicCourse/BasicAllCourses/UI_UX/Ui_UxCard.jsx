import React from "react";

const Ui_UxCard = () => {
  const courseData = [
    {
      imgSrc:
        "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?t=st=1722896046~exp=1722899646~hmac=a8bdcbc1dd7e5fa377cce7b2c0fd96a30669ab4356688dce8560c6ff8f8b1f57&w=900",
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of UI/UX design courses. Discover programs designed for all skill levels, from beginner to advanced.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/linear-flat-ui-ux-background_23-2149059700.jpg?t=st=1722895962~exp=1722899562~hmac=7d8ecad8a5422306dcdd6192a7225c42b755f288c7cfff6b10bd60ddcbcde515&w=900",
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses that cover UI/UX design basics, tools, and methodologies essential for development.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149047011.jpg?t=st=1722896132~exp=1722899732~hmac=592226b06f5670a243a7477a6b97d4dbe985d86b1638308493ec540e5da6ad52&w=900",
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge with hands-on projects that mirror real-world scenarios. Gain practical experience in UI/UX design and prototyping.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149057633.jpg?t=st=1722896162~exp=1722899762~hmac=88671de88fa829eeb1c2c33df858b4d2fc5d8a16e29b7cd1483a349b962b7fee&w=900",
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards. Set goals, track milestones, and measure your expertise as you advance through the courses.",
    },
    {
      imgSrc:
        "https://img.freepik.com/premium-vector/ui-ux-design-concept-creating-application-design-content-text-place-vector-illustration_199064-430.jpg?w=740",
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to deepen your knowledge in areas like user research, interaction design, or accessibility. Customize your learning path to fit your interests and career goals.",
    },
    {
      imgSrc:
        "https://img.freepik.com/premium-photo/flat-design-illustration-facebook-social-network-groups_863013-52914.jpg?w=740",
      title: "Earn Recognized Certifications",
      description:
        "Upon completing courses and projects, earn industry-recognized certifications to showcase your expertise and enhance your career prospects.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section py-10 md:py-0 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:pb-2 md:text-4xl lg:text-5xl font-medium">
            <span className="text-[#f6ac14]">Mastering</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              UI/UX Design:{" "}
            </span>
            <span className="text-[#0098f1]"> Create Intuitive and Engaging Experiences</span>
          </h2>
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
                    alt={`Course ${index + 1}`}
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

export default Ui_UxCard;
