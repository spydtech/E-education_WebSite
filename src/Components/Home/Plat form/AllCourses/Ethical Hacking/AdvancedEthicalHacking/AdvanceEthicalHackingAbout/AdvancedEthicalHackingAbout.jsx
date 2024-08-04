import React from "react";

const EthicalHackingAbout = () => {
  const ethicalHackingInfo = [
    {
      title: "Career Assistance",
      description:
        "Stay ahead with access to one-on-one career counseling sessions and mock interviews with industry professionals.",
      imgSrc: "https://img.freepik.com/premium-vector/software-development-programming-language-coding-isometric-pc-computer-with-digital-application-white-background_284092-318.jpg?w=740",
      imgAlt: "career-assistance",
    },
    {
      title: "Student Support",
      description:
        'Access student support via support@machinelearning.com or through the "ask us?" option on our learning platform for urgent queries.',
      imgSrc: "https://img.freepik.com/free-vector/hacker-activity-isometric-composition_1284-21475.jpg?t=st=1716550896~exp=1716554496~hmac=5802aeca8133c034a5da30c58e2e1eb86602a116a2c98b917ed68ea329193008&w=740",
      imgAlt: "student-support",
    },
  ];

  return (
    <div className="mx-auto h-auto w-full mb-20 px-4 md:px-10 bg-white">
      <div className="py-2 my-10">
        <p className="text-2xl text-center font-bold text-[#f6ac14]">
          Discover the Ethical Hacking Program
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center pb-6">
        {ethicalHackingInfo.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white h-[400px] rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-52 object-cover object-center"
                src={item.imgSrc}
                alt={item.imgAlt}
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EthicalHackingAbout;
