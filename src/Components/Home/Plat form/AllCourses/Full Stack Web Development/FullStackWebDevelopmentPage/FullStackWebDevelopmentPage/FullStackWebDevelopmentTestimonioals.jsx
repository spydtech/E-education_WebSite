
import React from "react";

const FullStackWebDevelopmentTestimonials = () => {
  return (
    <>
      <div className="md:px-14 px-4 max-w-screen-2xl mx-auto ">
        <div className="py-8">
          <h3 className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-2xl xl:text-4xl font-lora">
            Why people choose E-education for their career
          </h3>
          <p className="text-base text-gray-600 text-md font-lora mt-4 pl-2">
            As E-education continues to evolve and expand, its transformative impact on the future of learning and career development remains undeniable. By embracing the flexibility, accessibility, and opportunities offered by online education, individuals can unlock their full potential and pursue rewarding career paths with confidence and resilience.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-x-10 gap-y-40">
          {/* featured card */}
          <div className="w-full">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-y-8 md:gap-12">
              <div
                className="rounded-[35px] md:h-96 h-full shadow-2xl p-8 flex w-full
                justify-center items-center flex-col hover:-translate-y-4 transition-all duration-300 border border-gray-50"
              >
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJpTjnUJj1dJB_HUNWfRCCGXtq4FzAW5r4ZgSr7qH0lw&s"
                    alt=""
                    className="rounded-full md:h-48 md:w-48 w-full"
                  />
                </div>
                <div>Felipe M.</div>
                <div className="text-gray-800 px-5 text-center mt-5 text-base">
                  "To be able to take courses at my own pace and rhythm has been an amazing experience."
                </div>
              </div>
              <div
                className="rounded-[35px] md:h-96 h-full shadow-2xl p-8 flex flex-col
                justify-center items-center hover:-translate-y-4 transition-all duration-300 md:mt-16 border border-gray-50"
              >
                <img
                  src="https://i.pinimg.com/564x/ea/87/25/ea8725efe43fe165f4bf3c868c4cbc04.jpg"
                  alt=""
                  className="rounded-full md:h-52 md:w-52"
                />
                <div>Jennifer J.</div>
                <h5 className="text-gray-800 px-5 text-center mt-5">
                  "I directly applied the concepts and skills I learned from my courses to an exciting new project at work."
                </h5>
              </div>
              <div
                className="rounded-[35px] md:h-96 h-full shadow-2xl p-8 flex flex-col border border-gray-50
                justify-center items-center hover:-translate-y-4 transition-all duration-300"
              >
                <div>

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmGcoTCCFcticUpLWBjZc0QCFBtzaq3242yoBsvlWewrnr0e9DJeU6XUWGnKSA279dzz0&usqp=CAU"
                  alt=""
                  className="rounded-full md:h-48 md:w-48"
                />
                </div>
                <div>Spana S.</div>
                <div className="text-gray-800 px-5 text-center mt-5">
                  "Learning isn't just about being better at your job: it's so much more than that."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullStackWebDevelopmentTestimonials;