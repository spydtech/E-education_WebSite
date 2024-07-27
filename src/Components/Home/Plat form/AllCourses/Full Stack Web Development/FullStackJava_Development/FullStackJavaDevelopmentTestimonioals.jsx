import React from "react";

const FullStackJavaDevelopmentTestimonioals = () => {
  return (
    <>
      <div className="md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className="py-8">
          <h3 className="mt-3 font-extrabold text-violet-800 sm:mt-5 sm:text-xl lg:text-lg xl:text-4xl font">
            Why people choose E-education for their career
          </h3>
          <p className="text-base text-gray-600 text-md font mt-4 pl-2">
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
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 items-start">
              <div className="testimonial-card">
                <img
                  src="https://media.istockphoto.com/id/1150786791/photo/college-student-stock-image.jpg?s=612x612&w=0&k=20&c=OqM1hPX3UsoVCdTtvmpw1WOAOczkHOtyVKl5YEhUnmQ="
                  alt=""
                  className="rounded-full h-48 w-48 mx-auto"
                />
                <div className="text-center mt-5">
                  <div>Taylor .G</div>
                  <h5 className="text-gray-800 px-5 text-center mt-5">
                    "The structured learning paths helped me focus and progress
                    quickly. The flexibility is unparalleled."
                  </h5>
                </div>
              </div>
              <div className="testimonial-card">
                <img
                  src="https://media.istockphoto.com/id/1139495117/photo/facing-my-future-with-confidence.jpg?s=612x612&w=0&k=20&c=mtC9fv2OKeoGR4eAxSgm3Laukw7EBYYbHVRrO5D88PY="
                  alt=""
                  className="rounded-full h-52 w-52 mx-auto"
                />
                <div className="text-center mt-5">
                  <div>Mitch .R</div>
                  <h5 className="text-gray-800 px-5 text-center mt-5">
                    "The hands-on projects were invaluable. They gave me the
                    confidence to tackle real-world challenges."
                  </h5>
                </div>
              </div>
              <div className="testimonial-card">
                <img
                  src="https://media.istockphoto.com/id/476228508/photo/close-up-of-female-college-student.jpg?s=612x612&w=0&k=20&c=d6ZCv3jSua8y9bCt0etvM8QI7M99KuTGS3oQsdU6c5A="
                  alt=""
                  className="rounded-full h-48 w-48 mx-auto"
                />
                <div className="text-center mt-5">
                  <div>Gwen K.</div>
                  <h5 className="text-gray-800 px-5 text-center mt-5">
                    "The courses offered deep insights and practical knowledge.
                    I've grown both professionally and personally."
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullStackJavaDevelopmentTestimonioals;
