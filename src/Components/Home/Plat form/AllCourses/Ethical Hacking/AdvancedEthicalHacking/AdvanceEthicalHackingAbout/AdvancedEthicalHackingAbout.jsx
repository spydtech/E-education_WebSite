import React from "react";
// import programmer from "../../../../../../assets/dataAnalatics/programmer.jpg";
// import assistance from "../../../../../../assets/dataAnalatics/assistance.jpg";
// import support from "../../../../../assets/Platform/support.jpg";

const EthicalHackingAbout = () => {
  return (
    <div className=" w-full pl-4 bg-gradient-to-br mb-16 from-purple-300 via-pink-500 to-red-600">
      <div className="pt-0">
        <p className="text-orange-600 text-xl font-medium">
          About The Ethical Hacking Course
        </p>
      </div>
      <div className="py-2">
        <p className="md:text-5xl text-2xl font">
          Discover the
          <p className="text-violet-800 my-2">Ethical Hacking Program</p>
        </p>
      </div>

      <div className="flex flex-wrap  items-center pb-6">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover object-center"
              src="https://img.freepik.com/premium-vector/software-development-programming-language-coding-isometric-pc-computer-with-digital-application-white-background_284092-318.jpg?w=740"
              alt="career-assistance"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Career Assistance</h2>
              <p className="text-gray-700">
                Stay ahead with access to one-on-one career counseling sessions
                and mock interviews with industry professionals.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover"
              src="https://img.freepik.com/free-vector/hacker-activity-isometric-composition_1284-21475.jpg?t=st=1716550896~exp=1716554496~hmac=5802aeca8133c034a5da30c58e2e1eb86602a116a2c98b917ed68ea329193008&w=740"
              alt="student-support"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Student Support</h2>
              <p className="text-gray-700">
                Access student support via support@machinelearning.com or
                through the "ask us?" option on our learning platform for urgent
                queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthicalHackingAbout;
