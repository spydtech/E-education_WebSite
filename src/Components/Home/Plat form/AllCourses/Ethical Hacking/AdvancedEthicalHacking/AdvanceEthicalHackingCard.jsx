import React from "react";

const AdvanceEthicalHackingCard = () => {
  const cardData = [
    {
      imgSrc: "https://img.freepik.com/free-vector/employee-assessment-concept-employee-evaluation-testing-form-report-worker-performance-review-staff-management-empolyee-development-isolated-flat-vector-illustration_613284-1182.jpg?t=st=1722363462~exp=1722367062~hmac=328de678582773da9f7345ddcbb20ddc201e02961e5ba13bb5aa7798a33cd187&w=900",
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of Ethical Hacking courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc: "https://spacema-dev.com/elevate/assets/images/portfolio-2.png",
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts, algorithms, and programming languages essential for Ethical Hacking.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/hacker-concept-illustration_114360-1998.jpg?w=740&t=st=1722362971~exp=1722363571~hmac=0e239189021d645f5e84254996b2b20b656bc3e9f0b519de5e4e548b64a872ff",
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in data analysis, model building, and evaluation under the guidance of industry experts.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg?t=st=1722363128~exp=1722366728~hmac=8fa487753d770c0611cf440c1499126927092d38e0a801dec29334e0664adb40&w=740",
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Ethical Hacking concepts as you advance through the courses.",
    },
    {
      imgSrc: "https://img.freepik.com/free-vector/hacker-safe-composition-with-man-hoodie-hacks-computer-climbs-inside-illustration_1284-29277.jpg?t=st=1722363238~exp=1722366838~hmac=70ebde72b1060e69199f94afa56a1a67951064ceac0239c69153c5797cb630b7&w=740",
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of Ethical Hacking, such as penetration testing, network security, or digital forensics. Customize your learning path to align with your interests and career goals.",
    },
    {
      imgSrc: "https://spacema-dev.com/elevate/assets/images/portfolio-6.png",
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
          {cardData.map((item, index) => (
            <div
              key={index}
              className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
            >
              <a href="#">
                <div className="relative h-[210px] bg-[#0098f1]">
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

export default AdvanceEthicalHackingCard;
