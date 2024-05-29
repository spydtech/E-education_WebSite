import React from "react";

const FullStackPythonDevelopmentTestimonioals = () => {
  return (
    <>
      <div className="md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className="py-8">
          <h3 className="mt-3 font-extrabold text-blue-700  sm:mt-5 sm:text-xl lg:text-lg xl:text-4xl font-lora">
            Why people choose E-education for their career
          </h3>
          <p className=" text-base text-gray-600 text-md font-lora mt-4 pl-2">
            As E-education continues to evolve and expand, its transformative
            impact on the future of learning and career development remains
            undeniable. By embracing the flexibility, accessibility, and
            opportunities offered by online education, individuals can unlock
            their full potential and pursue rewarding career paths with
            confidence and resilience.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* featured card */}
          <div className="w-full">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
              <div
                className=" rounded-[35px] h-96 shadow-2xl p-8 flex
                justify-center items-center flex-col hover:-translate-y-4 transition-all duration-300 border border-gray-50
                "
              >
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1301397300/photo/portrait-of-young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=Xvgo-k58_woBTuQaRNZ4JXP2SQsw_RSbrlSbt7XbQlU="
                    alt=""
                    className="rounded-full h-48 w-48"
                  />
                </div>
                <div>Penny J.</div>
                <h5 class="text-gray-800 px-5 text-center mt-5">
                  "The ability to learn at my own pace and at my own convenience
                  has been phenomenal. I can engage in studies when it suits me
                  best."
                </h5>
              </div>
              <div
                className=" rounded-[35px] h-96 shadow-2xl p-8 flex flex-col
                justify-center items-center hover:-translate-y-4 transition-all duration-300 md:mt-16 border border-gray-50
                "
              >
                <img
                  src="https://media.istockphoto.com/id/1438185814/photo/college-student-asian-man-and-studying-on-laptop-at-campus-research-and-education-test-exam.jpg?s=612x612&w=0&k=20&c=YmnXshbaBxyRc4Nj43_hLdLD5FLPTbP0p_3-uC7sjik="
                  alt=""
                  className="rounded-full  h-48 w-48"
                />
                {/* <img src="https://st2.depositphotos.com/35018808/44240/v/450/depositphotos_442402190-stock-illustration-illustration-little-girl-working-computer.jpg"  alt=""/> */}
                <div>kevin M</div>
                <h5 className="text-gray-800 px-5 text-center mt-5">
                  "The knowledge and skills I acquired through my studies
                  empowered me to take on a groundbreaking project at work with
                  assurance."
                </h5>
              </div>
              <div
                className=" rounded-[35px] h-96 shadow-2xl p-8 flex flex-col border border-gray-50
                justify-center items-center hover:-translate-y-4 transition-all duration-300
                "
              >
                <img
                  src="https://media.istockphoto.com/id/1161370536/photo/dreamy-woman-podring-while-working-on-journalistic-publication-sitting-with-notebook-in-cafe.jpg?s=612x612&w=0&k=20&c=3kBh4OhYFWyL7Au2R67VNHPoNvWMss4ROfAtF9Eb_14="
                  alt=""
                  className="rounded-full h-48 w-48"
                />

                <div>Rihana S.</div>
                <h5 class="text-gray-800 px-5 text-center mt-5">
                  "Learning extends far beyond enhancing job skills; it
                  encompasses personal development. E-learning liberates me to
                  explore without limitations."
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullStackPythonDevelopmentTestimonioals;
