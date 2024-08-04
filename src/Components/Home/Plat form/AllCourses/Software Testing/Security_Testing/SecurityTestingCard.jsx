import React from "react";

const SecurityTestingCard = () => {
  const courseData = [
    {
      imgSrc: "https://img.freepik.com/free-vector/man-sitting-desk-unlocking-computer-computer-settings-login-flat-illustration_74855-20645.jpg?t=st=1716801266~exp=1716804866~hmac=a175f1b6402416844d43b31f4223a4af11769cf0f2b0f15a2c17aeef35458484&w=740",
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of Security Testing courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/hand-drawn-vpn-illustration_23-2149229491.jpg?t=st=1716800702~exp=1716804302~hmac=75eb52de17103c6a02fcdb34c3682c3d816f1e354e6f741b90210e5e98935d80&w=740",
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts, tools, and methodologies essential for Security Testing.",
    },
    {
      imgSrc: "https://img.freepik.com/premium-vector/digital-media-data-concept-with-character-people-working-with-multimedia-files-database-upload-play-music-video-film_269730-293.jpg?w=740",
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in security testing, vulnerability assessment, and penetration testing under the guidance of industry experts.",
    },
    {
      imgSrc: "https://img.freepik.com/premium-vector/cloud-computing-technology-concept-with-character-data-storage-protection-computing-science-disk-services-connection-innovations_269730-308.jpg?w=740",
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Security Testing concepts as you advance through the courses.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/digital-designers-team-drawing-with-pen-computer-monitor_74855-10586.jpg?t=st=1716801403~exp=1716805003~hmac=83292bbbed4dd8e277f7371cb532153cfd2a240c3befe9df113c41a7d9a689c8&w=826",
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of Security Testing, such as automated testing, penetration testing, or incident response. Customize your learning path to align with your interests and career goals.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg?t=st=1716801419~exp=1716805019~hmac=7bc82bca82870cbfb7eb42f0c2379263f0d286f69044e64652e03f6c5d008db3&w=900",
      title: "Earn Recognized Certifications",
      description:
        "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section py-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl font-medium">
            <span className="text-[#f6ac14]">The</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              Future of{" "}
            </span>
            <span className="text-[#0098f1]"> Learning</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.map((item, index) => (
            <div
              key={index}
              className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
            >
              <a href="#">
                <div className={`relative h-60 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo}`}>
                  <img
                    className="w-full h-full object-cover"
                    src={item.imgSrc}
                    alt={item.title}
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-md text-gray-600 pt-4">
                    {item.description}
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

export default SecurityTestingCard;
